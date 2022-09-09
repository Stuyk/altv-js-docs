import{_ as t,o,c as a,b as e,d as n,t as i,e as l}from"./app.2030392b.js";const y=JSON.parse('{"title":"1. Prerequisites","description":"","frontmatter":{"title":"1. Prerequisites","order":1},"headers":[{"level":2,"title":"Server Infrastructure","slug":"server-infrastructure","link":"#server-infrastructure","children":[{"level":3,"title":"Development","slug":"development","link":"#development","children":[]},{"level":3,"title":"Deployment","slug":"deployment","link":"#deployment","children":[]}]},{"level":2,"title":"alt:V Client","slug":"alt-v-client","link":"#alt-v-client","children":[]},{"level":2,"title":"NodeJS 17+","slug":"nodejs-17","link":"#nodejs-17","children":[]},{"level":2,"title":"VSCode","slug":"vscode","link":"#vscode","children":[]},{"level":2,"title":"Windows Terminal*","slug":"windows-terminal","link":"#windows-terminal","children":[]},{"level":2,"title":"Port Forwarding Port 7788*","slug":"port-forwarding-port-7788","link":"#port-forwarding-port-7788","children":[{"level":3,"title":"Accessing a Router","slug":"accessing-a-router","link":"#accessing-a-router","children":[]}]}],"relativePath":"intro/001-prerequisites.md"}'),s={name:"intro/001-prerequisites.md"},d={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=l('<p>This is what you need to get started with developing your own server. You will need to install some programs.</p><p>Anything marked with <code>*</code> is completely optional but recommended by the alt:V Team.</p><h2 id="server-infrastructure" tabindex="-1">Server Infrastructure <a class="header-anchor" href="#server-infrastructure" aria-hidden="true">#</a></h2><p>We believe in the following practices for developing a server.</p><h3 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-hidden="true">#</a></h3><blockquote><p>Develop a server on Windows 10 or 11.</p></blockquote><blockquote><p>Write your code locally and test with GTA:V.</p></blockquote><h3 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-hidden="true">#</a></h3><blockquote><p>Only deploy when you have finished developing your gamemode.</p></blockquote><blockquote><p>Deploy a server on Windows Server, Ubuntu, or Debian.</p></blockquote><blockquote><p>Pull your code down from GitHub, or GitLab and start your server from there.</p></blockquote><h2 id="alt-v-client" tabindex="-1">alt:V Client <a class="header-anchor" href="#alt-v-client" aria-hidden="true">#</a></h2><p>You need the alt:V client which is used along-side a legal copy of Grand Theft Auto V.</p><p><a href="https://altv.mp/#/downloads" target="_blank" rel="noreferrer">Get alt:V Client</a></p><h2 id="nodejs-17" tabindex="-1">NodeJS 17+ <a class="header-anchor" href="#nodejs-17" aria-hidden="true">#</a></h2><p>Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.</p><p><a href="https://nodejs.dev/en/download/" target="_blank" rel="noreferrer">Get NodeJS</a></p><h2 id="vscode" tabindex="-1">VSCode <a class="header-anchor" href="#vscode" aria-hidden="true">#</a></h2><p>VSCode is an IDE that is used to edit files while programming. Works with all modern programming languages and is free. It includes Intellisense which helps with auto-completion.</p><p><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Get VSCode</a></p><p><img src="https://i.imgur.com/BcvHIIF.png" alt=""></p><h2 id="windows-terminal" tabindex="-1">Windows Terminal* <a class="header-anchor" href="#windows-terminal" aria-hidden="true">#</a></h2><p>If you are familiar with Command Line and Powershell, Windows Terminal is a straight up upgrade that provides multiple tabs and traditional features native to Linux environments. It is highly recommended to use this as your main cli tool.</p><p><a href="https://apps.microsoft.com/store/detail/9N0DX20HK701?hl=en-us&amp;gl=US" target="_blank" rel="noreferrer">Get Windows Terminal</a></p><p><img src="https://i.imgur.com/3xhXe13.png" alt=""></p><h2 id="port-forwarding-port-7788" tabindex="-1">Port Forwarding Port 7788* <a class="header-anchor" href="#port-forwarding-port-7788" aria-hidden="true">#</a></h2><p>On <strong>Windows</strong> platforms you need to port forward in Windows Firewall, and your Router.</p><p>On <strong>Linux</strong> platforms we recommend UFW for port forwarding.</p><p><strong>Ports to Forward</strong></p><ul><li>7788</li></ul><h3 id="accessing-a-router" tabindex="-1">Accessing a Router <a class="header-anchor" href="#accessing-a-router" aria-hidden="true">#</a></h3><p>You can access any router by visiting the router&#39;s default gateway. You can find our your Router&#39;s default gateway by typing <code>ipconfig</code> into a Command Line Terminal such as Powershell, or Command Prompt.</p><p><img src="https://i.imgur.com/FmHtAzd.png" alt=""></p><p>Take the gateway and enter it into your local browser.</p><p>You will likely be greated by your router&#39;s login page which you can usually obtain login information on the back of your router, or you can follow a guide from <a href="https://portforward.com/router.htm" target="_blank" rel="noreferrer">https://portforward.com/router.htm</a> based on your Router&#39;s model.</p><p>While the <strong>alt:V server is running</strong> you can use <a href="https://www.yougetsignal.com/tools/open-ports/" target="_blank" rel="noreferrer">A Port Checker</a> to check if you can reach Port <code>7788</code>.</p><p>Good luck!</p>',37);function h(r,u,m,g,f,w){return o(),a("div",null,[e("h1",d,[n(i(r.$frontmatter.title)+" ",1),c]),p])}const b=t(s,[["render",h]]);export{y as __pageData,b as default};
