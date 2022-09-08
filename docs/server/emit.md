---
title: emit()
order: 0
---

# {{ $frontmatter.title }}

## Function Definition

```ts
function emit<K extends string>(eventName: Exclude<K, keyof IServerEvent>, ...args: any[]): void;
```

### Arguments

* eventName: Exclude\<K, keyof IServerEvent\>
* ...args: any[]

### Returns

* void

## Documentation

<!--@include: ./parts/emit.md-->
