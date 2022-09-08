---
title: IServerConfig
order: 0
---

# {{ $frontmatter.title }}

## Interface Definition

```ts
interface IServerConfig {
    readonly resources: ReadonlyArray<string>;
    readonly modules: ReadonlyArray<string>;
    readonly name?: string;
    readonly host?: string;
    readonly port?: number;
    readonly players?: string;
    readonly password?: string;
    readonly announce?: boolean;
    readonly token?: string;
    readonly gamemode?: string;
    readonly website?: string;
    readonly language?: string;
    readonly description?: string;
    readonly debug?: boolean;
    readonly streamingDistance?: number;
    readonly migrationDistance?: number;
    readonly timeout?: number;
    readonly announceRetryErrorDelay?: number;
    readonly announceRetryErrorAttempts?: number;
    readonly duplicatePlayers?: number;
    readonly tags?: ReadonlyArray<string>;
    readonly useEarlyAuth?: boolean;
    readonly earlyAuthUrl?: string;
    readonly useCdn?: boolean;
    readonly cdnUrl?: string;
    readonly voice?: {
    readonly bitrate?: number;
    readonly externalSecret?: string;
    readonly externalHost?: string;
    readonly externalPort?: number;
    readonly externalPublicHost?: string;
    readonly externalPublicPort?: number;
};
```

## Documentation

<!--@include: ./parts/iServerConfig.md-->
