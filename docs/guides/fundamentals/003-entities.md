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

What we mean by this is that when a player leaves a server or a vehicle is despawned, the vehicle or player may no longer be valid.

This is why we check with the code below.

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

## Quiz

Let's do a recap on what you have learned in this section. Answer the following questions.

<script setup>
import { ref } from 'vue';

const question1 = ref([
  { text: "driver"}, 
  { text: "pos", isAnswer: true },
  { text: "deploy()" },
]);

const question2 = ref([
  { text: "somePlayer.pos = { x: 0, y: 0, z: 0 }", isAnswer: true }, 
  { text: "somePlayer.setPosition(0, 0, 0)" },
  { text: "somePlayer.setPosition = { x: 0, y: 0, z: 0 }" },
]);

const question3 = ref([
  { text: "typeof entity === 'undefined'" }, 
  { text: "entity.valid" }, 
  { text: "All the Above", isAnswer: true },
]);

</script>

<Question type="question1" question="What property can be found on all entity types?" :answers="question1" />

<Question type="question2" question="How do I change the position of an Entity?" :answers="question2" />

<Question type="question3" question="What should I use to check if an entity is valid?" :answers="question3" />
