(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){},126:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(46),r=t.n(l),s=t(2),o=t(5),i=(t(69),t(135)),m=t(136);var u=function(e){var a=e.handleClick,t=e.containerClass;return c.a.createElement("ul",{className:t},c.a.createElement(o.a,{className:"nav-link",to:"projects",onClick:a},"Projects"),c.a.createElement(o.a,{className:"nav-link",to:"blog",onClick:a},"Blog"),c.a.createElement(o.a,{className:"nav-link",to:"contact",onClick:a},"Contact"))},d=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),l=t[0],r=t[1],d="expanded-nav open-nav",p="nav-right-links",h=function(){r(!l)};return c.a.createElement("div",{className:"nav-container"},c.a.createElement("nav",{className:"main-nav"},c.a.createElement("div",{className:"nav-left-links"},c.a.createElement(o.a,{className:"nav-icon",to:"/"},"KG")," "),e.width>1024?c.a.createElement(u,{containerClass:p,onClick:h}):l?c.a.createElement(i.a,{className:"menu-hamburger spinulator",onClick:h}):c.a.createElement(m.a,{className:"menu-hamburger",onClick:h})),l?c.a.createElement(u,{handleClick:h,containerClass:d}):null)},p=t(4),h=t.n(p),b=t(6),g=t(17),E=t.n(g),f=t(8),v=t.n(f);t(117);var N=function(e){return c.a.createElement("div",{className:"blog-card"},c.a.createElement("div",{className:"blog-card-image",style:{backgroundImage:"url(".concat(e.post.blurbImage,")")}}),c.a.createElement("div",{className:"blog-card-main"},c.a.createElement("header",{className:"blog-card-header"},c.a.createElement("h2",{className:"blog-card-title"},e.post.title),c.a.createElement("h4",{className:"blog-detail-date"},v()(e.post.date).format("LL"))),c.a.createElement("main",{className:"blog-card-content"},E()(e.post.blurb))),c.a.createElement(o.a,{className:"blog-card-link",to:"/blog/".concat(e.post._id)}))},k=(t(118),t(119),t(55)),j=t.n(k),x=function(){return c.a.createElement("div",{className:"blog-side-section"},c.a.createElement("div",{className:"side-bio-section"},c.a.createElement("h2",{className:"sub-heading"},"About Me"),c.a.createElement("div",{className:"side-blog-image-container"},c.a.createElement("img",{className:"side-bio-image",src:j.a,alt:"cartoon of coder"})),c.a.createElement("p",{className:"side-bio-content"},"Hey there, my name is Kenneth Gilmore and I am an aspiring full-stack developer. Aside from coding, I enjoy cooking and all things food, playing guitar, indoor gardening, cycling, and playing video games.")))},y=function(e){return c.a.createElement("div",{className:"blog-section"},c.a.createElement(o.a,{to:"/blog",className:"link-banner"},c.a.createElement("div",{className:"title-box"},c.a.createElement("div",{className:"title-box-text"},c.a.createElement("h1",{className:"main-heading"}," Hello World To Hired"),c.a.createElement("h2",{className:"sub-heading"},"A collection of experiences on the road to becoming a full-stack developer")))),c.a.createElement("div",{className:"blog-main"},c.a.createElement("div",{className:"blog-content"},e.children),e.isLoading?null:c.a.createElement(x,null)))},O=(t(120),function(){return c.a.createElement("div",{id:"spinner-box"},c.a.createElement("div",{className:"lds-spinner"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))}),w="https://blog-api-lwdc.onrender.com",S=function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)(!1),i=Object(s.a)(o,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var a,t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),a="".concat(w,"/posts"),e.next=4,fetch(a);case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,r(n.posts),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(y,{width:e.width,isLoading:m},m?c.a.createElement(O,null):c.a.createElement("div",{className:"blog-index"},l.map((function(e){return c.a.createElement(N,{post:e,author:e.author,comments:e.comments,key:e._id})}))))},L=t(137),C=t(138),I=t(139),P=t(140),D=t(141),B=t(142),T=t(143),M=t(144),A=t(145),H=t(146),R=t(147),F=(t(121),function(){var e="Front-end Developer",a="Back-end Developer",t="Languages and Frameworks";return c.a.createElement("div",{className:"skills-section"},c.a.createElement("div",{className:"skills-container"},c.a.createElement("div",{className:"front-end-skills"},c.a.createElement("h3",{className:"skills-heading"},e),c.a.createElement("p",{className:"skills-paragraph"},"Front-end development is fairly comperable to cooking in more ways than one. I truly enjoy the ability to conceptualize an idea, iterate on it in real time, and ultimately see it fully realized into a functional and beautiful interface."),c.a.createElement("h4",{className:"skills-sub-heading"},t),c.a.createElement("ul",{className:"skills-list"},["HTML","CSS","Javascript","React","Bootstrap","Tailwind","Sass"].map((function(e){return c.a.createElement("li",{className:"skills-list-item",key:e},e)})))),c.a.createElement("div",{className:"back-end-skills"},c.a.createElement("h3",{className:"skills-heading"},a),c.a.createElement("p",{className:"skills-paragraph"},"Applying creativity towards solving complex problems, structuring and managing data, and helping the server side functions operate more effeciently, are a few of the aspects of back-end development that keep me absorbed in my work."),c.a.createElement("h4",{className:"skills-sub-heading"},t),c.a.createElement("ul",{className:"skills-list"},["Node","Express","Ruby","Ruby on Rails","MongoDB","SQL","GraphQL"].map((function(e){return c.a.createElement("li",{className:"skills-list-item",key:e},e)}))))),c.a.createElement("div",{className:"icon-collection"},c.a.createElement(L.a,{className:"icon"}),c.a.createElement(C.a,{className:"icon"}),c.a.createElement(I.a,{className:"icon"}),c.a.createElement(P.a,{className:"icon"}),c.a.createElement(D.a,{className:"icon"}),c.a.createElement(B.a,{className:"icon"}),c.a.createElement(T.a,{className:"icon"}),c.a.createElement(M.a,{className:"icon"}),c.a.createElement(A.a,{className:"icon"}),c.a.createElement(H.a,{className:"icon"}),c.a.createElement(R.a,{className:"icon"})))}),J=(t(122),function(e){var a=e.image,t=e.imageAlt,n=e.title,l=e.blurb,r=e.liveLink,s=e.codeLink;return c.a.createElement("div",{className:"project-container"},c.a.createElement("figure",{className:"project-image"},c.a.createElement("img",{src:a,alt:t,className:"project-thumb"}),c.a.createElement("figcaption",null,c.a.createElement("h2",{className:"project-title"},n),c.a.createElement("p",{className:"project-blurb"},l),c.a.createElement("div",{className:"project-button-container"},c.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"project-link"},"View Website"),c.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"project-link"},"View Code"))),c.a.createElement("div",{className:"project-overlay"})))}),_=(t(123),t(37)),z=t.n(_),G=t(38),W=t.n(G),U=t(39),K=t.n(U),Z=t(40),Q=t.n(Z),V=(t(41),t(42),t(43)),$=t.n(V),X=t(44),q=t.n(X),Y=t(45),ee=[{title:"Shmurdle",blurb:"Wordle clone made using vanilla Javascript and CSS.",image:t.n(Y).a,altImage:"Shmurdle Project Homepage",liveLink:"https://kgilla.github.io/wordle-clone/",codeLink:"https://github.com/kgilla/wordle-clone"},{title:"S/eddit",blurb:"Robust, full-featured Reddit clone built using MERN stack (MongoDB, Express, React, Node.JS).",image:q.a,altImage:"S/eddit Project Homepage",liveLink:"https://kgilla.github.io/reddit-clone/",codeLink:"https://github.com/kgilla/reddit-clone"},{title:"BattleBoats",blurb:"Battleship game made using React with emphasis on Javascript ES6 Classes and testing with Jest.",image:$.a,altImage:"BattleBoats screenshot of game",liveLink:"https://kgilla.github.io/battleboats/",codeLink:"https://github.com/kgilla/battleboats"},{title:"Get Er Done",blurb:"Feature-rich to-do-list web app made using strictly vanilla Javascript.",image:z.a,altImage:"Get Er Done Project Homepage",liveLink:"https://kgilla.github.io/to-do-list/",codeLink:"https://github.com/kgilla/to-do-list"},{title:"4-Cast",blurb:"Responsive weather web application utilizing Open Weather\u2019s API.",image:W.a,altImage:"4-Cast Project Homepage",liveLink:"https://kgilla.github.io/weather-app/",codeLink:"https://github.com/kgilla/weather-app"},{title:"Plantarama",blurb:"Server-rendered design focused web app built using Express and PUG, styled with Bootstrap.",image:K.a,altImage:"Plantarama Project Homepage",liveLink:"https://plant-app.onrender.com/",codeLink:"https://github.com/kgilla/plant-app"},{title:"Talkin' Trash",blurb:"Authentication-focused web application built using Express and PUG, styled with Bootstrap.",image:Q.a,altImage:"Talkin' Trash Project Homepage",liveLink:"https://talking-trash.onrender.com/",codeLink:"https://github.com/kgilla/talkin-trash"}];var ae=function(){return c.a.createElement("div",{id:"project-section"},c.a.createElement("h1",{className:"main-heading"},"My Most Recent Work"),c.a.createElement("div",{className:"project-collection"},ee.map((function(e){return c.a.createElement(J,{key:e.title,title:e.title,blurb:e.blurb,image:e.image,altImage:e.altImage,liveLink:e.liveLink,codeLink:e.codeLink})}))))},te=(t(124),t(56)),ne=t.n(te);var ce=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"main-hero"},c.a.createElement("h1",{className:"main-heading"},"Full Stack Developer, UI/UX Designer"),c.a.createElement("h2",{className:"sub-heading"},"I create and code"," ",c.a.createElement("span",{className:"sub-heading-marker"},"beautifully simple things"),"and love what I do."),c.a.createElement("div",{className:"image-box"},c.a.createElement("img",{src:ne.a,alt:"Man typing on computer with a hot coffee and cat beside him"}))),c.a.createElement("div",{className:"colored-box"},c.a.createElement("div",{className:"colored-box-text-box"},c.a.createElement("h2",{className:"white-sub-heading"},"Hey there, I'm Kenneth. Thanks for stopping by!"),c.a.createElement("p",{className:"white-paragraph"},"I am a self-taught developer pivoting from a previous career as a chef. My aim is to apply my passion for creativity, keen attention to detail, and hunger to learn more to help create new and exciting projects."))),c.a.createElement(F,null),c.a.createElement(ae,null))};t(125);var le=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],m=o[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],g=d[1],E=Object(n.useState)(""),f=Object(s.a)(E,2),v=f[0],N=f[1],k=Object(n.useState)(""),j=Object(s.a)(k,2),x=j[0],y=j[1],O=Object(n.useState)(""),S=Object(s.a)(O,2),L=S[0],C=S[1],I=Object(n.useState)(""),P=Object(s.a)(I,2),D=P[0],B=P[1],T=function(){var e=Object(b.a)(h.a.mark((function e(a){var t,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(w,"/contacts/create"),e.next=4,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,200===n.status?M(c):A(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}(),M=function(e){B(e.message),setTimeout((function(){B("")}),5e3),H()},A=function(e){console.log(e)},H=function(){l(""),g(""),y("")},R=function(e){var a=e.target,t=a.name,n=a.value;!function(e){"name"===e?m(""):"email"===e?N(""):C("")}(t),"name"===t?l(n):"email"===t?g(n):y(n)};return c.a.createElement("div",{className:"contact-section"},c.a.createElement("h1",{className:"main-heading"},"Contact Me"),c.a.createElement("h2",{className:"sub-heading"},"Drop me a line and lets have a chat!"),D?c.a.createElement("p",{className:"success"},D):null,c.a.createElement("form",{className:"form",id:"contact-form",onSubmit:function(e){e.preventDefault();var a={name:t,email:p,message:x};(function(e){var a=!1;return e.name.length<1&&(m("Please enter a name"),a=!0),e.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)||(N("Please enter a valid email"),a=!0),e.message.length<1&&(C("Please enter a message"),a=!0),a})(a)||T(a)}},c.a.createElement("div",{className:"text-inputs"},c.a.createElement("div",{className:"form-section"},c.a.createElement("label",{className:"label",htmlFor:"name"},"Name"),c.a.createElement("input",{className:i?"text-input-error":"text-input",type:"text",name:"name",value:t,onChange:R}),i?c.a.createElement("p",{className:"error"},i):null),c.a.createElement("div",{className:"contact-spacer"}),c.a.createElement("div",{className:"form-section"},c.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),c.a.createElement("input",{className:v?"text-input-error":"text-input",type:"text",name:"email",value:p,onChange:R}),v?c.a.createElement("p",{className:"error"},v):null)),c.a.createElement("div",{className:"form-section"},c.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),c.a.createElement("textarea",{className:L?"textarea-error":"textarea",name:"message",value:x,onChange:R}),L?c.a.createElement("p",{className:"error"},L):null),c.a.createElement("div",{className:"form-section"},c.a.createElement("button",{className:"form-button"},"Submit"))))},re=t(57),se=(t(126),function(e){return c.a.createElement("div",{className:"comment-container"},c.a.createElement("header",{className:"comment-header"},c.a.createElement("h3",{className:"comment-author"},e.comment.author)),c.a.createElement("main",{className:"comment-main"},c.a.createElement("p",{className:"comment-content"},e.comment.content)),c.a.createElement("footer",{className:"comment-footer"},c.a.createElement("h4",{className:"comment-date"},"Posted on ",v()(e.comment.date).format("LL"))))}),oe=(t(127),function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),g=p[0],E=p[1],f=Object(n.useState)(""),v=Object(s.a)(f,2),N=v[0],k=v[1],j=Object(n.useState)(""),x=Object(s.a)(j,2),y=x[0],O=x[1],S=function(){var e=Object(b.a)(h.a.mark((function e(a){var t,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(w,"/comments/create"),e.next=3,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,200===n.status?C(c.comment):L(c);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),L=function(e){console.log(e)},C=function(a){e.handleComment(a),O("Comment created successfully!"),setTimeout((function(){O("")}),5e3)},I=function(e){var a=e.target,t=a.name,n=a.value;!function(e){"author"===e?u(""):k("")}(t),"author"===t?r(n):E(n)},P=function(e){var a=!0;return e.author.length<1&&(u("Please enter a name"),a=!1),e.content.length<1&&(k("Please enter a comment"),a=!1),a},D=function(){var a=Object(b.a)(h.a.mark((function a(t){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),n={author:l,content:g,postID:e.postID},P(n)&&(S(n),r(""),E(""));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return c.a.createElement("div",{className:"comment-form-container"},c.a.createElement("form",{className:"form",id:"comment-form",onSubmit:D},c.a.createElement("h1",{className:"comment-form-heading"},"Leave A Comment"),y?c.a.createElement("p",{className:"success"},y):null,c.a.createElement("div",{className:"form-section"},c.a.createElement("label",{className:"label",htmlFor:"author"},"Name"),c.a.createElement("input",{className:m?"form-input-error":"form-input",type:"text",name:"author",value:l,onChange:I}),m?c.a.createElement("p",{className:"error"},m):null),c.a.createElement("div",{className:"form-section"},c.a.createElement("label",{className:"label",htmlFor:"content"},"Comment"),c.a.createElement("textarea",{className:N?"form-input-error":"form-input",name:"content",value:g,onChange:I}),N?c.a.createElement("p",{className:"error"},N):null),c.a.createElement("button",{className:"form-button"},"Submit")))}),ie=(t(128),function(e){var a=Object(n.useState)(e.comments),t=Object(s.a)(a,2),l=t[0],r=t[1];return c.a.createElement("div",{className:"comment-index-container"},c.a.createElement("h1",{className:"comment-index-heading"},"Comments (",l?l.length:"0",")"),l.length>0?c.a.createElement("div",{id:"comment-index"},l.map((function(e){return c.a.createElement(se,{comment:e,key:e._id})}))):c.a.createElement("div",null,"No comments yet"),c.a.createElement(oe,{postID:e.postID,handleComment:function(e){l.length<1?r([e]):r((function(a){return[].concat(Object(re.a)(a),[e])}))}}))}),me=(t(129),function(e){var a=Object(n.useState)({}),t=Object(s.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)({}),i=Object(s.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)([]),p=Object(s.a)(d,2),g=p[0],f=p[1],N=Object(n.useState)(!1),k=Object(s.a)(N,2),j=k[0],x=k[1];return Object(n.useEffect)((function(){(function(){var a=Object(b.a)(h.a.mark((function a(){var t,n,c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return x(!0),t="".concat(w,"/posts/").concat(e.postId),a.next=4,fetch(t);case 4:return n=a.sent,a.next=7,n.json();case 7:c=a.sent,r(c.post),u(c.post.author),f(c.post.comments),x(!1);case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e.postId]),c.a.createElement(y,{isLoading:j},j?c.a.createElement(O,null):c.a.createElement("div",{className:"blog-post-container"},c.a.createElement("article",{className:"blog-post"},c.a.createElement("header",{className:"blog-post-header"},c.a.createElement("h1",{className:"blog-post-title"},l.title),c.a.createElement("div",{className:"blog-post-details-box"},c.a.createElement("h2",{className:"blog-post-author"},"By ",m.fullname),c.a.createElement("h4",{className:"blog-post-date"},"Posted on ",v()(l.date).format("LL")))),c.a.createElement("main",{className:"blog-post-content"},E()(l.content)),c.a.createElement("footer",null)),c.a.createElement("div",{className:"comment-section"},c.a.createElement(ie,{comments:g,postID:e.postId}))))}),ue=t(148),de=t(149);t(130);var pe=function(){return c.a.createElement("div",{className:"main-footer"},c.a.createElement("div",{className:"footer-links"},c.a.createElement("a",{href:"https://github.com/kgilla",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(ue.a,{className:"social-icon"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/kenneth-gilmore-74704011a/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(de.a,{className:"social-icon"}))))};t(131),t(132);var he=function(){var e=Object(n.useState)(window.innerWidth),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){l(window.innerWidth)}))}),[]),c.a.createElement("div",{className:"main"},c.a.createElement(d,{width:t}),c.a.createElement(o.b,null,c.a.createElement(ce,{path:"/"}),c.a.createElement(ae,{path:"/projects"}),c.a.createElement(le,{path:"contact"}),c.a.createElement(S,{path:"blog",width:t}),c.a.createElement(me,{path:"blog/:postId"})),c.a.createElement(pe,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(he,null)),document.getElementById("root"))},37:function(e,a,t){e.exports=t.p+"static/media/1.d1ed303c.png"},38:function(e,a,t){e.exports=t.p+"static/media/4-cast-screenshot.b3802bef.png"},39:function(e,a,t){e.exports=t.p+"static/media/plantarama-screenshot.dd7e05d2.png"},40:function(e,a,t){e.exports=t.p+"static/media/talkin-trash-screenshot.c19a7794.png"},41:function(e,a,t){e.exports=t.p+"static/media/mastermind-screenshot.05702241.png"},42:function(e,a,t){e.exports=t.p+"static/media/flyaway-screenshot.c717070f.png"},43:function(e,a,t){e.exports=t.p+"static/media/battleboats-screenshot.ce8afeb0.png"},44:function(e,a,t){e.exports=t.p+"static/media/seddit-screenshot.79198cf2.png"},45:function(e,a,t){e.exports=t.p+"static/media/shmurdle-screenshot.9307db0a.png"},55:function(e,a,t){e.exports=t.p+"static/media/me.f2566c09.jpg"},56:function(e,a,t){e.exports=t.p+"static/media/cartoon-coder.e5b9b2a4.jpg"},59:function(e,a,t){e.exports=t(133)},69:function(e,a,t){},98:function(e,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.3d23b8e6.chunk.js.map