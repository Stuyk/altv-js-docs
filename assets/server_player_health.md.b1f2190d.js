import{_ as s,o as n,c as t,b as e,d as l,t as o,e as r}from"./app.2030392b.js";const _=JSON.parse('{"title":"health()","description":"","frontmatter":{"title":"health()","order":0},"headers":[{"level":2,"title":"Function Definition","slug":"function-definition","link":"#function-definition","children":[{"level":3,"title":"Returns","slug":"returns","link":"#returns","children":[]}]},{"level":2,"title":"Documentation","slug":"documentation","link":"#documentation","children":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]}],"relativePath":"server/player/health.md"}'),p={name:"server/player/health.md"},c={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(`<p>Used to obtain or change a player&#39;s health.</p><p>Ranges from <code>100 - 199</code></p><h2 id="function-definition" tabindex="-1">Function Definition <a class="header-anchor" href="#function-definition" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">public </span><span style="color:#FFCB6B;">health</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h3><ul><li>number</li></ul><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-hidden="true">#</a></h2><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> currentHealth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">health</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">health </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">199</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Set to full health.</span></span>
<span class="line"><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">health </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Kill the player.</span></span>
<span class="line"></span></code></pre></div>`,9);function h(a,u,D,y,C,A){return n(),t("div",null,[e("h1",c,[l(o(a.$frontmatter.title)+" ",1),i]),d])}const f=s(p,[["render",h]]);export{_ as __pageData,f as default};
