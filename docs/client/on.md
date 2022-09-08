---
title: on()
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./on_partial_header.md-->

## Function Definition

```ts
function on<K extends string>(eventName: K, listener: shared.InterfaceValueByKey<IClientEvent, K, (...args: any[]) => void, never>): void;
```

### Arguments

* eventName: K
* listener: shared.InterfaceValueByKey\<IClientEvent, K, (...args: any[]) =\> void, never\>

### Returns

* void

## Documentation

<!--@include: ./on_partial_footer.md-->
