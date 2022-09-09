---
title: Setup alt:V Server
order: 3
---

# {{ $frontmatter.title }}

After performing the workspace setup you should be inside of VSCode with an empty project. Now we can move on to setting up the rest of our project.

## 1. Obtaining Binaries

A binary is an executable file used to run the alt:V server.

We need these files to start up a server instance that we can connect to.

These files can be obtained manually from [https://altv.mp/#/downloads](https://altv.mp/#/downloads).

However, for this tutorial we're going to use `altv-pkg` to install them quickly.

Run the following command in your `VSCode Terminal`.

```sh
npm install --save-dev altv-pkg
```

After it install runs the following command to download all binaries.

Run the following command in your `VSCode Terminal`.

```sh
npx altv-pkg release
```

If successful you should see the following in the folder tree.

![](https://i.imgur.com/cAObHqE.png)

## 2. Installing Types

Our next step is to install type definitions for alt:V to allow for auto-completion when we are writing code.

Run the following command in your `VSCode Terminal`.

```sh
npm install --save-dev @altv/types-client @altv/types-natives @altv/types-server @altv/types-shared @altv/types-webview @altv/types-worker
```

These are going to install various necessary packages in the `node_modules` folder.

If successful you should see the dependencies inside of `package.json`.

![](https://i.imgur.com/KJyB1tg.png)


## 3. Adding a jsconfig.json

A jsconfig file can be used to show auto-completion across an entire `JavaScript` project.

This is not necessary if you are using `TypeScript` but in this tutorial it's a setup for `JavaScript`.

`RIGHT-CLICK` the file tree and `CREATE NEW FILE` and name it `jsconfig.json`

![](https://i.imgur.com/AURjIdR.png)

Paste the following content inside of the `jsconfig.json` file.

::: details jsconfig.json

```json
{
	"compilerOptions": {
		"target": "esNext",
		"module": "esNext",
		"rootDir": ".",
		"typeRoots": [
			"./node_modules/@altv"
		]
	}
}
```

:::

## 4. Adding the Server Configuration File

`RIGHT-CLICK` the file tree and `CREATE NEW FILE` and name it `server.cfg`.

Paste the following content inside of the `server.cfg` file.

::: details server.cfg

```sh
name: 'alt:V Server'
host: 0.0.0.0
port: 7788
players: 1024
debug: true
announce: false
gamemode: 'Freeroam'
website: 'example.com'
language: 'en'
description: 'alt:V Sample Server'
modules: [ 'js-module' ]
resources: []
#password: ultra-password
#token: ONLY_PROVIDE_THIS_IF_DEPLOYING_TO_PRODUCTION_NOT_NEEDED_FOR_DEVELOPMENT
```

::: warning

**debug** allows you to reconnect to the server, turn this off during production

:::



## 5. Starting the Server

::: tip

Keep in mind that not all server scripts obtained from third-parties may use the following info to run their server. They may have their own scripts to run which transpile code, or move files. Refer to their documentation for more information.

:::

We are going to perform a quick test to ensure that the server loads correctly.

Run the following command in your `VSCode Terminal`.

**PowerShell**

```sh
./altv-server
```

**CMD / Command Prompt**

```sh
altv-server
```

If successful the terminal should look similar to this screenshot.

![](https://i.imgur.com/yH99qD0.png)


::: warning

**DO NOT CONNECT** to the server at this time. We need to configure a resource first.

:::

## 5a. Shutting the Server Down

At any point if you need to shut down the server. Click on the Terminal and press these two keys together: `CTRL + C`. 

This will terminate the server.

## 5b. Clearing the Terminal

If you need to clear the Terminal press these two keys together: `CTRL + L`.

This will completely clear the Terminal.

Alternatively you can open / close the terminal again.

## 6. Shut Down the Server

Before continuing to the next page. Ensure you shut down the server.