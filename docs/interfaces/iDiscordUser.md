---
title: IDiscordUser
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./iDiscordUser_partial_header.md-->

## Interface Definition

```ts
interface IDiscordUser {
    readonly id: string;
    readonly name: string;
    readonly discriminator: string;
    readonly avatar: string;
};
```

## Documentation

<!--@include: ./iDiscordUser_partial_footer.md-->
