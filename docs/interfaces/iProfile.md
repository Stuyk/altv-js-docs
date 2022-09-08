---
title: IProfile
order: 0
---

# {{ $frontmatter.title }}

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

<!--@include: ./parts/iProfile.md-->
