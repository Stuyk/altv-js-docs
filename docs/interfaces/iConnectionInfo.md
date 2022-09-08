---
title: IConnectionInfo
order: 0
---

# {{ $frontmatter.title }}

## Interface Definition

```ts
interface IConnectionInfo {
    accept: () => void;
    decline: (reason: string) => void;
    readonly isAccepted: boolean;
};
```

## Documentation

<!--@include: ./parts/iConnectionInfo.md-->
