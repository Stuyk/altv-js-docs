---
title: once()
order: 0
---

# {{ $frontmatter.title }}

Subscribes to WebView event with specified listener, which only triggers once.

## Usage

```ts
once(eventName: string, listener: (...args: any[]) => void): void;
```
