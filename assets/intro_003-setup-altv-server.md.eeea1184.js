import{_ as n,o as a,c as t,b as s,d as o,t as l,e as p}from"./app.80c976a6.js";const m=JSON.parse('{"title":"3. Setup alt:V Server","description":"","frontmatter":{"title":"3. Setup alt:V Server","order":3},"headers":[{"level":2,"title":"1. Obtaining Binaries","slug":"_1-obtaining-binaries","link":"#_1-obtaining-binaries","children":[]},{"level":2,"title":"2. Installing Types","slug":"_2-installing-types","link":"#_2-installing-types","children":[]},{"level":2,"title":"3. Adding a jsconfig.json","slug":"_3-adding-a-jsconfig-json","link":"#_3-adding-a-jsconfig-json","children":[]},{"level":2,"title":"4. Adding the Server Configuration File","slug":"_4-adding-the-server-configuration-file","link":"#_4-adding-the-server-configuration-file","children":[]},{"level":2,"title":"5. Starting the Server","slug":"_5-starting-the-server","link":"#_5-starting-the-server","children":[]},{"level":2,"title":"5a. Shutting the Server Down","slug":"_5a-shutting-the-server-down","link":"#_5a-shutting-the-server-down","children":[]},{"level":2,"title":"5b. Clearing the Terminal","slug":"_5b-clearing-the-terminal","link":"#_5b-clearing-the-terminal","children":[]},{"level":2,"title":"6. Shut Down the Server","slug":"_6-shut-down-the-server","link":"#_6-shut-down-the-server","children":[]}],"relativePath":"intro/003-setup-altv-server.md"}'),r={name:"intro/003-setup-altv-server.md"},i={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(`<p>After performing the workspace setup you should be inside of VSCode with an empty project. Now we can move on to setting up the rest of our project.</p><h2 id="_1-obtaining-binaries" tabindex="-1">1. Obtaining Binaries <a class="header-anchor" href="#_1-obtaining-binaries" aria-hidden="true">#</a></h2><p>A binary is an executable file used to run the alt:V server.</p><p>We need these files to start up a server instance that we can connect to.</p><p>These files can be obtained manually from <a href="https://altv.mp/#/downloads" target="_blank" rel="noreferrer">https://altv.mp/#/downloads</a>.</p><p>However, for this tutorial we&#39;re going to use <code>altv-pkg</code> to install them quickly.</p><p>Run the following command in your <code>VSCode Terminal</code>.</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev altv-pkg</span></span>
<span class="line"></span></code></pre></div><p>After it install runs the following command to download all binaries.</p><p>Run the following command in your <code>VSCode Terminal</code>.</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx altv-pkg release</span></span>
<span class="line"></span></code></pre></div><p>If successful you should see the following in the folder tree.</p><p><img src="https://i.imgur.com/cAObHqE.png" alt=""></p><h2 id="_2-installing-types" tabindex="-1">2. Installing Types <a class="header-anchor" href="#_2-installing-types" aria-hidden="true">#</a></h2><p>Our next step is to install type definitions for alt:V to allow for auto-completion when we are writing code.</p><p>Run the following command in your <code>VSCode Terminal</code>.</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev @altv/types-client @altv/types-natives @altv/types-server @altv/types-shared @altv/types-webview @altv/types-worker</span></span>
<span class="line"></span></code></pre></div><p>These are going to install various necessary packages in the <code>node_modules</code> folder.</p><p>If successful you should see the dependencies inside of <code>package.json</code>.</p><p><img src="https://i.imgur.com/KJyB1tg.png" alt=""></p><h2 id="_3-adding-a-jsconfig-json" tabindex="-1">3. Adding a jsconfig.json <a class="header-anchor" href="#_3-adding-a-jsconfig-json" aria-hidden="true">#</a></h2><p>A jsconfig file can be used to show auto-completion across an entire <code>JavaScript</code> project.</p><p>This is not necessary if you are using <code>TypeScript</code> but in this tutorial it&#39;s a setup for <code>JavaScript</code>.</p><p><code>RIGHT-CLICK</code> the file tree and <code>CREATE NEW FILE</code> and name it <code>jsconfig.json</code></p><p><img src="https://i.imgur.com/AURjIdR.png" alt=""></p><p>Paste the following content inside of the <code>jsconfig.json</code> file.</p><details class="details custom-block"><summary>jsconfig.json</summary><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">esNext</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">esNext</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">rootDir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">typeRoots</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./node_modules/@altv</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="_4-adding-the-server-configuration-file" tabindex="-1">4. Adding the Server Configuration File <a class="header-anchor" href="#_4-adding-the-server-configuration-file" aria-hidden="true">#</a></h2><p><code>RIGHT-CLICK</code> the file tree and <code>CREATE NEW FILE</code> and name it <code>server.cfg</code>.</p><p>Paste the following content inside of the <code>server.cfg</code> file.</p><details class="details custom-block"><summary>server.cfg</summary><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alt:V Server</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">host: 0.0.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;">port: 7788</span></span>
<span class="line"><span style="color:#A6ACCD;">players: 1024</span></span>
<span class="line"><span style="color:#A6ACCD;">debug: </span><span style="color:#82AAFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">announce: </span><span style="color:#82AAFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">gamemode: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Freeroam</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">website: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example.com</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">language: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">description: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alt:V Sample Server</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">modules: </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">js-module</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">resources: </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#676E95;">#password: ultra-password</span></span>
<span class="line"><span style="color:#676E95;">#token: ONLY_PROVIDE_THIS_IF_DEPLOYING_TO_PRODUCTION_NOT_NEEDED_FOR_DEVELOPMENT</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>debug</strong> allows you to reconnect to the server, turn this off during production</p></div></details><h2 id="_5-starting-the-server" tabindex="-1">5. Starting the Server <a class="header-anchor" href="#_5-starting-the-server" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Keep in mind that not all server scripts obtained from third-parties may use the following info to run their server. They may have their own scripts to run which transpile code, or move files. Refer to their documentation for more information.</p></div><p>We are going to perform a quick test to ensure that the server loads correctly.</p><p>Run the following command in your <code>VSCode Terminal</code>.</p><p><strong>PowerShell</strong></p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">./altv-server</span></span>
<span class="line"></span></code></pre></div><p><strong>CMD / Command Prompt</strong></p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">altv-server</span></span>
<span class="line"></span></code></pre></div><p>If successful the terminal should look similar to this screenshot.</p><p><img src="https://i.imgur.com/yH99qD0.png" alt=""></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>DO NOT CONNECT</strong> to the server at this time. We need to configure a resource first.</p></div><h2 id="_5a-shutting-the-server-down" tabindex="-1">5a. Shutting the Server Down <a class="header-anchor" href="#_5a-shutting-the-server-down" aria-hidden="true">#</a></h2><p>At any point if you need to shut down the server. Click on the Terminal and press these two keys together: <code>CTRL + C</code>.</p><p>This will terminate the server.</p><h2 id="_5b-clearing-the-terminal" tabindex="-1">5b. Clearing the Terminal <a class="header-anchor" href="#_5b-clearing-the-terminal" aria-hidden="true">#</a></h2><p>If you need to clear the Terminal press these two keys together: <code>CTRL + L</code>.</p><p>This will completely clear the Terminal.</p><p>Alternatively you can open / close the terminal again.</p><h2 id="_6-shut-down-the-server" tabindex="-1">6. Shut Down the Server <a class="header-anchor" href="#_6-shut-down-the-server" aria-hidden="true">#</a></h2><p>Before continuing to the next page. Ensure you shut down the server.</p>`,51);function h(e,u,y,g,D,F){return a(),t("div",null,[s("h1",i,[o(l(e.$frontmatter.title)+" ",1),c]),d])}const C=n(r,[["render",h]]);export{m as __pageData,C as default};