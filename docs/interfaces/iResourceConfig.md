---
title: IResourceConfig
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./iResourceConfig_partial_header.md-->

## Interface Definition

```ts
interface IResourceConfig {
    readonly type?: string;
    readonly deps?: ReadonlyArray<string>;
    readonly main?: string;
    readonly "client-main"?: string;
    readonly "client-type"?: string;
    readonly "client-files"?: ReadonlyArray<string>;
    readonly "required-permissions"?: ReadonlyArray<shared.Permission>;
    readonly "optional-permissions"?: ReadonlyArray<shared.Permission>;
    readonly [key: string]: unknown;
};
```

## Documentation

<!--@include: ./iResourceConfig_partial_footer.md-->
