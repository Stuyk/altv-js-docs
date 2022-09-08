---
title: IProfile
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./iProfile_partial_header.md-->

## Interface Definition

```ts
interface IProfile {
    readonly id: number;
    readonly type: string;
    readonly start: number;
    readonly end: number;
    readonly samples: number;
    readonly root: IProfileNode;
};
```

## Documentation

<!--@include: ./iProfile_partial_footer.md-->
