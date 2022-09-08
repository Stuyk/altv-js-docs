---
title: IHeapStats
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./iHeapStats_partial_header.md-->

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

<!--@include: ./iHeapStats_partial_footer.md-->
