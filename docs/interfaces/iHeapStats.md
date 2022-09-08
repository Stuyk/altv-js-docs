---
title: IHeapStats
order: 0
---

# {{ $frontmatter.title }}

## Interface Definition

```ts
interface IHeapStats {
    readonly heapSizeLimit: number;
    readonly totalHeapSize: number;
    readonly usedHeapSize: number;
    readonly mallocedMemory: number;
    readonly peakMallocedMemory: number;
};
```

## Documentation

<!--@include: ./parts/iHeapStats.md-->
