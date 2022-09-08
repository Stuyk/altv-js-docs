---
title: emitRaw
order: 0
---

# {{ $frontmatter.title }}

## Function Definition

```ts
export function emitRaw<K extends string>(eventName: Exclude<K, keyof IClientEvent>, ...args: any[]): void;
```

## Documentation

<!--@include: ./parts/emitRaw.md-->
