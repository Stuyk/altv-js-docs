---
title: bodyHealth
order: 0
---

# vehicle.{{ $frontmatter.title }}

Get or set the body health of a vehicle.

Ranges from `0 - 1000`.

```ts
const vehicle = new alt.Vehicle('infernus', 0, 0, 0, 0, 0, 0);
vehicle.bodyHealth = 1000;

const vehBodyHealth = vehicle.bodyHealth;
console.log(`Vehicle Body Health is: ${vehBodyHealth}`);
```