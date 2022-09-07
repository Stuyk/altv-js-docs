---
title: requestModel()
order: 0
---

# {{ $frontmatter.title }}

Loads a model into memory asynchronously, like {@link loadModelAsync} but more safely.

## Usage

```ts
static requestModel(model: string | number, timeout?: number): Promise<void>;
```
