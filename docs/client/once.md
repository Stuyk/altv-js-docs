---
title: once
order: 0
---

# {{ $frontmatter.title }}

## Function Definition

```ts
export function once<K extends string>(eventName: K, listener: shared.InterfaceValueByKey<IClientEvent, K, (...args: any[]) => void, never>): void;
```

## Documentation

<!--@include: ./parts/once.md-->
