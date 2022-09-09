---
title: Events
order: 2
---

# {{ $frontmatter.title }}

Events are used to determine what to do when a player needs to trigger something on the server-side, or when the server wants the player to do something with their game such as playing an animation.

An example event is the `playerConnect` event which is called when a user has connected to the server.

::: details Example Event

```ts
import * as alt from 'alt-server';

/**
 * Spawns the player and gives them a model.
 * @param {alt.Player} player
 */
function handleSpawn(player) {
    player.spawn({ x: -867.1437377929688, y: -172.6201934814453, z: 37.799232482910156 });
    player.model = 'mp_m_freemode_01';
}

// This event is called when a player connects to the server.
alt.on('playerConnect', handleSpawn);
```

:::

## emit vs on

However, events come in many flavors and have different limitations.

* `emit` means the event is sending information to a recieving event.
* `emitClient` means the event is sending information to a client from server-side.
* `emitAllClients` means the event is sending information to all clients from server-side.
* `on` means then event is recieving information.
* `onClient` means the event is recieving information from a client on server-side.

## Event Names

Event names must be exactly the same casing if you wish to recieve them correctly.

`my-event-name` is **NOT** the same as `My-Event-Name`

## Sending an Event to the Client

When you want to make a specific player do something you can use `alt.emitClient`.

This will trigger a similarily named event on the client-side to do something.

::: details Example Server to Client Event

**Server Side**

```ts
import * as alt from 'alt-server';

function handleSpawn(player) {
    // Emitting an event to the client called 'log-to-client-console' and passing some arguments.
    alt.emitClient(player, 'log-to-client-console', 'hello world');
}

alt.on('playerConnect', handleSpawn);
```

**Client Side**

```ts
import * as alt from 'alt-client';

function handleLogMessage(message) {
    alt.log(message);
}

// This event is triggered from the server.
alt.onServer('log-to-client-console', handleLogMessage);
```

:::

## Sending an Event to the Server

When a player's client needs to trigger something on the server-side. You can use `alt.emitServer`.

This will trigger a similarily named event on the server-side to do something.

::: details Example Client to Server Event

**Client Side**

```ts
import * as alt from 'alt-client';

function handleLogMessage(message) {
    alt.log(message);

    // Emitting an event to the server to be handled.
    alt.emitServer('confirm-got-console-log', true);
}

alt.onServer('log-to-client-console', handleLogMessage);
```

**Server Side**

```ts
import * as alt from 'alt-server';

function handleSpawn(player) {
    alt.emitClient(player, 'log-to-client-console', 'hello world');
}

// First argument from a client event is always player.
function gotConsoleLog(player, didGetLog) {
    if (didGetLog) {
        console.log(`Got a log from ${player.name}!`);
    } else {
        console.log(`Did not get the log.`);
    }
}

alt.onClient('confirm-got-console-log', gotConsoleLog);
alt.on('playerConnect', handleSpawn);
```

:::