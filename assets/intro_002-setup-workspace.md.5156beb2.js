import{_ as a,o,c as t,b as e,d as s,t as i,e as l}from"./app.80c976a6.js";const k=JSON.parse('{"title":"2. Setup Workspace","description":"","frontmatter":{"title":"2. Setup Workspace","order":2},"headers":[{"level":2,"title":"1. Create a Folder","slug":"_1-create-a-folder","link":"#_1-create-a-folder","children":[]},{"level":2,"title":"2. Open the Folder and a Terminal in the Directory","slug":"_2-open-the-folder-and-a-terminal-in-the-directory","link":"#_2-open-the-folder-and-a-terminal-in-the-directory","children":[]},{"level":2,"title":"3. Open a VSCode Instance in the Folder","slug":"_3-open-a-vscode-instance-in-the-folder","link":"#_3-open-a-vscode-instance-in-the-folder","children":[]},{"level":2,"title":"4. Quick Rundown of VSCode","slug":"_4-quick-rundown-of-vscode","link":"#_4-quick-rundown-of-vscode","children":[]},{"level":2,"title":"5. Update package.json","slug":"_5-update-package-json","link":"#_5-update-package-json","children":[]}],"relativePath":"intro/002-setup-workspace.md"}'),r={name:"intro/002-setup-workspace.md"},c={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(`<div class="warning custom-block"><p class="custom-block-title">INSTALL PRE-REQUISITES</p><p>Ensure that the <a href="./001-prerequisites.html">pre-requisites</a> are installed before continuing.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It is highly recommended to develop in a <strong>Windows</strong> environment.</p></div><h2 id="_1-create-a-folder" tabindex="-1">1. Create a Folder <a class="header-anchor" href="#_1-create-a-folder" aria-hidden="true">#</a></h2><p>Determine a location on your computer to store your server files.</p><p>This tutorial we&#39;ll just create a folder on the <code>desktop</code>.</p><p><img src="https://i.imgur.com/QAJNYdi.png" alt=""></p><h2 id="_2-open-the-folder-and-a-terminal-in-the-directory" tabindex="-1">2. Open the Folder and a Terminal in the Directory <a class="header-anchor" href="#_2-open-the-folder-and-a-terminal-in-the-directory" aria-hidden="true">#</a></h2><p>Open the folder by double-clicking on it.</p><p>Then hold <code>LEFT SHIFT</code> and <code>RIGHT-CLICK</code> inside of it and open a PowerShell, Terminal, or any CLI instance inside of directory.</p><p><img src="https://thumbs.gfycat.com/FrailFirmHalicore-size_restricted.gif" alt=""></p><p>Run the Following Command in the Terminal</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init</span></span>
<span class="line"></span></code></pre></div><p><em>This command creates <code>package.json</code> file inside of the folder.</em></p><p>Hold <code>ENTER</code> down to quickly fill in all information.</p><h2 id="_3-open-a-vscode-instance-in-the-folder" tabindex="-1">3. Open a VSCode Instance in the Folder <a class="header-anchor" href="#_3-open-a-vscode-instance-in-the-folder" aria-hidden="true">#</a></h2><p>Open the folder with VSCode.</p><p>Run the Following Command in the Terminal</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">code </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span></code></pre></div><p><img src="https://i.imgur.com/eqPtGez.png" alt=""></p><h2 id="_4-quick-rundown-of-vscode" tabindex="-1">4. Quick Rundown of VSCode <a class="header-anchor" href="#_4-quick-rundown-of-vscode" aria-hidden="true">#</a></h2><p>VSCode is really easy to use.</p><ul><li>File Tree is on the <code>LEFT</code></li><li>File Contents show up on the <code>RIGHT</code> when you click on a file</li><li>Open Files show up in tabs <code>ABOVE</code> the File Contents</li></ul><p><img src="https://i.imgur.com/HKuYTE3.png" alt=""></p><p>The next thing is to open a Terminal inside of VSCode. This is what makes VSCode really nice for development.</p><p>Open a Terminal in VSCode you can use this Key Bind: <code>CTRL + ~</code></p><p>Open a Terminal by <code>Terminal Menu Option</code> -&gt; <code>New Terminal</code></p><p><img src="https://thumbs.gfycat.com/UnconsciousWiltedBlackbird-size_restricted.gif" alt=""></p><p>You should see something like this in your VSCode</p><p><img src="https://i.imgur.com/NXPx3Hk.png" alt=""></p><h2 id="_5-update-package-json" tabindex="-1">5. Update package.json <a class="header-anchor" href="#_5-update-package-json" aria-hidden="true">#</a></h2><p>Click on <code>package.json</code> in your file tree, and add the following line somewhere in the JSON structure. Preferrably under <code>main</code> or <code>description</code>.</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	...</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Like this...</p><p><img src="https://i.imgur.com/S1wYrhC.png" alt=""></p><p><em>Ignore the <code>...</code> they&#39;re just telling you there should be content above / below our main focus</em></p>`,35);function h(n,u,m,g,f,_){return o(),t("div",null,[e("h1",c,[s(i(n.$frontmatter.title)+" ",1),p]),d])}const C=a(r,[["render",h]]);export{k as __pageData,C as default};
