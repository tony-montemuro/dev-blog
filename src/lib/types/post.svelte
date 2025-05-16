<script lang="ts" context="module">
  export type Date = `${string}-${string}-${string}`;

  export interface Post {
    title: string;
    slug: string;
    created: Date;
    updated?: Date;
    description: string;
    image?: string;
    categories: string[];
  }
</script>
