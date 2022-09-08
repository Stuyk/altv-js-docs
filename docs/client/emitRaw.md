---
title: emitRaw()
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./emitRaw_partial_header.md-->

## Function Definition

```ts
function emitRaw<K extends string>(eventName: Exclude<K, keyof IClientEvent>, ...args: any[]): void;
```

### Arguments

* eventName: Exclude\<K, keyof IClientEvent\>
* ...args: any[]

### Returns

* void

## Documentation

<!--@include: ./emitRaw_partial_footer.md-->
