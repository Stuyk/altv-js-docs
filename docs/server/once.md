---
title: once()
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./once_partial_header.md-->

## Function Definition

```ts
function once<K extends string>(eventName: K, listener: shared.InterfaceValueByKey<IServerEvent, K, (...args: any[]) => void, never>): void;
```

### Arguments

* eventName: K
* listener: shared.InterfaceValueByKey\<IServerEvent, K, (...args: any[]) =\> void, never\>

### Returns

* void

## Documentation

<!--@include: ./once_partial_footer.md-->
