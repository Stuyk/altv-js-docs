---
title: IHttpResponse
order: 0
---

# {{ $frontmatter.title }}

## Interface Definition

```ts
interface IHttpResponse {
    readonly statusCode: number;
    readonly body: string;
    readonly headers: Record<string, string>;
};
```

## Documentation

<!--@include: ./parts/iHttpResponse.md-->
