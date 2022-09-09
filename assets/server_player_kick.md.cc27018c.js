import{_ as a,o as e,c as l,b as s,d as t,t as o,e as r}from"./app.c11c3c6d.js";const C=JSON.parse('{"title":"kick()","description":"","frontmatter":{"title":"kick()","order":0},"headers":[{"level":2,"title":"Function Definition","slug":"function-definition","link":"#function-definition","children":[{"level":3,"title":"Arguments","slug":"arguments","link":"#arguments","children":[]},{"level":3,"title":"Returns","slug":"returns","link":"#returns","children":[]}]},{"level":2,"title":"Documentation","slug":"documentation","link":"#documentation","children":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]}],"relativePath":"server/player/kick.md"}'),p={name:"server/player/kick.md"},i={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(`<p>Kick a player with a reason.</p><h2 id="function-definition" tabindex="-1">Function Definition <a class="header-anchor" href="#function-definition" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">public </span><span style="color:#82AAFF;">kick</span><span style="color:#A6ACCD;">(reason</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h3><ul><li>reason?: string</li></ul><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h3><ul><li>void</li></ul><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-hidden="true">#</a></h2><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ping </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ping</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ping </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">kick</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Ping too high</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,10);function u(n,D,h,y,F,A){return e(),l("div",null,[s("h1",i,[t(o(n.$frontmatter.title)+" ",1),c]),d])}const _=a(p,[["render",u]]);export{C as __pageData,_ as default};
