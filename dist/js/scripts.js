((i,t)=>{console.log("hey haz javascript is working");let e=i.getElementById("wiper"),n=i.getElementById("mainTitle");t.addEventListener("scroll",()=>{window.pageYOffset>0?(e.style.width="calc(100% - 2 * var(--border)",e.style.transition="1.05s",e.style.transitionTimingFunction="cubic-bezier(0.7, 0, 0.3, 1)",n.style.right="2.8%",n.style.transition="1s",n.style.transitionTimingFunction="cubic-bezier(0.7, 0, 0.3, 1)"):(e.style.width="calc(50% - var(--border)",e.style.transition="1.05s",e.style.transitionTimingFunction="cubic-bezier(0.7, 0, 0.3, 1)",n.style.right="50%",n.style.transition="1s",n.style.transitionTimingFunction="cubic-bezier(0.7, 0, 0.3, 1)")})})(document,window);