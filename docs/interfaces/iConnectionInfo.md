---
title: IConnectionInfo
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./iConnectionInfo_partial_header.md-->

## Interface Definition

```ts
interface IConnectionInfo {
    accept: () => void;
    decline: (reason: string) => void;
    readonly isAccepted: boolean;
};
```

## Documentation

<!--@include: ./iConnectionInfo_partial_footer.md-->
