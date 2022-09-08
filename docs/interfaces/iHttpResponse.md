---
title: IHttpResponse
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./iHttpResponse_partial_header.md-->

## Interface Definition

```ts
interface IHttpResponse {
    readonly statusCode: number;
    readonly body: string;
    readonly headers: Record<string, string>;
};
```

## Documentation

<!--@include: ./iHttpResponse_partial_footer.md-->
