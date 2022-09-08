---
title: on
order: 0
---

# {{ $frontmatter.title }}

## Function Definition

```ts
export function on<K extends string>(eventName: K, listener: shared.InterfaceValueByKey<IClientEvent, K, (...args: any[]) => void, never>): void;
```

## Documentation

<!--@include: ./parts/on.md-->
