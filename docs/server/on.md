---
title: on
order: 0
---

# {{ $frontmatter.title }}

## Function Definition

```ts
function on<K extends string>(eventName: K, listener: shared.InterfaceValueByKey<IServerEvent, K, (...args: any[]) => void, never>): void;
```

### Arguments

* eventName: K
* listener: shared.InterfaceValueByKey\<IServerEvent, K, (...args: any[]) =\> void, never\>

## Documentation

<!--@include: ./parts/on.md-->
