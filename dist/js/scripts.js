((t,e)=>{let s=t.getElementById("header"),i=t.getElementById("hero"),n=t.getElementById("wiper"),r=t.getElementById("preTitle"),a=t.getElementById("mainTitle"),l=t.getElementById("intro"),o=t.getElementById("scroll"),d=t.getElementById("navMain"),y=t.getElementById("hamburger"),c=(t,e)=>{for(property in e)t.style[property]=e[property]};e.addEventListener("scroll",()=>{e.pageYOffset>0?(t.body.clientWidth>768?(c(n,{width:"calc(100% - 2 * var(--border)",transition:"width 1.10s"}),c(a,{right:"calc(0.17 * var(--border))",transition:"right 1s"}),c(r,{top:"-10%",transition:"top 1s"}),c(o,{right:"calc(0.8 * var(--border))",transition:"right 1s"}),c(d,{opacity:"1",transition:"opacity 1s 2s"})):(c(n,{transform:"translateX(calc(50% - var(--border)))",transition:"transform 1.10s"}),c(r,{opacity:"0",transition:"opacity 1s"})),c(l,{opacity:"1",transition:"opacity 1s 1s"}),[n,a,r,o].forEach(t=>c(t,{"transition-timing-function":"cubic-bezier(0.7, 0, 0.3, 1)"}))):(n.style.width="",n.style.transform="",a.style.right="",o.style.right="",r.style.top="",r.style.opacity="",l.style.opacity="",l.style.transition="1s",d.style.opacity="",d.style.transition="1s")}),e.addEventListener("scroll",()=>{if(t.body.clientWidth>768){let t=i.scrollHeight-e.innerHeight+s.scrollHeight,n=50-100*((e.pageYOffset-t)/e.innerHeight)*.77;e.pageYOffset>t?(a.style.top=n+"%",l.style.top=n+"%",o.style.display="none"):(a.style.top="",l.style.top="",o.style.display="inline-block")}}),e.addEventListener("resize",()=>{t.body.clientWidth<768?(a.style.top="40%",l.style.top="80%",o.style.display="none"):(n.style.transform="",a.style.top="50%",o.style.display="inline-block")}),e.onbeforeunload=()=>{e.scrollTo(0,0)},e.addEventListener("touchmove",()=>{e.pageYOffset>0?c(n,{transform:"translateX(calc(50% - var(--border)))",transition:"transform 1.10s"}):n.style.transform=""});let p=!0,g=t=>{t.preventDefault(),p?(d.classList.add("nav-toggled"),d.classList.remove("nav-hide")):(d.classList.remove("nav-toggled"),d.classList.add("nav-hide")),p=!p};y.addEventListener("click",g),y.addEventListener("touchstart",g),d.addEventListener("click",t=>{t.target.matches("a")&&d.classList.add("nav-hide"),p=!p}),e.addEventListener("resize",()=>{p||(d.classList.remove("nav-toggled"),d.classList.add("nav-hide")),p=!p})})(document,window);