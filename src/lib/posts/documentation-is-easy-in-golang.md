---
title: "Documentation is Easy in Golang"
created: "2026-04-30"
description: "Unlike many other languages, documenting Go code is easy! Learn about proper Go documentation and its surrounding tooling."
image: "/go-docs.png"
categories:
    - "go"
    - "backend"

---

Did you know that Go has its own format for writing comments that are automatically converted into documentation? In classic Go fashion, the language designers standardized a common process (in this case, documentation), so that developers can focus on real problems, rather than arguing over the best ways to format docs. For me, this was a nice surprise that I was unaware of for the longest time.

This format is known as `Go Doc`, and it has relatively simple rules:

- Place a comment on the line directly preceeding the identifier being documented, with no blank lines separating the two.
- The comment can consist of one or more lines, and it is idiomatic for all lines to begin with `//`, followed by a space.
    - While it is technically legal to use `/*` and `*/` to mark a Go Doc comment block, the `//` syntax is preferred.
- Go Doc comments can be applied to the following entities:
    - Packages
    - Functions
    - Types
    - Interfaces
    - Methods
    - Constants
    - Variables
    - Struct fields
    - Interface methods
- The first word in the Go doc comment for a particular entity should be the name of that entity. For grammatical correctness, you can optionally begin the comment with "A" or "An".
    - The exception to this rule is for Go Doc comments documenting a package. In this case, the comment should begin with the word "Package".
- Use blank comments (double slashes and a newline) to break the comment into multiple paragraphs.

Let's see a few basic examples of well-documented entities.

First, let's see Go Doc comments for a function:

```go
// Add returns the sum of two integers.
func Add(a, b int) int {
    return a + b
}
```

Notice how all of the rules discussed (with the exception of the final rule) apply here.

Now, let's look at a package-level variable:

```go
// DefaultTimeout is the default duration to wait before cancelling 
// a request. It applies to all outbound HTTP calls unless 
// overridden by a context deadline or a timeout set directly
// on the http.Client.
var DefaultTimeout = 30 * time.Second
```

This Go Doc comment extends to multiple lines. Finally, a package-level comment:

```go
// Package mathutil provides utility functions for common 
// mathematical operations.
//
// It includes support for integer and floating-point arithmetic, 
// rounding, clamping, and other helpers commonly needed in 
// numerical code.
//
// All functions in this package are safe for concurrent use.
package mathutil
```

As you can see, for package-level comments, we start with the word "Package". This is also an example of a multi-paragraph Go Doc comment.

> If you have a lengthy comment for the package, the convention is to put this comment in a separate file within the package called `doc.go`.

So, what exactly do you gain from doing all of this? Well, Go includes a CLI tool called `go doc` that displays Go Doc comments, and it's quite simple to use. The command `go doc <package>` displays the package-level Go Doc comment, as well as all exported identifiers (use the `u` flag to include unexported identifiers). Run `go doc <package>.<Identifier>` to display the Go Doc comment for a particular identifier. This makes it convenient to view the documentation for packages that you work with, and their corresponding identifiers, all from the command line!

But wait, there's more! There's a site managed by the Go team called `pkg.go.dev`, that automatically indexes open-source Go modules, publishing information about each module, *including the Go Doc comments*! This enables you to view your documentation in a neat format within the browser. You can take advantage of this tool even without open-sourcing your module, by using the `pkgsite` tool. To install `pkgsite`, use this command:

```
go install golang.org/x/pkgsite/cmd/pkgsite@latest
```

Then, it's as simple as running `pkgsite` in the root directory of your module, and visiting `http://localhost:8080` to view your project and its source code.

There are a few formatting "tricks" you can use to make your documents look nicer in this HTML format:

- To add indentation, put an additional space after the double slashes.
- If you want a "header" in your comment, you can use a trick similar to Markdown: put a `#` and a space at the beginning of the comment. 
    - Note that a header can only be a single line, and unlike Markdown, there is only one "level" of headers.
- To make a link to another package, place the package path within brackets: `[<package/path>]`. This includes packages not defined within the current module.
- To link to another exported entity, place its name within brackets: `[<ExportedEntity>]`. For symbols in other packages: `[<packageName>.<ExportedEntity>]`
- Raw URLs within your comment will be converted to links (no special formatting required)!
- If you want to have text that links to a particular web page, it's a bit more complicated. First, put the text within brackets: `[<YourText>]`. Then, at the end of the comment block, you can declare a mapping between your text and the URL that it links to, via the following format: `// [<YourText>]: URL`.

This article is a summary for getting started with Go Doc comments. For more information, please visit the official [Go Doc Comments](https://go.dev/doc/comment) docs.
