---
title: once
order: 0
---

# {{ $frontmatter.title }}

## Function Definition

```ts
function once<K extends string>(eventName: K, listener: shared.InterfaceValueByKey<IClientEvent, K, (...args: any[]) => void, never>): void;
```

### Arguments

* eventName: K
* listener: shared.InterfaceValueByKey\<IClientEvent, K, (...args: any[]) =\> void, never\>

## Documentation

<!--@include: ./parts/once.md-->
