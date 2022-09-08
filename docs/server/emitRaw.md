---
title: emitRaw()
order: 0
---

# {{ $frontmatter.title }}

## Function Definition

```ts
function emitRaw<K extends string>(eventName: Exclude<K, keyof IServerEvent>, ...args: any[]): void;
```

### Arguments

* eventName: Exclude\<K, keyof IServerEvent\>
* ...args: any[]

### Returns

* void

## Documentation

<!--@include: ./parts/emitRaw.md-->
