(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/cartoon-coder.e5b9b2a4.jpg"},,,,function(e,a,t){e.exports=t.p+"static/media/1.d1ed303c.png"},function(e,a,t){e.exports=t.p+"static/media/4-cast-screenshot.b3802bef.png"},function(e,a,t){e.exports=t.p+"static/media/plantarama-screenshot.dd7e05d2.png"},function(e,a,t){e.exports=t.p+"static/media/talkin-trash-screenshot.c19a7794.png"},function(e,a,t){e.exports=t.p+"static/media/mastermind-screenshot.05702241.png"},,,,,,,,,,,,,function(e,a,t){e.exports=t(67)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(22),s=t.n(c),r=(t(39),t(40),t(3)),m=t(4),i=(t(47),t(69));var o=function(e){var a=Object(n.useState)("closed"),t=Object(r.a)(a,2),c=t[0],s=t[1],o=function(){s("closed"===c?"open":"closed")};return l.a.createElement("div",{className:"nav-container"},l.a.createElement("nav",{className:"main-nav"},l.a.createElement("div",{className:"nav-left-links"},l.a.createElement(m.a,{className:"nav-icon",to:"/"},"KG")," "),e.width>1024?l.a.createElement("div",{className:"nav-right-links"},l.a.createElement(m.a,{className:"nav-link",to:"projects"},"Projects"),l.a.createElement(m.a,{className:"nav-link",to:"blog"},"Blog"),l.a.createElement(m.a,{className:"nav-link",to:"contact"},"Contact")):l.a.createElement(i.a,{className:"menu-hamburger",onClick:o})),"open"===c?l.a.createElement("nav",{className:"expanded-nav"},l.a.createElement(m.a,{className:"nav-link",to:"projects",onClick:o},"Projects"),l.a.createElement(m.a,{className:"nav-link",to:"blog",onClick:o},"Blog"),l.a.createElement(m.a,{className:"nav-link",to:"contact",onClick:o},"Contact")):null)},u=t(5),d=t.n(u),p=t(6),E=t(7),h=t.n(E);t(53);var g=function(e){return l.a.createElement("div",{className:"blog-card"},l.a.createElement("div",{className:"blog-card-image-box"}),l.a.createElement("div",{className:"blog-card-main"},l.a.createElement("header",{className:"blog-card-header"},l.a.createElement("h3",{className:"blog-card-title"},e.post.title),l.a.createElement("div",{className:"blog-card-details-box"},l.a.createElement("h4",{className:"blog-detail-date"},"Posted on ",h()(e.post.date).format("LL")),l.a.createElement("h4",{className:"blog-detail-comment-count"},e.comments?e.comments.length:"0"," Comments"))),l.a.createElement("main",null,l.a.createElement("p",{className:"blog-card-content"},e.post.content)),l.a.createElement("footer",{className:"blog-card-footer"},l.a.createElement(m.a,{to:"/blog/".concat(e.post._id),className:"link"},"Read More"))))},N=(t(54),t(55),t(13)),f=t.n(N),b=function(){return l.a.createElement("div",{className:"blog-side-section"},l.a.createElement("div",{className:"side-bio-section"},l.a.createElement("h2",{className:"sub-heading"},"About Me"),l.a.createElement("img",{className:"side-bio-image",src:f.a,alt:"cartoon of coder"}),l.a.createElement("p",{className:"side-bio-content"},"Hey there my name is Kenneth and I am an aspiring front-end developer. Aside from coding, I enjoy cooking and all things food, playing guitar, indoor gardening, cycling, and playing video games.")))},v=t(70),k=t(71);t(56);var j=function(){return l.a.createElement("div",{className:"main-footer"},l.a.createElement("div",{className:"footer-links"},l.a.createElement(v.a,{className:"social-icon"}),l.a.createElement(k.a,{className:"social-icon"})),l.a.createElement("h2",{className:"footer-sub-heading"},"Crafted by me, Kgilla."))},y=function(e){return l.a.createElement("div",{className:"blog-section"},l.a.createElement(m.a,{to:"/blog",className:"link-banner"},l.a.createElement("div",{className:"title-box"},l.a.createElement("div",{className:"title-box-text"},l.a.createElement("h1",{className:"main-heading"}," Hello World To Hired"),l.a.createElement("h2",{className:"sub-heading"},"A collection of experiences on the road to becoming a front-end developer")))),l.a.createElement("div",{className:"blog-main"},l.a.createElement("div",{className:"blog-content"},e.children),l.a.createElement(b,null)),l.a.createElement(j,null))},x=(t(57),function(){return l.a.createElement("div",{className:"lds-spinner"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}),w=function(e){var a=Object(n.useState)([]),t=Object(r.a)(a,2),c=t[0],s=t[1],m=Object(n.useState)(!1),i=Object(r.a)(m,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),"https://api-myblog.herokuapp.com/posts/",e.next=4,fetch("https://api-myblog.herokuapp.com/posts/");case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,s(t.posts),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement(y,{width:e.width},o?l.a.createElement(x,null):l.a.createElement("div",{className:"blog-index"},c.map((function(e){return l.a.createElement(g,{post:e,author:e.author,comments:e.comments,key:e._id})}))))},O=t(72),L=t(73),C=t(74),I=t(75),S=t(76),M=t(77),P=t(78),D=t(79),F=t(80),H=(t(58),function(){return l.a.createElement("div",{className:"skills-section"},l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"front-end-skills"},l.a.createElement("h3",{className:"skills-heading"},"Front-end Developer"),l.a.createElement("p",{className:"skills-paragraph"},"Front-end development is fairly comperable to cooking in more ways than one. I truly enjoy the ability to conceptualize an idea, iterate on it in real time, and ultimately see it fully realized into a functional and beautiful interface."),l.a.createElement("h4",{className:"skills-sub-heading"},"Languages & Frameworks"),l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",{className:"skills-list-item"},"HTML"),l.a.createElement("li",{className:"skills-list-item"},"CSS"),l.a.createElement("li",{className:"skills-list-item"},"Javascript"),l.a.createElement("li",{className:"skills-list-item"},"React"),l.a.createElement("li",{className:"skills-list-item"},"Bootstrap"),l.a.createElement("li",{className:"skills-list-item"},"Sass")),l.a.createElement("h4",{className:"skills-sub-heading"},"Currently Learning"),l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",{className:"skills-list-item"},"Angular"))),l.a.createElement("div",{className:"back-end-skills"},l.a.createElement("h3",{className:"skills-heading"},"Back-end Developer"),l.a.createElement("p",{className:"skills-paragraph"},"Applying creativity towards solving complex problems, structuring and managing data, and helping the server side functions operate more effeciently, are a few of the aspects of back-end development that keep me absorbed in my work."),l.a.createElement("h4",{className:"skills-sub-heading"},"Languages & Frameworks"),l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",{className:"skills-list-item"},"Node.Js"),l.a.createElement("li",{className:"skills-list-item"},"Express"),l.a.createElement("li",{className:"skills-list-item"},"Ruby"),l.a.createElement("li",{className:"skills-list-item"},"Ruby On Rails"),l.a.createElement("li",{className:"skills-list-item"},"MongoDB"),l.a.createElement("li",{className:"skills-list-item"},"SQL")),l.a.createElement("h4",{className:"skills-sub-heading"},"Currently Learning"),l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",{className:"skills-list-item"},"Django")))),l.a.createElement("div",{className:"icon-collection"},l.a.createElement(O.a,{className:"icon"}),l.a.createElement(L.a,{className:"icon"}),l.a.createElement(C.a,{className:"icon"}),l.a.createElement(I.a,{className:"icon"}),l.a.createElement(S.a,{className:"icon"}),l.a.createElement(M.a,{className:"icon"}),l.a.createElement(P.a,{className:"icon"}),l.a.createElement(D.a,{className:"icon"}),l.a.createElement(F.a,{className:"icon"})))}),T=function(e){return l.a.createElement("div",{className:"project-container"},l.a.createElement("figure",{className:"project-image"},l.a.createElement("img",{src:e.image,alt:e.imageAlt,className:"project-thumb"}),l.a.createElement("figcaption",null,l.a.createElement("h2",{className:"project-title"},e.title),l.a.createElement("a",{href:e.liveLink,target:"_blank",rel:"noopener noreferrer",className:"project-link"},"View Website"),l.a.createElement("a",{href:e.codeLink,target:"_blank",rel:"noopener noreferrer",className:"project-link"},"View Code")),l.a.createElement("div",{className:"project-overlay"})))},A=(t(59),t(17)),B=t.n(A),R=t(18),J=t.n(R),W=t(19),_=t.n(W),K=t(20),z=t.n(K),G=t(21),U=t.n(G);var V=function(){return l.a.createElement("div",{id:"project-section"},l.a.createElement("h1",{className:"main-heading"},"My Most Recent Work"),l.a.createElement("div",{className:"project-collection"},l.a.createElement(T,{title:"Get Er Done",image:B.a,altImage:"Get Er Done Project Homepage",liveLink:"https://kgilla.github.io/to-do-list/",codeLink:"https://github.com/kgilla/to-do-list"}),l.a.createElement(T,{title:"4-Cast",image:J.a,altImage:"4-Cast Project Homepage",liveLink:"https://kgilla.github.io/weather-app/",codeLink:"https://github.com/kgilla/weather-app"}),l.a.createElement(T,{title:"Plantarama",image:_.a,altImage:"Plantarama Project Homepage",liveLink:"https://plantarama.herokuapp.com/",codeLink:"https://github.com/kgilla/plant-app"}),l.a.createElement(T,{title:"Talkin' Trash",image:z.a,altImage:"Talkin' Trash Project Homepage",liveLink:"https://talkin-trash.herokuapp.com/",codeLink:"https://github.com/kgilla/talkin-trash"}),l.a.createElement(T,{title:"Mastermind",image:U.a,altImage:"Mastermind Project Homepage",liveLink:"https://mastermind-sinatra.herokuapp.com/",codeLink:"https://github.com/kgilla/mastermind-webapp"})))};t(60);var Q=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"main-hero"},l.a.createElement("h1",{className:"main-heading"},"Full Stack Developer, UI/UX Designer "),l.a.createElement("h2",{className:"sub-heading"},"I create and code beautifly simple things and love what I do."),l.a.createElement("div",{className:"image-box"},l.a.createElement("img",{src:f.a,alt:"Man typing on computer with a hot coffee and cat beside him"}))),l.a.createElement("div",{className:"colored-box"},l.a.createElement("div",{className:"colored-box-text-box"},l.a.createElement("h2",{className:"white-sub-heading"},"Hey there, I'm Kenneth. Thanks for stopping by!"),l.a.createElement("p",{className:"white-paragraph"},"I am a self-taught developer pivoting from a longtime career as a chef. My aim is to apply my passion for creativity, keen attention to detail, and hunger to learn more to help create new and exciting projects."))),l.a.createElement(H,null),l.a.createElement(V,null),l.a.createElement(j,null))};t(61);var X=function(){return l.a.createElement("div",{className:"contact-section"},l.a.createElement("h1",{className:"main-heading"},"Contact Me"),l.a.createElement("h2",{className:"sub-heading"},"Drop me a line and lets have a chat"),l.a.createElement("form",{className:"form"},l.a.createElement("div",{className:"text-inputs"},l.a.createElement("div",{className:"form-section"},l.a.createElement("label",{className:"label",htmlFor:"name"},"Name"),l.a.createElement("input",{className:"text-input",type:"text",name:"name"})),l.a.createElement("div",{className:"contact-spacer"}),l.a.createElement("div",{className:"form-section"},l.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),l.a.createElement("input",{className:"text-input",type:"text",name:"email"}))),l.a.createElement("div",{className:"form-section"},l.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:"textarea"})),l.a.createElement("div",{className:"form-section"},l.a.createElement("button",{className:"form-button"},"Submit"))))},q=t(32),Y=(t(62),function(e){var a=Object(n.useState)(""),t=Object(r.a)(a,2),c=t[0],s=t[1],m=Object(n.useState)(""),i=Object(r.a)(m,2),o=i[0],u=i[1],E=function(){var a=Object(p.a)(d.a.mark((function a(){var t,n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t="https://api-myblog.herokuapp.com/posts/".concat(e.postId,"/comments/create"),a.next=3,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({author:c,content:o})});case 3:return n=a.sent,a.abrupt("return",n.json());case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),h=function(e){"author"===e.target.name?s(e.target.value):"content"===e.target.name&&u(e.target.value)},g=function(){var a=Object(p.a)(d.a.mark((function a(t){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),E().then((function(a){e.handleNewComment(a.comment),s(""),u("")}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return l.a.createElement("div",{className:"comment-form-container"},l.a.createElement("form",{className:"form"},l.a.createElement("h1",{class:"comment-form-heading"},"Leave A Comment"),l.a.createElement("div",{className:"form-section"},l.a.createElement("label",{className:"label",htmlFor:"author"},"Name"),l.a.createElement("input",{className:"text-input",type:"text",name:"author",value:c,onChange:h})),l.a.createElement("div",{className:"form-section"},l.a.createElement("label",{className:"label",htmlFor:"content"},"Comment"),l.a.createElement("textarea",{className:"textarea",name:"content",value:o,onChange:h})),l.a.createElement("button",{className:"form-button",onClick:g},"Submit")))}),Z=(t(63),function(e){return l.a.createElement("div",{className:"comment-container"},l.a.createElement("header",{class:"comment-header"},l.a.createElement("h3",{className:"comment-author"},e.comment.author),l.a.createElement("h4",{class:"comment-date"},"Posted on ",h()(e.comment.date).format("LL"))),l.a.createElement("p",{className:"comment-content"},e.comment.content))}),$=(t(64),function(e){return l.a.createElement("div",{className:"comment-index-container"},l.a.createElement("h1",{className:"comment-index-heading"},"Comments (",e.comments?e.comments.length:"0",")"),e.comments.length>0?e.comments.map((function(e){return l.a.createElement(Z,{comment:e,key:e._id})})):l.a.createElement("div",null,"Nothing here"))}),ee=(t(65),function(e){var a=Object(n.useState)({}),t=Object(r.a)(a,2),c=t[0],s=t[1],m=Object(n.useState)({}),i=Object(r.a)(m,2),o=i[0],u=i[1],E=Object(n.useState)([]),g=Object(r.a)(E,2),N=g[0],f=g[1],b=Object(n.useState)(!1),v=Object(r.a)(b,2),k=v[0],j=v[1];Object(n.useEffect)((function(){(function(){var a=Object(p.a)(d.a.mark((function a(){var t,n,l;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return j(!0),t="https://api-myblog.herokuapp.com/posts/".concat(e.postId),a.next=4,fetch(t);case 4:return n=a.sent,a.next=7,n.json();case 7:l=a.sent,s(l.post),u(l.author),f(l.post.comments),j(!1);case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e.postId]);return l.a.createElement(y,null,l.a.createElement("div",null,k?l.a.createElement(x,null):l.a.createElement("div",{className:"blog-post-container"},l.a.createElement("article",{className:"blog-post"},l.a.createElement("header",{className:"blog-post-header"},l.a.createElement("h1",{className:"blog-post-title"},c.title),l.a.createElement("div",{className:"blog-post-details-box"},l.a.createElement("h2",{className:"blog-post-author"},"By ",o.fullname),l.a.createElement("h4",{className:"blog-post-date"},"Posted on ",h()(c.date).format("LL")))),l.a.createElement("main",{className:"blog-post-content-container"},l.a.createElement("p",{className:"blog-post-content"},c.content)),l.a.createElement("footer",null)),l.a.createElement("div",{className:"comment-section"},l.a.createElement($,{comments:N}),l.a.createElement(Y,{postId:e.postId,handleNewComment:function(e){f((function(a){return[].concat(Object(q.a)(a),[e])}))}})))))});t(66);var ae=function(){var e=Object(n.useState)(window.innerWidth),a=Object(r.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){c(window.innerWidth)}))}),[]),l.a.createElement("div",{className:"main"},l.a.createElement(o,{width:t}),l.a.createElement(m.b,null,l.a.createElement(Q,{path:"/"}),l.a.createElement(V,{path:"/projects"}),l.a.createElement(X,{path:"contact"}),l.a.createElement(w,{path:"blog",width:t}),l.a.createElement(ee,{path:"blog/:postId"})))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ae,null)),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.4c8764bf.chunk.js.map