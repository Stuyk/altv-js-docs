---
title: emitRaw
order: 0
---

# {{ $frontmatter.title }}

## Function Definition

```ts
function emitRaw<K extends string>(eventName: Exclude<K, keyof IClientEvent>, ...args: any[]): void;
```

### Arguments

* eventName: Exclude<K, keyof IClientEvent>
* ...args: any[]

## Documentation

<!--@include: ./parts/emitRaw.md-->
