(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){},126:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(42),s=t.n(c),r=t(1),m=t(5),o=(t(66),t(131));var i=function(e){var a=Object(n.useState)("closed"),t=Object(r.a)(a,2),c=t[0],s=t[1],i=function(){s("closed"===c?"open":"closed")};return l.a.createElement("div",{className:"nav-container"},l.a.createElement("nav",{className:"main-nav"},l.a.createElement("div",{className:"nav-left-links"},l.a.createElement(m.a,{className:"nav-icon",to:"/"},"KG")," "),e.width>1024?l.a.createElement("div",{className:"nav-right-links"},l.a.createElement(m.a,{className:"nav-link",to:"projects"},"Projects"),l.a.createElement(m.a,{className:"nav-link",to:"blog"},"Blog"),l.a.createElement(m.a,{className:"nav-link",to:"contact"},"Contact")):l.a.createElement(o.a,{className:"menu-hamburger",onClick:i})),"open"===c?l.a.createElement("nav",{className:"expanded-nav"},l.a.createElement(m.a,{className:"nav-link",to:"projects",onClick:i},"Projects"),l.a.createElement(m.a,{className:"nav-link",to:"blog",onClick:i},"Blog"),l.a.createElement(m.a,{className:"nav-link",to:"contact",onClick:i},"Contact")):null)},u=t(4),p=t.n(u),d=t(6),E=t(16),h=t.n(E),g=t(8),f=t.n(g);t(114);var b=function(e){return l.a.createElement(m.a,{to:"/blog/".concat(e.post._id)},l.a.createElement("div",{className:"blog-card"},l.a.createElement("div",{className:"blog-card-image-box"},l.a.createElement("img",{className:"blog-card-image",src:e.post.blurbImage,alt:e.post.blurbImageAlt})),l.a.createElement("div",{className:"blog-card-main"},l.a.createElement("header",{className:"blog-card-header"},l.a.createElement("h2",{className:"blog-card-title"},e.post.title),l.a.createElement("h4",{className:"blog-detail-date"},f()(e.post.date).format("LL"))),l.a.createElement("main",{className:"blog-card-content"},h()(e.post.blurb)))))},N=(t(115),t(116),t(52)),v=t.n(N),k=function(){return l.a.createElement("div",{className:"blog-side-section"},l.a.createElement("div",{className:"side-bio-section"},l.a.createElement("h2",{className:"sub-heading"},"About Me"),l.a.createElement("div",{className:"side-blog-image-container"},l.a.createElement("img",{className:"side-bio-image",src:v.a,alt:"cartoon of coder"})),l.a.createElement("p",{className:"side-bio-content"},"Hey there, my name is Kenneth Gilmore and I am an aspiring full-stack developer. Aside from coding, I enjoy cooking and all things food, playing guitar, indoor gardening, cycling, and playing video games.")))},j=t(132),y=t(133);t(117);var O=function(){return l.a.createElement("div",{className:"main-footer"},l.a.createElement("div",{className:"footer-links"},l.a.createElement("a",{href:"https://github.com/kgilla",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(j.a,{className:"social-icon"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/kenneth-gilmore-74704011a/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(y.a,{className:"social-icon"}))),l.a.createElement("h2",{className:"footer-sub-heading"},"Crafted by me, Kgilla."))},x=function(e){return l.a.createElement("div",{className:"blog-section"},l.a.createElement(m.a,{to:"/blog",className:"link-banner"},l.a.createElement("div",{className:"title-box"},l.a.createElement("div",{className:"title-box-text"},l.a.createElement("h1",{className:"main-heading"}," Hello World To Hired"),l.a.createElement("h2",{className:"sub-heading"},"A collection of experiences on the road to becoming a full-stack developer")))),l.a.createElement("div",{className:"blog-main"},l.a.createElement("div",{className:"blog-content"},e.children),e.isLoading?null:l.a.createElement(k,null)),l.a.createElement(O,null))},w=(t(118),function(){return l.a.createElement("div",{id:"spinner-box"},l.a.createElement("div",{className:"lds-spinner"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))}),S=function(e){var a=Object(n.useState)([]),t=Object(r.a)(a,2),c=t[0],s=t[1],m=Object(n.useState)(!1),o=Object(r.a)(m,2),i=o[0],u=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),"https://api-myblog.herokuapp.com/posts/",e.next=4,fetch("https://api-myblog.herokuapp.com/posts/");case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,s(t.posts),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement(x,{width:e.width,isLoading:i},i?l.a.createElement(w,null):l.a.createElement("div",{className:"blog-index"},c.map((function(e){return l.a.createElement(b,{post:e,author:e.author,comments:e.comments,key:e._id})}))))},L=t(134),C=t(135),I=t(136),P=t(137),D=t(138),A=t(139),T=t(140),F=t(141),M=t(142),H=(t(119),function(){return l.a.createElement("div",{className:"skills-section"},l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"front-end-skills"},l.a.createElement("h3",{className:"skills-heading"},"Front-end Developer"),l.a.createElement("p",{className:"skills-paragraph"},"Front-end development is fairly comperable to cooking in more ways than one. I truly enjoy the ability to conceptualize an idea, iterate on it in real time, and ultimately see it fully realized into a functional and beautiful interface."),l.a.createElement("h4",{className:"skills-sub-heading"},"Languages & Frameworks"),l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",{className:"skills-list-item"},"HTML"),l.a.createElement("li",{className:"skills-list-item"},"CSS"),l.a.createElement("li",{className:"skills-list-item"},"Javascript"),l.a.createElement("li",{className:"skills-list-item"},"React"),l.a.createElement("li",{className:"skills-list-item"},"Bootstrap"),l.a.createElement("li",{className:"skills-list-item"},"Sass")),l.a.createElement("h4",{className:"skills-sub-heading"},"Currently Learning"),l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",{className:"skills-list-item"},"Angular"))),l.a.createElement("div",{className:"back-end-skills"},l.a.createElement("h3",{className:"skills-heading"},"Back-end Developer"),l.a.createElement("p",{className:"skills-paragraph"},"Applying creativity towards solving complex problems, structuring and managing data, and helping the server side functions operate more effeciently, are a few of the aspects of back-end development that keep me absorbed in my work."),l.a.createElement("h4",{className:"skills-sub-heading"},"Languages & Frameworks"),l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",{className:"skills-list-item"},"Node.Js"),l.a.createElement("li",{className:"skills-list-item"},"Express"),l.a.createElement("li",{className:"skills-list-item"},"Ruby"),l.a.createElement("li",{className:"skills-list-item"},"Ruby On Rails"),l.a.createElement("li",{className:"skills-list-item"},"MongoDB"),l.a.createElement("li",{className:"skills-list-item"},"SQL")),l.a.createElement("h4",{className:"skills-sub-heading"},"Currently Learning"),l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",{className:"skills-list-item"},"Django")))),l.a.createElement("div",{className:"icon-collection"},l.a.createElement(L.a,{className:"icon"}),l.a.createElement(C.a,{className:"icon"}),l.a.createElement(I.a,{className:"icon"}),l.a.createElement(P.a,{className:"icon"}),l.a.createElement(D.a,{className:"icon"}),l.a.createElement(A.a,{className:"icon"}),l.a.createElement(T.a,{className:"icon"}),l.a.createElement(F.a,{className:"icon"}),l.a.createElement(M.a,{className:"icon"})))}),_=function(e){return l.a.createElement("div",{className:"project-container"},l.a.createElement("figure",{className:"project-image"},l.a.createElement("img",{src:e.image,alt:e.imageAlt,className:"project-thumb"}),l.a.createElement("figcaption",null,l.a.createElement("h2",{className:"project-title"},e.title),l.a.createElement("a",{href:e.liveLink,target:"_blank",rel:"noopener noreferrer",className:"project-link"},"View Website"),l.a.createElement("a",{href:e.codeLink,target:"_blank",rel:"noopener noreferrer",className:"project-link"},"View Code")),l.a.createElement("div",{className:"project-overlay"})))},B=(t(120),t(36)),z=t.n(B),J=t(37),R=t.n(J),W=t(38),G=t.n(W),K=t(39),Z=t.n(K),U=t(40),V=t.n(U),$=t(41),Q=t.n($);var X=function(){return l.a.createElement("div",{id:"project-section"},l.a.createElement("h1",{className:"main-heading"},"My Most Recent Work"),l.a.createElement("div",{className:"project-collection"},l.a.createElement(_,{title:"Get Er Done",image:z.a,altImage:"Get Er Done Project Homepage",liveLink:"https://kgilla.github.io/to-do-list/",codeLink:"https://github.com/kgilla/to-do-list"}),l.a.createElement(_,{title:"4-Cast",image:R.a,altImage:"4-Cast Project Homepage",liveLink:"https://kgilla.github.io/weather-app/",codeLink:"https://github.com/kgilla/weather-app"}),l.a.createElement(_,{title:"Plantarama",image:G.a,altImage:"Plantarama Project Homepage",liveLink:"https://plantarama.herokuapp.com/",codeLink:"https://github.com/kgilla/plant-app"}),l.a.createElement(_,{title:"Talkin' Trash",image:Z.a,altImage:"Talkin' Trash Project Homepage",liveLink:"https://talkin-trash.herokuapp.com/",codeLink:"https://github.com/kgilla/talkin-trash"}),l.a.createElement(_,{title:"Mastermind",image:V.a,altImage:"Mastermind Project Homepage",liveLink:"https://mastermind-sinatra.herokuapp.com/",codeLink:"https://github.com/kgilla/mastermind-webapp"}),l.a.createElement(_,{title:"Fly Away",image:Q.a,altImage:"Fly Away project homepage",liveLink:"https://fly-book.herokuapp.com/",codeLink:"https://github.com/kgilla/flight-booker"})))},q=(t(121),t(53)),Y=t.n(q);var ee=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"main-hero"},l.a.createElement("h1",{className:"main-heading"},"Full Stack Developer, UI/UX Designer "),l.a.createElement("h2",{className:"sub-heading"},"I create and code beautifully simple things and love what I do."),l.a.createElement("div",{className:"image-box"},l.a.createElement("img",{src:Y.a,alt:"Man typing on computer with a hot coffee and cat beside him"}))),l.a.createElement("div",{className:"colored-box"},l.a.createElement("div",{className:"colored-box-text-box"},l.a.createElement("h2",{className:"white-sub-heading"},"Hey there, I'm Kenneth. Thanks for stopping by!"),l.a.createElement("p",{className:"white-paragraph"},"I am a self-taught developer pivoting from a longtime career as a chef. My aim is to apply my passion for creativity, keen attention to detail, and hunger to learn more to help create new and exciting projects."))),l.a.createElement(H,null),l.a.createElement(X,null),l.a.createElement(O,null))};t(122);var ae=function(){var e=Object(n.useState)(""),a=Object(r.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(""),m=Object(r.a)(s,2),o=m[0],i=m[1],u=Object(n.useState)(""),E=Object(r.a)(u,2),h=E[0],g=E[1],f=Object(n.useState)(""),b=Object(r.a)(f,2),N=b[0],v=b[1],k=Object(n.useState)(""),j=Object(r.a)(k,2),y=j[0],O=j[1],x=Object(n.useState)(""),w=Object(r.a)(x,2),S=w[0],L=w[1],C=Object(n.useState)(""),I=Object(r.a)(C,2),P=I[0],D=I[1],A=function(){var e=Object(d.a)(p.a.mark((function e(a){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api-myblog.herokuapp.com/contacts/create",e.next=4,fetch("https://api-myblog.herokuapp.com/contacts/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,200===t.status?T(n):F(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}(),T=function(e){D(e.message),setTimeout((function(){D("")}),5e3),M()},F=function(e){console.log(e)},M=function(){c(""),g(""),O("")},H=function(e){var a=e.target,t=a.name,n=a.value;!function(e){"name"===e?i(""):"email"===e?v(""):L("")}(t),"name"===t?c(n):"email"===t?g(n):O(n)};return l.a.createElement("div",{className:"contact-section"},l.a.createElement("h1",{className:"main-heading"},"Contact Me"),l.a.createElement("h2",{className:"sub-heading"},"Drop me a line and lets have a chat!"),P?l.a.createElement("p",{className:"success"},P):null,l.a.createElement("form",{className:"form",id:"contact-form",onSubmit:function(e){e.preventDefault();var a={name:t,email:h,message:y};(function(e){var a=!1;return e.name.length<1&&(i("Please enter a name"),a=!0),e.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)||(v("Please enter a valid email"),a=!0),e.message.length<1&&(L("Please enter a message"),a=!0),a})(a)||A(a)}},l.a.createElement("div",{className:"text-inputs"},l.a.createElement("div",{className:"form-section"},l.a.createElement("label",{className:"label",htmlFor:"name"},"Name"),l.a.createElement("input",{className:o?"text-input-error":"text-input",type:"text",name:"name",value:t,onChange:H}),o?l.a.createElement("p",{className:"error"},o):null),l.a.createElement("div",{className:"contact-spacer"}),l.a.createElement("div",{className:"form-section"},l.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),l.a.createElement("input",{className:N?"text-input-error":"text-input",type:"text",name:"email",value:h,onChange:H}),N?l.a.createElement("p",{className:"error"},N):null)),l.a.createElement("div",{className:"form-section"},l.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:S?"textarea-error":"textarea",name:"message",value:y,onChange:H}),S?l.a.createElement("p",{className:"error"},S):null),l.a.createElement("div",{className:"form-section"},l.a.createElement("button",{className:"form-button"},"Submit"))))},te=t(54),ne=(t(123),function(e){return l.a.createElement("div",{className:"comment-container"},l.a.createElement("header",{className:"comment-header"},l.a.createElement("h3",{className:"comment-author"},e.comment.author)),l.a.createElement("main",{className:"comment-main"},l.a.createElement("p",{className:"comment-content"},e.comment.content)),l.a.createElement("footer",{className:"comment-footer"},l.a.createElement("h4",{className:"comment-date"},"Posted on ",f()(e.comment.date).format("LL"))))}),le=(t(124),function(e){var a=Object(n.useState)(""),t=Object(r.a)(a,2),c=t[0],s=t[1],m=Object(n.useState)(""),o=Object(r.a)(m,2),i=o[0],u=o[1],E=Object(n.useState)(""),h=Object(r.a)(E,2),g=h[0],f=h[1],b=Object(n.useState)(""),N=Object(r.a)(b,2),v=N[0],k=N[1],j=Object(n.useState)(""),y=Object(r.a)(j,2),O=y[0],x=y[1],w=function(){var e=Object(d.a)(p.a.mark((function e(a){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api-myblog.herokuapp.com/comments/create",e.next=3,fetch("https://api-myblog.herokuapp.com/comments/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,200===t.status?L(n.comment):S(n);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),S=function(e){console.log(e)},L=function(a){e.handleComment(a),x("Comment created successfully!"),setTimeout((function(){x("")}),5e3)},C=function(e){var a=e.target,t=a.name,n=a.value;!function(e){"author"===e?u(""):k("")}(t),"author"===t?s(n):f(n)},I=function(e){var a=!0;return e.author.length<1&&(u("Please enter a name"),a=!1),e.content.length<1&&(k("Please enter a comment"),a=!1),a},P=function(){var a=Object(d.a)(p.a.mark((function a(t){var n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),n={author:c,content:g,postID:e.postID},I(n)&&(w(n),s(""),f(""));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return l.a.createElement("div",{className:"comment-form-container"},l.a.createElement("form",{className:"form",id:"comment-form",onSubmit:P},l.a.createElement("h1",{className:"comment-form-heading"},"Leave A Comment"),O?l.a.createElement("p",{className:"success"},O):null,l.a.createElement("div",{className:"form-section"},l.a.createElement("label",{className:"label",htmlFor:"author"},"Name"),l.a.createElement("input",{className:i?"form-input-error":"form-input",type:"text",name:"author",value:c,onChange:C}),i?l.a.createElement("p",{className:"error"},i):null),l.a.createElement("div",{className:"form-section"},l.a.createElement("label",{className:"label",htmlFor:"content"},"Comment"),l.a.createElement("textarea",{className:v?"form-input-error":"form-input",name:"content",value:g,onChange:C}),v?l.a.createElement("p",{className:"error"},v):null),l.a.createElement("button",{className:"form-button"},"Submit")))}),ce=(t(125),function(e){var a=Object(n.useState)(e.comments),t=Object(r.a)(a,2),c=t[0],s=t[1];return l.a.createElement("div",{className:"comment-index-container"},l.a.createElement("h1",{className:"comment-index-heading"},"Comments (",c?c.length:"0",")"),c.length>0?l.a.createElement("div",{id:"comment-index"},c.map((function(e){return l.a.createElement(ne,{comment:e,key:e._id})}))):l.a.createElement("div",null,"No comments yet"),l.a.createElement(le,{postID:e.postID,handleComment:function(e){c.length<1?s([e]):s((function(a){return[].concat(Object(te.a)(a),[e])}))}}))}),se=(t(126),function(e){var a=Object(n.useState)({}),t=Object(r.a)(a,2),c=t[0],s=t[1],m=Object(n.useState)({}),o=Object(r.a)(m,2),i=o[0],u=o[1],E=Object(n.useState)([]),g=Object(r.a)(E,2),b=g[0],N=g[1],v=Object(n.useState)(!1),k=Object(r.a)(v,2),j=k[0],y=k[1];return Object(n.useEffect)((function(){(function(){var a=Object(d.a)(p.a.mark((function a(){var t,n,l;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return y(!0),t="https://api-myblog.herokuapp.com/posts/".concat(e.postId),a.next=4,fetch(t);case 4:return n=a.sent,a.next=7,n.json();case 7:l=a.sent,s(l.post),u(l.post.author),N(l.post.comments),y(!1);case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e.postId]),l.a.createElement(x,{isLoading:j},j?l.a.createElement(w,null):l.a.createElement("div",{className:"blog-post-container"},l.a.createElement("article",{className:"blog-post"},l.a.createElement("header",{className:"blog-post-header"},l.a.createElement("h1",{className:"blog-post-title"},c.title),l.a.createElement("div",{className:"blog-post-details-box"},l.a.createElement("h2",{className:"blog-post-author"},"By ",i.fullname),l.a.createElement("h4",{className:"blog-post-date"},"Posted on ",f()(c.date).format("LL")))),l.a.createElement("main",{className:"blog-post-content"},h()(c.content)),l.a.createElement("footer",null)),l.a.createElement("div",{className:"comment-section"},l.a.createElement(ce,{comments:b,postID:e.postId}))))});t(127),t(128);var re=function(){var e=Object(n.useState)(window.innerWidth),a=Object(r.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){c(window.innerWidth)}))}),[]),l.a.createElement("div",{className:"main"},l.a.createElement(i,{width:t}),l.a.createElement(m.b,null,l.a.createElement(ee,{path:"/"}),l.a.createElement(X,{path:"/projects"}),l.a.createElement(ae,{path:"contact"}),l.a.createElement(S,{path:"blog",width:t}),l.a.createElement(se,{path:"blog/:postId"})))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(re,null)),document.getElementById("root"))},36:function(e,a,t){e.exports=t.p+"static/media/1.d1ed303c.png"},37:function(e,a,t){e.exports=t.p+"static/media/4-cast-screenshot.b3802bef.png"},38:function(e,a,t){e.exports=t.p+"static/media/plantarama-screenshot.dd7e05d2.png"},39:function(e,a,t){e.exports=t.p+"static/media/talkin-trash-screenshot.c19a7794.png"},40:function(e,a,t){e.exports=t.p+"static/media/mastermind-screenshot.05702241.png"},41:function(e,a,t){e.exports=t.p+"static/media/flyaway-screenshot.c717070f.png"},52:function(e,a,t){e.exports=t.p+"static/media/me.f2566c09.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/cartoon-coder.e5b9b2a4.jpg"},56:function(e,a,t){e.exports=t(129)},66:function(e,a,t){},95:function(e,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.41fd4e64.chunk.js.map