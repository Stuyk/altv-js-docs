---
title: Server vs Client
order: 1
---

# {{ $frontmatter.title }}

alt:V has a lot of concepts and information to learn but hopefully this section will give you enough context on how to describe what you are looking for when you are building your first script.

## Basics

* You can open a console in-game by pressing `F8`.
* You can quit a server by typing `quit` in the `F8` console.
* You can turn on debug mode for **Reconnecting**
  * Modify `altv.cfg` and append `debug: 'true'`
  * You can reconnect to a server with `reconnect` as long as the server has `debug` enabled.
  * You can enable debug on your server by adding `debug: true` to your `server.cfg`.
* Reloading resources
  * You can reload a resource by typing `restart resource-name-here` in the server console.

## Server vs Client

There are are two folders that exist in almost every resource with code in it. 

These folders are `client` and `server`. They serve different purposes.

### What is a client?

A client is the computer in which you are accessing this information from.

A client is also the user who connects to your GTA:V server.

When we want the client to see text on screen, we have to tell the client's computer or game what to do.

This means that if we want to show them text on screen, we need to tell heir game to show the text.

This is why we use `natives` to do things in the `client`'s game.

You are meant to use `alt-client` as an import when you see the `client` folder.

### What is a native?

A native is a function that can only be called on `client-side`.

Calling a `native` makes their GTA:V client do something specific.

Examples

* Playing Animations
* Drawing Text on Screen
* Showing a Marker to the Client

You are meant to use `natives` as an import when you see the `client` folder.

### What is a server?

Server also known as server-side is where you handle gamemode related logic.

This means manipulating player requests and events to act in a certain way.

Examples

* Writing to a Database
* Reading from a Database
* Respawning a Player when the Die
* Spawning a Player when they join the Server
* Creating a Vehicle
* Destroying a Vehicle
* Giving a Player a Weapon
* Changing Player Appearance
* Changing Player Models

You are meant to use `alt-server` as an import when you see the `server` folder.

## Quiz

Let's do a recap on what you have learned in this section. Answer the following questions.

<script setup>
import { ref } from 'vue';

const question1 = ref([
  { text: 'Server Side'}, 
  { text: 'Client Side', isAnswer: true }, 
  { text: 'Shared' }
]);

const question2 = ref([
  { text: "import { alt } from 'alt'"}, 
  { text: "import * as alt from 'alt-shared'" },
  { text: "import * as alt from 'alt-client'" },
  { text: "import * as alt from 'alt-server'", isAnswer: true }, 
]);

const question3 = ref([
  { text: "import * as alt from 'alt-shared'" }, 
  { text: "import { alt } from 'alt'"}, 
  { text: "import * as alt from 'alt-server'" },
  { text: "import * as alt from 'alt-client'", isAnswer: true  },
]);

const question4 = ref([
  { text: "Client Side" }, 
  { text: "Server Side", isAnswer: true}, 
  { text: "Shared" },
  { text: "All of the above" },
]);

const question5 = ref([
  { text: "alt-server" }, 
  { text: "alt-shared" }, 
  { text: "alt-client" },
  { text: "natives", isAnswer: true}, 
]);
</script>

<Question type="question1" question="Where can natives be used?" :answers="question1" />

<Question type="question2" question="How do you import server-side API?" :answers="question2" />

<Question type="question3" question="How do you import client-side API?" :answers="question3" />

<Question type="question4" question="Where do I write code to change a player model when they join a server?" :answers="question4" />

<Question type="question5" question="I want to call a game function what API do I use?" :answers="question5" />