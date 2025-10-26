---
title: "Row Security Policies in PostgreSQL"
created: "2025-10-26"
description: "Learn how to secure your PostgreSQL tables with row security policies, from simple user filters to multi-role, policy-based access."
image: "/row-security-policies.png"
categories:
    - "databases"
    - "postgresql"
    - "security"

---

Database security is an obviously important topic. It's especially important if you are exploring serverless PostgreSQL platforms such as [Supabase](https://supabase.com/), where, in many cases, there is no server layer between your client and database. As someone who built a [relatively complex serverless application using Supabase](https://smbelite.net/), I've spent a long time thinking about database security. In this article, I will introduce PostgreSQL's most powerful security tool: [Row Security Policies](https://www.postgresql.org/docs/18/ddl-rowsecurity.html).

## What are PostgreSQL Row Security Policies?

In PostgreSQL, you can define *row security policies* that restrict, on a per-user basis, read and write operations. This feature can be enabled on a table-by-table basis, using the following command:

```sql
ALTER TABLE <table_name>
ENABLE ROW LEVEL SECURITY;
```

When this feature is enabled, all normal access to \<table_name> for reading and writing must pass the row security policies. If no policy exists, the default position is to *deny all read and write operations*!

> Note that superusers and roles with the `BYPASSRLS` attribute always bypass the row security system when accessing a table.

Row security policies are defined on a table. Each policy is specific to a command. The options are:

- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`
- `ALL` (all of the above)

Each policy can be assigned to one or more roles.

To specify which rows are readable or writeable, you can define a boolean expression, which gets evaluated for each row prior to any conditions from the user's query. A useful mental model is to think of row security policies as *implicit where clauses*. For instance, suppose you had a row security policy that restricts viewing rows created before a specific date, such as `2020-01-01`. A normal query like:

```sql
SELECT *
FROM note;
```

Becomes essentially equivalent to:
```sql
SELECT *
FROM note 
WHERE created_date >= '2020-01-01'; -- implicitly added from the row security policy
```

## Row Security Policy example

Let's apply this information on a practical example. First, we will start with a few users roles:

```sql
CREATE ROLE alice LOGIN PASSWORD 'pass';
CREATE ROLE bob LOGIN PASSWORD 'pass';
CREATE ROLE carol LOGIN PASSWORD 'pass';
```

We will assign some row security policies to these roles. Now, let's setup a table, and fill it with some data:

```sql
-- Create note table
CREATE TABLE note (
    id serial PRIMARY KEY,
    owner name NOT NULL,
    content text NOT NULL,
    created_date DATE NOT NULL
);

-- Insert data into note table
INSERT INTO note (owner, content, created_date)
VALUES
    ('alice', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2023-08-22'),
    ('bob', 'Duis ultricies sagittis orci, eget tempus nibh interdum quis.', '2025-10-26'),
    ('bob', 'Sed semper sollicitudin leo sed tincidunt.', '2019-03-14');
```

Next, we need to grant `SELECT` privilege on `note` for each user.

```sql
GRANT SELECT ON note TO alice, bob, carol;
```

> It's important to note the distinction between `GRANT` and row security policies. `GRANT` enables one or more roles to perform a specific operation on a table. Row security policies are designed to *filter* this access.

Now, if we set our role to one of our 3 users, we can `SELECT` all data from our table:

```sql
-- Login as alice
SET ROLE alice;

-- Select all notes
SELECT * FROM note;
```

This should return **all rows in the table**. Now let's suppose we wish to limit read access, such that users can only see rows that they own. For this, we can use *row security policies*. To do this, we first need to enable row security policies:

```sql
-- Logout from alice
RESET ROLE;

-- Enable row security
ALTER TABLE note
ENABLE ROW LEVEL SECURITY;
```

Now, if we set our role back to one of the 3 users, and try `SELECT` on all data again, we will get a different result:

```sql
SET ROLE alice;
SELECT * FROM note;
```

Now, this returns **0 rows**. Why? If you recall earlier from the article, when no explicit policies are defined, an implicit default-deny policy is applied to all operations. To enable users to view their own rows, we can use the following policy:

```sql
CREATE POLICY user_select_own
ON note
FOR SELECT
TO alice, bob, carol
USING (owner = current_user);
```

Let's break down this policy:

- We create a policy called `user_select_own`.
- This policy is defined on the `note` table.
- Defined for the `SELECT` operation.
- Assigned to the roles `alice`, `bob`, and `carol`.
    - Note that it might not be ideal to individually assign this policy to each role in our database. Alternatively, we can use the special `public` role to assign a policy to every role on the system.
- The `USING` clause defines our boolean expression that is evaluated to each row relevant to the user query.
    - `current_user` is a keyword in PostgreSQL that returns the user name of the current execution context.
    - Thus, if the `owner` attribute of `note` matches `current_user` (evalutates to true), that row is able to be returned. Otherwise, the row is hidden from the result.

Now, our `SELECT` query will have different results depending on the current user. For instance:

```sql
SET ROLE alice;
SELECT * FROM note;
```

This query returns the 1 row belonging to alice.

```sql
RESET ROLE;
SET ROLE bob;
SELECT * FROM note;
```

This query returns the 2 rows belonging to bob.

```sql
RESET ROLE;
SET ROLE carol;
SELECT * FROM note;
```

This query returns 0 rows, since carol does not own any rows.

Before we move on, let's reset the role:

```sql
RESET ROLE;
```

## Advanced Row Security concepts

The above is a simple example. However, as things become more complex, there are some additional concepts worth considering.

Consider this: you can define *multiple polices that are associated with a specific operation and a set of roles*. In this case, how does PostgreSQL combine these policies to filter the results? By default, policies are combined using `OR`. However, we can actually control this behavior for each query using the following categorization:

1. **Permissive policies (default)**: When a policy is defined as permissive, it is combined with other relevant policies using `OR`.
2. **Restrictive policies**: When a policy is defined as restrictive, it is combined with other relevant policies using `AND`.

To explicitly mark a policy as one of these two categorizations, let's consider our policy from earlier. It would look like this:

```sql
CREATE POLICY user_select_own
ON note
AS { PERMISSIVE | RESTRICTIVE }
FOR SELECT
TO alice, bob, carol
USING (owner = current_user);
```

Also, recall the `USING` clause, in which we define our boolean expression that gets evaluated against each relevant row. There is actually another clause that has similar behavior. Let's break down these two clauses:

1. `USING` clause: Used to define a boolean expression that is applied to each row *before* an operation is applied. Thus, it is used for the following operations:
    - `SELECT`
    - `UPDATE`
    - `DELETE`
2. `WITH CHECK` clause: Used to define a boolean expression that is applied to each row *after* an operation is applied. Thus, it is used for the following operations:
    - `INSERT`
    - `UPDATE`

Notice how `UPDATE` can have *both* clauses. This is an important consideration when defining `UPDATE` policies.

## Advanced Row Security example

Let's build on our earlier example by introducing **role hierarchies**, **update policies**, and **restrictive policies**. This time, we will introduce 2 *group roles* to represent user tiers: `normal` and `admin`.

```sql
-- Create group roles
CREATE ROLE normal;
CREATE ROLE admin;

-- Assign users to groups
GRANT normal TO bob;
GRANT normal TO carol;
GRANT admin TO alice;
```

This categorizes `bob` and `carol` as `normal`, and `alice` as `admin`. Now, let's redefine our `SELECT` policy using these group roles:

```sql
-- Drop original policy
DROP POLICY "user_select_own" ON note;

-- Normal users can only read their own rows
CREATE POLICY normal_select_own
ON note
FOR SELECT
TO normal
USING (owner = current_user);

-- Admins can read all rows
CREATE POLICY admin_select_all
ON note
FOR SELECT
TO admin
USING (true);
```

In this example:

- `normal` users (`bob`, `carol`) are only able to see their own notes from the `normal_select_own` policy.
- `admin` users (`alice`) are able to see all rows in the table from the `admin_select_all` policy.

Now, if we login as `alice`, we will be able to see all rows:

```sql
SET ROLE alice;
SELECT * FROM note;
```

And if we swap to `bob`, we will still only see rows he owns:

```sql
RESET ROLE;
SET ROLE bob;
SELECT * FROM note;
```

Let's move on to the **update policy**. Before we do, let's first reset the role:

```sql
RESET ROLE;
```

Now, we will similarly create a policy for each user group:

```sql
-- Enable UPDATE for admin and normal users
GRANT UPDATE ON note TO admin, normal;

-- Normal users can update their own rows, and cannot change ownership
CREATE POLICY normal_update_own
ON note
FOR UPDATE
TO normal
USING (owner = current_user)
WITH CHECK (owner = current_user);

-- Admin users can update any rows
CREATE POLICY admin_update_all
ON note
FOR UPDATE
TO admin
USING (true)
WITH CHECK (true);
```

In this example:

- `normal` users (`bob`, `carol`) are only able to update their own notes from the `normal_update_own` policy.
    - The `USING` clause restricts users from choosing to update rows they do not own.
    - The `WITH CHECK` clause restricts users from setting `owner` to a different user (no change of ownership).
        - The `USING` clause is actually redundant here, as our `SELECT` policy already limits visibility. However, it's good practice to explicitly redefine it here.
        - Note that in this case, the `USING` clause is technically redundant, as our `SELECT` policy will handle this part for us. But it's good practice to explicitly re-define this policy here, so we aren't relying on implicity behavior.
- `admin` users (`alice`) are able to update any notes from the `admin_update_all` policy, as both the `USING` and `WITH CHECK` clauses are set to `true` (unfiltered access).

This will behave similarly to our `SELECT` policy. But let's throw in a **restrictive policy** into the mix! We can imagine a situation where we would want to **disallow updates to notes before a certain date**, regardless of who performs the update. To enforce this **required** rule, we can use a **restrictive policy**:

```sql
CREATE POLICY disallow_old_updates
ON note
AS RESTRICTIVE
FOR UPDATE
USING (created_date >= '2020-01-01')
WITH CHECK (created_date >= '2020-01-01');
```

In this example:

- **All** users (`bob`, `carol`, and `alice`) are only able to update rows that were created AFTER `2020-01-01` from the `disallow_old_updates` policy. They are also prevented from setting the `created_date` to a date BEFORE `2020-01-01`.
- This new restriction will tighten access.

Effectively, we can think of all `UPDATE` queries with the following appended `WHERE` clause:

```sql
WHERE (admin_update_all OR normal_update_own) AND disallow_old_updates;
```

Let's walk through what happens under different scenarios, starting with `alice`:

```sql
-- Login as alice
SET ROLE alice;

-- Attempt to update all notes owned by bob
UPDATE note
SET content = 'Updated by an admin'
WHERE owner = 'bob';
```

You should notice that the output of this query is:

```
UPDATE 1
```

This demonstrates two things:

- `alice` is able to `UPDATE` rows she does not own. This demonstrates that the *permissive policy* (`admin_update_all`) is working as expected.
- However, if that row was created *before* `2020-01-01`, the row cannot be updated. This demonstrates that the *restrictive policy* (`disallow_old_updates`) is working as expected.

This is why only one row was updated. `bob` has a row that was created in 2019.

Now, let's have `bob` try to update some rows:

```sql
-- Login as bob
RESET ROLE;
SET ROLE bob;

-- Attempt to update all notes
UPDATE NOTE
SET CONTENT = 'Bob was here';
```

As you can see, the output is the same:

```
UPDATE 1
```

It's worth understanding what this output reveals:

- `bob` was unable to edit any rows not owned by himself (1 row owned by `alice`). This demonstrates that the *permissive policy* (`normal_update_own`) is working as expected.
- `bob` was unable to edit his own row that was created before `2020-01-01`. This demonstrates that the *restrictive policy* (`disallow_old_updates`) is working as expected.

In this example, we demonstrate how PostgreSQL's **row security polices** can express complex access logic directly in the database layer by combining permissive and restrictive policies on multiple different roles.

## Conclusion

I hope you learned a thing or two about getting started with **row security policies** in PostgreSQL. From here, I would suggest this article on [RLS Performance and Best Practices](https://supabase.com/docs/guides/troubleshooting/rls-performance-and-best-practices-Z5Jjwv) from Supabase. While many of the examples use helper functions specific to Supabase, the advice itself is broadly applicable to PostgreSQL databases.

If you have any questions about row security policies, please don't hesitate to reach out!
