---
title: Entities
order: 3
---

# {{ $frontmatter.title }}

An entity is a `player` or a `vehicle` in most cases. An entity is a base class that is extended by the `alt.Player` and `alt.Vehicle` types respectively. 

They share similar properties of an `Entity` such as:

* pos - A Vector3 Position
* rot - A Vector3 Rotation in Radians (-3 -> 3)
* id - An incremental identifier created on creation of this Entity type.
* model - A numbered hash of a named model such as `alt.hash('infernus')`
* destroy - Most commonly used for Vehicles, but removes the Entity entirely

## Changing Positions of Entities

If you ever want to change the position of an Entity in the world, you can simply change the `pos` property.

::: details Change Position

```ts
import * as alt from 'alt-server';

/**
 * @param {alt.Player} player
 */
function handleSpawn(player) {
    player.spawn(0, 0, 0);
    player.model = 'mp_m_freemode_01';

    // This is changing the player's position.
    player.pos = { x: -867.1437377929688, y: -172.6201934814453, z: 37.799232482910156 };
}

alt.on('playerConnect', handleSpawn);
```

:::

## Comparing Entity Types

If you need to check if the Entity is a certain type such as a vehicle or a client you can use `instanceof`.

::: details Comparing Types

**Check if Entity is Vehicle**

```ts
const someVehicle = new alt.Vehicle('infernus', 0, 0, 0, 0, 0, 0);

if (someVehicle instanceof alt.Vehicle) {
    console.log(`this is definitely a vehicle!`);
}
```

**Check if Entity is Player**

```ts
const somePlayer = alt.Player.all[0];

if (somePlayer instanceof alt.Player) {
    console.log(`this is definitely a player!`);
}
```

:::

## Validating Entities

This is often overlooked by newer developers but you should always be verifying a player, or vehicle before manipulating it.

Otherwise you get the ever so famous `base object` is not defined error.

::: details Verifying an Entity

```ts
const somePlayer = alt.Player.all[0];

function doSomething(player) {
    if (typeof somePlayer === 'undefined' || !somePlayer.valid) {
        console.log('This player just disconnected, or is invalid.');
        return;
    }

    console.log('That is a valid player! Do what you want!');
}

doSomething(somePlayer);
```

:::

