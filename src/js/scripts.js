((d,w) => {

    //HELPER FUNCTIONS

    //add styles
    let setStyle = (element, propertyObject) => {
        for (property in propertyObject) {
            element.style[property] = propertyObject[property];
        }
    }

    //add class
    let addClass = elementAndClass => {
        let element = elementAndClass[0];
        let className = elementAndClass[1];
        element.classList.add(className);
    }

    //remove class
    let removeClass = elementAndClass => {
        let element = elementAndClass[0];
        let className = elementAndClass[1];
        element.classList.remove(className);
    }

    //HERO TRANSITIONS ON FIRST SCROLL

    //elements
    let wiper = d.getElementById("wiper");
    let preTitle = d.getElementById("preTitle");
    let mainTitle = d.getElementById("mainTitle");
    let intro = d.getElementById("intro");
    let scroll = d.getElementById("scroll");
    let navMain = d.getElementById("navMain");

    //desktop transition classes
    let desktopClasses = [
        [wiper, "wiper-move-right"],
        [preTitle, "pre-title-move-up"],
        [mainTitle, "main-title-move-right"],
        [scroll, "scroll-move-right"]
    ]

    //mobile transition classes
    let mobileClasses = [
        [wiper, "wiper-move-right-mobile"],
        [preTitle, "pre-title-fade"]
    ]

    //note that opacity transitions have been added by manipulating the style property on the element object (as opposed to adding a class)

    w.addEventListener("scroll", () => {

        if(w.pageYOffset > 0) {

            //desktop and mobile
            setStyle(intro, {
                "opacity": "1",
                "transition" : "opacity 1s 1s"
            });

            if (d.body.clientWidth > 768) {

                //desktop only
                // wiper.classList.add("wiper-move-right");
                // addClass( [wiper, "wiper-move-right"] );
                // preTitle.classList.add("pre-title-move-up");
                desktopClasses.forEach(addClass);
                // mainTitle.classList.add("main-title-move-right");
                // scroll.classList.add("scroll-move-right");
                
                setStyle(navMain, {
                    "opacity": "1",
                    "transition": "opacity 1s 2s"
                });

            } else {

                //mobile only
                // wiper.classList.add("wiper-move-right-mobile");
                // preTitle.classList.add("pre-title-fade");
                mobileClasses.forEach(addClass);

            }

        //reset at top of page
        } else {

            //desktop and mobile
            setStyle(intro, {
                "opacity": "0",
                "transition" : "opacity 1s"
            });

            if (d.body.clientWidth > 768) {

                //desktop only
                // wiper.classList.remove("wiper-move-right");
                // preTitle.classList.remove("pre-title-move-up");
                // mainTitle.classList.remove("main-title-move-right");
                // scroll.classList.remove("scroll-move-right");
                desktopClasses.forEach(removeClass);

                setStyle(navMain, {
                    "opacity": "0",
                    "transition": "opacity 1s"
                });

            } else {

                //mobile only
                // wiper.classList.remove("wiper-move-right-mobile");
                // preTitle.classList.remove("pre-title-fade");
                mobileClasses.forEach(removeClass);

            }

        }

    })
    
    //reset hero transitions on resize
    w.addEventListener("resize", () => {

        //desktop and mobile
        intro.style.opacity = "0";

        //deskop
        if (d.body.clientWidth > 768) {
            // wiper.classList.remove("wiper-move-right");
            // preTitle.classList.remove("pre-title-move-up");
            // mainTitle.classList.remove("main-title-move-right");
            // scroll.classList.remove("scroll-move-right");
            desktopClasses.forEach(removeClass);
            scroll.style.display = "inline-block"; //remove?

        //mobile
        } else {
            // wiper.classList.remove("wiper-move-right-mobile");
            // preTitle.classList.remove("pre-title-fade");
            mobileClasses.forEach(removeClass);
            scroll.style.display = "none"; //remove?
        }

    })
    
    //elements
    
    
    

    //sets css styling on elements


    //sets transition styling for hero elements
    let elastisize = elements => {
        elements.forEach(element => setStyle(element, {"transition-timing-function": "cubic-bezier(0.7, 0, 0.3, 1)"}));
    }

    //animation on first scroll
    w.addEventListener("scroll", () => {

        if(w.pageYOffset > 0) {

            //desktop
            if(d.body.clientWidth > 768) {

                // setStyle(wiper, {
                //     "width": "calc(100% - 2 * var(--border)",
                //     "transition": "width 1.10s",
                // });

                // setStyle(mainTitle, {
                //     "right": "calc(0.17 * var(--border))",
                //     "transition" : "right 1s"
                // });

                // setStyle(preTitle, {
                //     "top": "-10%",
                //     "transition" : "top 1s",
                // });

                // setStyle(scroll, {
                //     "right": "calc(0.8 * var(--border))",
                //     "transition" : "right 1s"
                // });

                // setStyle(navMain, {
                //     "opacity": "1",
                //     "transition": "opacity 1s 2s"
                // });
            
            //mobile
            } else {

                // setStyle(wiper, {
                //     "transform": "translateX(calc(50% - var(--border)))",
                //     "transition": "transform 1.10s"
                // });

                // setStyle(preTitle, {
                //     "opacity" : "0",
                //     "transition" : "opacity 1s"
                // });

            }

            //desktop and mobile            
            // setStyle(intro, {
            //     "opacity": "1",
            //     "transition" : "opacity 1s 1s"
            // });

            elastisize([]);

        } else {
            //reset
            // wiper.style.width = "";
            // wiper.style.transform = "";
            // mainTitle.style.right = "";
            // scroll.style.right = "";
            // preTitle.style.top = "";
            // preTitle.style.opacity = "";
            // intro.style.opacity = "";
            // intro.style.transition = "1s";
            // navMain.style.opacity = "";
            // navMain.style.transition = "1s";
        }

    })
    
    //MAINTITLE & INTRO PARALLAX SCROLLING (DESKTOP)

    //elements
    let header = d.getElementById("header");
    let hero = d.getElementById("hero");

    w.addEventListener("scroll", () => {
        
        if(d.body.clientWidth > 768 ) {

            //window pageYOffset point at which bottom of hero comes into viewport (adjusted for border height)
            let trigger = hero.scrollHeight - w.innerHeight + header.scrollHeight;

            //increase in window pageYOffset beyond trigger point, as a proportion of the window height
            let offset = (w.pageYOffset - trigger) / w.innerHeight;

            //amount by which to reduce the 'top' percentage. 0.77 slows for parallax effect
            let change = 50 - (offset * 100 * 0.77);

            if(w.pageYOffset > trigger) {
                
                mainTitle.style.top = `${change}%`;
                intro.style.top = `${change}%`;
                scroll.style.display = "none";

            } else {
                mainTitle.style.top = "";
                intro.style.top = "";
                scroll.style.display = "inline-block";
            }
        }
    })

    //reset mainTitle and intro on resize
    w.addEventListener("resize", () => {
        if (d.body.clientWidth > 768) {
            mainTitle.style.top = "50%";
        } else {
            mainTitle.style.top = "40%";
            intro.style.top = "80%";
        }
    })


// if (d.body.clientWidth < 768) {
    // mainTitle.style.top = "40%";
    // intro.style.top = "80%";
    // scroll.style.display = "none";
// } else {
    // wiper.style.transform = "";
    // mainTitle.style.top = "50%";
    // scroll.style.display = "inline-block"; 

    //scroll to top of page on reload
    w.onbeforeunload = () => {
        w.scrollTo(0, 0);
    }

    //smooth hero transition on mobile
    // w.addEventListener("touchmove", () => {
    //     if(w.pageYOffset > 0) {
    //         setStyle(wiper, {
    //             "transform": "translateX(calc(50% - var(--border)))",
    //             "transition": "transform 1.10s"
    //         });
    //     } else {
    //         wiper.style.transform = "";
    //     }
    // })



    //NAV TOGGLE (MOBILE)

    //elements
    let hamburger = d.getElementById("hamburger");

    let navHidden = true;

    let toggleNav = e => {
        e.preventDefault();
        if(navHidden) {
            navMain.classList.add("nav-toggled");
            navMain.classList.remove("nav-hide");
        } else {
            navMain.classList.remove("nav-toggled");
            navMain.classList.add("nav-hide");
        }
        navHidden = !navHidden;
    }

    hamburger.addEventListener("click", toggleNav);
    hamburger.addEventListener("touchstart", toggleNav);

    navMain.addEventListener("click", e => {
        let clicked = e.target;
        if(clicked.matches("a")) {
            navMain.classList.add("nav-hide");
        }
        navHidden = !navHidden;
    })

    w.addEventListener("resize", () => {
        if(!navHidden) {
            navMain.classList.remove("nav-toggled");
            navMain.classList.add("nav-hide");
        };
        navHidden = !navHidden;
    })

})(document, window);