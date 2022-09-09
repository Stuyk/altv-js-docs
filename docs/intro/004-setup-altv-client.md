---
title: 4. Setup alt:V Client
order: 4
---

# {{ $frontmatter.title }}

During the development of your server it is really important to setup the alt:V Client to use `debug` mode.

This can be done by modifying the configuration that comes with your alt:V Client.

## Locating the Client Folder

It is likely that your client is installed in a non-predictable location. 

Which means you are going to have to find out where the `altv.exe` is located to locate where your alt:V configuration is located.

If you have a `Desktop Shortcut` for alt:V you can `RIGHT-CLICK` the executable and go to `PROPERTIES` and then click on `Open File Location` which should take you to the directory where alt:V is currently installed.

![](https://i.imgur.com/515l2O8.png)

## Editing the altv.cfg

Inside of the folder where `altv.exe` is located you should find an `altv.cfg` configuration file.

Right-click and open it with VSCode, or a text editor.

Simply append this line to the bottom of the configuration file.

```
debug: 'true'
```

This allows you to reconnect to your server. 

However, it must be set to false when connecting to other servers.

**Make sure to save!**
