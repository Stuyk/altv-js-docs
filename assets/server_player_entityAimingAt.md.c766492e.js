import{_ as a,o as s,c as t,b as n,d as l,t as i,e as o}from"./app.7cf5aae7.js";const f=JSON.parse('{"title":"entityAimingAt()","description":"","frontmatter":{"title":"entityAimingAt()","order":0},"headers":[{"level":2,"title":"Function Definition","slug":"function-definition","link":"#function-definition","children":[{"level":3,"title":"Returns","slug":"returns","link":"#returns","children":[]}]},{"level":2,"title":"Documentation","slug":"documentation","link":"#documentation","children":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]}],"relativePath":"server/player/entityAimingAt.md"}'),r={name:"server/player/entityAimingAt.md"},p={id:"frontmatter-title",tabindex:"-1"},c=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(`<p>Get the vehicle, player, etc. that the player is aiming at.</p><h2 id="function-definition" tabindex="-1">Function Definition <a class="header-anchor" href="#function-definition" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">public readonly </span><span style="color:#FFCB6B;">entityAimingAt</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Entity </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span></code></pre></div><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h3><ul><li>Entity | null</li></ul><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-hidden="true">#</a></h2><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">entityAimingAt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (target </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> someOtherPlayer) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// not aiming at the player we are looking for</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// is aiming at the player we are looking for</span></span>
<span class="line"></span></code></pre></div>`,8);function y(e,h,u,D,m,A){return s(),t("div",null,[n("h1",p,[l(i(e.$frontmatter.title)+" ",1),c]),d])}const _=a(r,[["render",y]]);export{f as __pageData,_ as default};