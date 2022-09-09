---
title: 5. Setup a Resource
order: 5
---

# {{ $frontmatter.title }}

Now moving back to the VSCode window where our server is located, it's time to setup our first resource so that we can join the server.

## 1. Setting up Folder Structure

There is a standard that many of the alt:V developers currently follow and this section is going to teach you what folders you need to make.

Create a folder called `resources` in the main file tree window.

![](https://i.imgur.com/TPmMIIG.png)

Create a folder inside of `resources` called `core`, this will be the name of our 'resource'.

Inside of `resources/core` create three folders.

* server
* client
* shared

![](https://i.imgur.com/9OMnnAU.png)

Inside of `server`, `client`, and `shared` create another file called `index.js`.

![](https://i.imgur.com/tMLzYOK.png)

## 2. Adding Imports to Server

Open the following file: `resources/core/server/index.js`

Append the following to the top.

```ts
import * as alt from 'alt-server';

alt.log(`Core Resource Started!`);
const spawnPoint = new alt.Vector3({ x: -867.1437377929688, y: -172.6201934814453, z: 37.799232482910156 });

/**
 * Spawns the player and gives them a model.
 * 
 * @param {alt.Player} player
 */
function handleSpawn(player) {
    player.spawn(spawnPoint);
    player.model = 'mp_m_freemode_01';
}

// This event is called when a player connects to the server.
alt.on('playerConnect', handleSpawn);
```

## 3. Adding Imports to Client

Open the following file: `resources/core/client/index.js`

Append the following to the top.

```ts
import * as alt from 'alt-client';
import * as native from 'natives';

alt.log(`Hello from the 'F8' console menu on client-side.`);
```

## 4. Creating a resource.cfg

Every resource needs to have a `resource.cfg` to tell alt:V what files to load first.

Create a file called `resource.cfg` under `resources/core`.

Paste the following code inside of the `resource.cfg` file.

```sh
type: js,
main: server/index.js,
client-main: client/index.js,
client-files: [
    client/*
    shared/*
],
deps: []
```

This is telling the server to load `server/index.js` on server-side first and also loading `client/index.js` on client-side.

## 5. Add the 'core' resource to server.cfg

Our last and final step is to update the `server.cfg` in the root of your project and add 'core' as a resource.

Open `server.cfg` and append `core` to the `resources` array.

![](https://i.imgur.com/JG5IDGU.png)

## 6. Start the Server!

Now it's time to see we were successful in setting up our first alt:V Server.

Run the following command in your `VSCode Terminal`.

**PowerShell**

```sh
./altv-server
```

**CMD / Command Prompt**

```sh
altv-server
```

If successful you should see this in your server console.

![](https://i.imgur.com/9JupD0G.png)

## 7. Connect to the Server

Now you can connect to your server through alt:V Direct Connect in the client.

The following IP(s) should work try one or the other.

```
0.0.0.0:7788
```

or

```
127.0.0.1:7788
```

## 8. Success!

![](https://i.imgur.com/7Rp1v0q.jpeg)