import{_ as a,o as e,c as t,b as n,d as l,t as o,e as r}from"./app.2030392b.js";const m=JSON.parse('{"title":"authToken()","description":"","frontmatter":{"title":"authToken()","order":0},"headers":[{"level":2,"title":"Function Definition","slug":"function-definition","link":"#function-definition","children":[{"level":3,"title":"Returns","slug":"returns","link":"#returns","children":[]}]},{"level":2,"title":"Documentation","slug":"documentation","link":"#documentation","children":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]}],"relativePath":"server/player/authToken.md"}'),p={name:"server/player/authToken.md"},c={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(`<p>Used in tandem with <a href="https://docs.altv.mp/articles/earlyauth.html" target="_blank" rel="noreferrer">Early Auth</a></p><h2 id="function-definition" tabindex="-1">Function Definition <a class="header-anchor" href="#function-definition" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">public readonly </span><span style="color:#FFCB6B;">authToken</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h3><ul><li>string</li></ul><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-hidden="true">#</a></h2><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> uniqueToken </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">authToken</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (uniqueToken </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blahBlahBlah</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">kick</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bad token</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,8);function h(s,u,D,y,F,_){return e(),t("div",null,[n("h1",c,[l(o(s.$frontmatter.title)+" ",1),i]),d])}const A=a(p,[["render",h]]);export{m as __pageData,A as default};
