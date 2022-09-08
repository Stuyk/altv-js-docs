---
title: Setup
order: -99
---

# {{ $frontmatter.title }}

Install the following package with npm or yarn

```ts
npm install --save-dev @altv/types-shared
```

## Confirming Installation

Inside of your `package.json` you should see something similar to...

```json
...
"devDependencies": {
    "@altv/types-shared": "^x.y.z",
}
...
```

If you do not have a `package.json` please run `npm init` first.

## Accessing the API

Inside of a `server-side` file you can import the API by adding this to the top of your file.

```ts
/// <reference types="@altv/types-shared" />
// The above is only required if you're working in .js

import * as alt from 'alt-shared';
```