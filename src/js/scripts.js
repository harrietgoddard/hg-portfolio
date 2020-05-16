((d,w) => {

    //elements
    let header = d.getElementById("header");
    let hero = d.getElementById("hero");
    let wiper = d.getElementById("wiper");
    let preTitle = d.getElementById("preTitle");
    let mainTitle = d.getElementById("mainTitle");
    let intro = d.getElementById("intro");
    let scroll = d.getElementById("scroll");
    let navMain = d.getElementById("navMain");

    //sets css styling on elements
    let setStyle = (element, propertyObject) => {
        for (property in propertyObject) {
            element.style[property] = propertyObject[property];
        }
    }

    //sets transition styling for hero elements
    let elastisize = elements => {
        elements.forEach(element => setStyle(element, {"transition-timing-function": "cubic-bezier(0.7, 0, 0.3, 1)"}));
    }

    //animation on first scroll
    w.addEventListener("scroll", () => {

        if(w.pageYOffset > 0) {

            //desktop
            if(d.body.clientWidth > 768) {

                setStyle(wiper, {
                    "width": "calc(100% - 2 * var(--border)",
                    "transition": "width 1.10s",
                });

                setStyle(mainTitle, {
                    "right": "calc(0.17 * var(--border))",
                    "transition" : "right 1s"
                });

                setStyle(preTitle, {
                    "top": "-10%",
                    "transition" : "top 1s",
                });

                setStyle(scroll, {
                    "right": "calc(0.8 * var(--border))",
                    "transition" : "right 1s"
                });

                setStyle(navMain, {
                    "opacity": "1",
                    "transition": "opacity 1s 2s"
                });
            
            //mobile
            } else {

                setStyle(wiper, {
                    "transform": "translateX(calc(50% - var(--border)))",
                    "transition": "transform 1.10s"
                });

                setStyle(preTitle, {
                    "opacity" : "0",
                    "transition" : "opacity 1s"
                });

            }

            //desktop and mobile            
            setStyle(intro, {
                "opacity": "1",
                "transition" : "opacity 1s 1s"
            });

            elastisize([wiper, mainTitle, preTitle, scroll]);

        } else {
            //reset
            wiper.style.width = "";
            wiper.style.transform = "";
            mainTitle.style.right = "";
            scroll.style.right = "";
            preTitle.style.top = "";
            preTitle.style.opacity = "";
            intro.style.opacity = "";
            intro.style.transition = "1s";
            navMain.style.opacity = "";
            navMain.style.transition = "1s";
        }

    })
    
    //mainTitle and intro parallax scrolling (on desktop)
    w.addEventListener("scroll", () => {
        
        if(d.body.clientWidth > 768 ) {
            //window pageYOffset point at which bottom of hero comes into viewport (adjusted for border height)
            let trigger = screen.width > 768 ? hero.scrollHeight - w.innerHeight + header.scrollHeight : hero.scrollHeight - w.innerHeight;
            //increase in window pageYOffset beyond trigger point, as a proportion of the window height
            let offset = (w.pageYOffset - trigger) / w.innerHeight;
            //amount by which to reduce the top percentage. 0.75 slows for parallax effect
            let change = screen.width > 768 ? 50 - (offset * 100 * 0.77) : 50 - (offset * 100);
            let introChange = screen.width > 768 ? 50 - (offset * 100 * 0.77) : 80 - (offset * 100);
            // let introChange = screen.width > 768 ? change : 50 + change;

            if(w.pageYOffset > trigger) {
                
                // if (screen.width > 768) {
                    mainTitle.style.top = `${change}%`;
                    intro.style.top = `${introChange}%`;
                // }

                scroll.style.display = "none";

            } else {
                mainTitle.style.top = "";
                intro.style.top = "";
                scroll.style.display = "inline-block";
            }
        }
    })

    w.addEventListener("resize", () => {
        if (d.body.clientWidth < 768) {
            scroll.style.display = "none";
        }
    })

    //scroll to top of page on reload
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    }

    w.addEventListener("touchmove", () => {
        if(w.pageYOffset > 0) {
            setStyle(wiper, {
                "transform": "translateX(calc(50% - var(--border)))",
                "transition": "transform 1.10s"
            });
        } else {
            wiper.style.transform = "";
        }
    })

})(document, window);