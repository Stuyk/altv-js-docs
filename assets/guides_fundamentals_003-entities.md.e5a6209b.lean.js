import{f as n,r as c,o as r,c as y,b as l,d as i,t as F,a,e as D}from"./app.7cf5aae7.js";const C={id:"frontmatter-title",tabindex:"-1"},A=l("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=D("",17),f=JSON.parse('{"title":"Entities","description":"","frontmatter":{"title":"Entities","order":3},"headers":[{"level":2,"title":"Changing Positions of Entities","slug":"changing-positions-of-entities","link":"#changing-positions-of-entities","children":[]},{"level":2,"title":"Comparing Entity Types","slug":"comparing-entity-types","link":"#comparing-entity-types","children":[]},{"level":2,"title":"Validating Entities","slug":"validating-entities","link":"#validating-entities","children":[]},{"level":2,"title":"Quiz","slug":"quiz","link":"#quiz","children":[]}],"relativePath":"guides/fundamentals/003-entities.md"}'),h={name:"guides/fundamentals/003-entities.md"},v=Object.assign(h,{setup(u){const o=n([{text:"driver"},{text:"pos",isAnswer:!0},{text:"deploy()"}]),e=n([{text:"somePlayer.pos = { x: 0, y: 0, z: 0 }",isAnswer:!0},{text:"somePlayer.setPosition(0, 0, 0)"},{text:"somePlayer.setPosition = { x: 0, y: 0, z: 0 }"}]),p=n([{text:"typeof entity === 'undefined'"},{text:"entity.valid"},{text:"All the Above",isAnswer:!0}]);return(t,m)=>{const s=c("Question");return r(),y("div",null,[l("h1",C,[i(F(t.$frontmatter.title)+" ",1),A]),d,a(s,{type:"question1",question:"What property can be found on all entity types?",answers:o.value},null,8,["answers"]),a(s,{type:"question2",question:"How do I change the position of an Entity?",answers:e.value},null,8,["answers"]),a(s,{type:"question3",question:"What should I use to check if an entity is valid?",answers:p.value},null,8,["answers"])])}}});export{f as __pageData,v as default};