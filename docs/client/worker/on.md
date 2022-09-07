---
title: on()
order: 0
---

# {{ $frontmatter.title }}

Listens to an event emitted by the worker.

## Usage

```ts
on(eventName: string, callback: (...args: any[]) => void): void;
```
