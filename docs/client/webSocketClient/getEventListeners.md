---
title: getEventListeners()
order: 0
---

# {{ $frontmatter.title }}

Gets all the listeners for the specified websocket event.

## Usage

```ts
getEventListeners(eventName: string | null): ((...args: any[]) => void)[];
```
