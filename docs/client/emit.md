---
title: emit()
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./emit_partial_header.md-->

## Function Definition

```ts
function emit<K extends string>(eventName: Exclude<K, keyof IClientEvent>, ...args: any[]): void;
```

### Arguments

* eventName: Exclude\<K, keyof IClientEvent\>
* ...args: any[]

### Returns

* void

## Documentation

<!--@include: ./emit_partial_footer.md-->
