---
title: Prerequisites
order: 1
---

# {{ $frontmatter.title }}

This is what you need to get started with developing your own server. You will need to install some programs.

Anything marked with `*` is completely optional but recommended by the alt:V Team.

## Server Infrastructure

We believe in the following practices for developing a server.

### Development

> Develop a server on Windows 10 or 11.

>Write your code locally and test with GTA:V.

### Deployment

> Only deploy when you have finished developing your gamemode.

> Deploy a server on Windows Server, Ubuntu, or Debian.

> Pull your code down from GitHub, or GitLab and start your server from there.

## alt:V Client

You need the alt:V client which is used along-side a legal copy of Grand Theft Auto V.

[Get alt:V Client](https://altv.mp/#/downloads)


## NodeJS 17+

Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.

[Get NodeJS](https://nodejs.dev/en/download/)

## VSCode

VSCode is an IDE that is used to edit files while programming. Works with all modern programming languages and is free. It includes Intellisense which helps with auto-completion.

[Get VSCode](https://code.visualstudio.com/)

![](https://i.imgur.com/BcvHIIF.png)


## Windows Terminal*

If you are familiar with Command Line and Powershell, Windows Terminal is a straight up upgrade that provides multiple tabs and traditional features native to Linux environments. It is highly recommended to use this as your main cli tool.

[Get Windows Terminal](https://apps.microsoft.com/store/detail/9N0DX20HK701?hl=en-us&gl=US)

![](https://i.imgur.com/3xhXe13.png)

## Port Forwarding Port 7788*

On **Windows** platforms you need to port forward in Windows Firewall, and your Router.

On **Linux** platforms we recommend UFW for port forwarding.

**Ports to Forward**

* 7788

### Accessing a Router

You can access any router by visiting the router's default gateway. You can find our your Router's default gateway by typing `ipconfig` into a Command Line Terminal such as Powershell, or Command Prompt.

![](https://i.imgur.com/FmHtAzd.png)

Take the gateway and enter it into your local browser.

You will likely be greated by your router's login page which you can usually obtain login information on the back of your router, or you can follow a guide from [https://portforward.com/router.htm](https://portforward.com/router.htm) based on your Router's model.

While the **alt:V server is running** you can use [A Port Checker](https://www.yougetsignal.com/tools/open-ports/) to check if you can reach Port `7788`.

Good luck!