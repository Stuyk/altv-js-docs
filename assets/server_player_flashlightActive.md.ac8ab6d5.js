import{_ as n,o as e,c as t,b as s,d as l,t as i,e as o}from"./app.f4c5f272.js";const A=JSON.parse('{"title":"flashlightActive()","description":"","frontmatter":{"title":"flashlightActive()","order":0},"headers":[{"level":2,"title":"Function Definition","slug":"function-definition","link":"#function-definition","children":[{"level":3,"title":"Returns","slug":"returns","link":"#returns","children":[]}]},{"level":2,"title":"Documentation","slug":"documentation","link":"#documentation","children":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]}],"relativePath":"server/player/flashlightActive.md"}'),c={name:"server/player/flashlightActive.md"},r={id:"frontmatter-title",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(`<p>Check if flashlight is active for this player.</p><h2 id="function-definition" tabindex="-1">Function Definition <a class="header-anchor" href="#function-definition" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">public readonly </span><span style="color:#FFCB6B;">flashlightActive</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h3><ul><li>boolean</li></ul><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-hidden="true">#</a></h2><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isActive </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">flashlightActive</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">isActive) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// I can&#39;t see anything captain!</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// I can see everything captain!</span></span>
<span class="line"></span></code></pre></div>`,8);function h(a,u,D,f,y,F){return e(),t("div",null,[s("h1",r,[l(i(a.$frontmatter.title)+" ",1),p]),d])}const m=n(c,[["render",h]]);export{A as __pageData,m as default};
