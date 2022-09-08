---
title: IWeapon
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./iWeapon_partial_header.md-->

## Interface Definition

```ts
interface IWeapon {
    readonly hash: number;
    readonly tintIndex: number;
    readonly components: ReadonlyArray<number>;
};
```

## Documentation

<!--@include: ./iWeapon_partial_footer.md-->
