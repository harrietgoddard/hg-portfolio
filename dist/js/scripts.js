((e,t)=>{let i=(e,t)=>{for(property in t)e.style[property]=t[property]},l=e=>{let t=e[0],i=e[1];t.classList.add(i)},s=e=>{let t=e[0],i=e[1];t.classList.remove(i)},a=e.getElementById("wiper"),n=e.getElementById("preTitle"),o=e.getElementById("mainTitle"),d=e.getElementById("intro"),r=e.getElementById("scroll"),c=e.getElementById("navMain"),y=[[a,"wiper-move-right"],[n,"pre-title-move-up"],[o,"main-title-move-right"],[r,"scroll-move-right"]],p=[[a,"wiper-move-right-mobile"],[n,"pre-title-fade"]];t.addEventListener("scroll",()=>{t.pageYOffset>0?(i(d,{opacity:"1",transition:"opacity 1s 1s"}),e.body.clientWidth>768?(y.forEach(l),i(c,{opacity:"1",transition:"opacity 1s 2s"})):p.forEach(l)):(i(d,{opacity:"0",transition:"opacity 1s"}),e.body.clientWidth>768?(y.forEach(s),i(c,{opacity:"0",transition:"opacity 1s"})):p.forEach(s))}),t.addEventListener("resize",()=>{d.style.opacity="0",e.body.clientWidth>768?(y.forEach(s),r.style.display="inline-block"):(p.forEach(s),r.style.display="none")});let g=e.getElementById("header"),h=e.getElementById("hero");t.addEventListener("scroll",()=>{if(e.body.clientWidth>768){let e=h.scrollHeight-t.innerHeight+g.scrollHeight,i=50-100*((t.pageYOffset-e)/t.innerHeight)*.77;t.pageYOffset>e?(o.style.top=i+"%",d.style.top=i+"%",r.style.display="none"):(o.style.top="",d.style.top="",r.style.display="inline-block")}}),t.addEventListener("resize",()=>{e.body.clientWidth>768?o.style.top="50%":(o.style.top="40%",d.style.top="80%")}),t.onbeforeunload=()=>{t.scrollTo(0,0)};let v=e.getElementById("hamburger"),m=!0,E=e=>{e.preventDefault(),m?(c.classList.add("nav-toggled"),c.classList.remove("nav-hide")):(c.classList.remove("nav-toggled"),c.classList.add("nav-hide")),m=!m};v.addEventListener("click",E),v.addEventListener("touchstart",E),c.addEventListener("click",e=>{e.target.matches("a")&&c.classList.add("nav-hide"),m=!m}),t.addEventListener("resize",()=>{m||(c.classList.remove("nav-toggled"),c.classList.add("nav-hide")),m=!m})})(document,window);