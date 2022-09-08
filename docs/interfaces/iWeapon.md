---
title: IWeapon
order: 0
---

# {{ $frontmatter.title }}

## Interface Definition

```ts
interface IWeapon {
    readonly hash: number;
    readonly tintIndex: number;
    readonly components: ReadonlyArray<number>;
};
```

## Documentation

<!--@include: ./parts/iWeapon.md-->
