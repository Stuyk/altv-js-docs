---
title: General Usage
order: -99
---

# {{ $frontmatter.title }}

Creating a vehicle is very simple.

```ts
const vehicle = new alt.Vehicle('infernus', 0, 0, 0, 0, 0, 0);
```

## Working with Vehicles

In most cases you'll get auto-completion for what to do with a vehicle when using your IDE.

Here's how you set a custom paint color on a vehicle and then change its final position.

```ts
const vehicle = new alt.Vehicle('infernus', 0, 0, 0, 0, 0, 0);

// Set Primary & Secondary Colours
vehicle.customPrimaryColor = new alt.RGBA(255, 0, 0);
vehicle.customSecondaryColor = new alt.RGBA(255, 255, 0);

// Set Vehicle Position
vehicle.pos = new alt.Vector3(-867.1437377929688, -172.6201934814453, 37.799232482910156);
```