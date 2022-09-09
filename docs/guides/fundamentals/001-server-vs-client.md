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
