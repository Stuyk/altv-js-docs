---
title: emit
order: 0
---

# {{ $frontmatter.title }}

## Function Definition

```ts
export function emit<K extends string>(eventName: Exclude<K, keyof IClientEvent>, ...args: any[]): void;
```

## Documentation

<!--@include: ./parts/emit.md-->
