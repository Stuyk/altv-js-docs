import{_ as s,o as a,c as n,e as p}from"./app.7cf5aae7.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}],"relativePath":"server/player/ping_partial_footer.md"}'),l={name:"server/player/ping_partial_footer.md"},e=p(`<h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ping </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ping</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ping </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">kick</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Ping too high</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,2),o=[e];function t(r,c,i,D,y,F){return a(),n("div",null,o)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};
