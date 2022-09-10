import{_ as s,o as a,c as n,e}from"./app.f4c5f272.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}],"relativePath":"server/player/entityAimingAt_partial_footer.md"}'),l={name:"server/player/entityAimingAt_partial_footer.md"},t=e(`<h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">entityAimingAt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (target </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> someOtherPlayer) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// not aiming at the player we are looking for</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// is aiming at the player we are looking for</span></span>
<span class="line"></span></code></pre></div>`,2),p=[t];function o(r,c,i,_,y,D){return a(),n("div",null,p)}const m=s(l,[["render",o]]);export{A as __pageData,m as default};
