---
title: Setup
order: -99
---

# {{ $frontmatter.title }}

Install the following package with npm or yarn

```ts
npm install --save-dev @altv/types-client @altv/types-natives @altv/types-shared @altv/types-webview @altv/types-worker 
```

## Confirming Installation

Inside of your `package.json` you should see something similar to...

```json
...
"devDependencies": {
        ...
        "@altv/types-client": "^x.y.z",
        "@altv/types-natives": "^x.y.z",
        "@altv/types-shared": "^x.y.z",
        "@altv/types-webview": "^x.y.z",
        "@altv/types-worker": "^x.y.z",
        ...
}
...
```

If you do not have a `package.json` please run `npm init` first.

## Accessing the API

Inside of a `client-side` file you can import the API by adding this to the top of your file.

If you are using **TypeScript** you will get auto-completion through applications such as VSCode.

```ts
/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
// The above is only required if you're working in .js

import * as alt from 'alt-client';
import * as native from 'natives';
```

