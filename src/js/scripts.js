((d,w) => {

    //HELPER FUNCTIONS -----------------------------------------------------------------------

    //sets styles
    let setStyle = (element, propertyObject) => {
        for (property in propertyObject) {
            element.style[property] = propertyObject[property];
        }
    }

    //adds a class
    let addClass = elementAndClass => {
        let element = elementAndClass[0];
        let className = elementAndClass[1];
        element.classList.add(className);
    }

    //removes a class
    let removeClass = elementAndClass => {
        let element = elementAndClass[0];
        let className = elementAndClass[1];
        element.classList.remove(className);
    }

    //HERO TRANSITIONS ON FIRST SCROLL -------------------------------------------------------

    //elements
    let wiper = d.getElementById("wiper");
    let preTitle = d.getElementById("preTitle");
    let mainTitle = d.getElementById("mainTitle");
    let intro = d.getElementById("intro");
    let scroll = d.getElementById("scroll");
    let navMain = d.getElementById("navMain");

    //desktop transition classes to be added on first scroll
    let desktopClasses = [
        [wiper, "wiper-move-right"],
        [preTitle, "pre-title-move-up"],
        [mainTitle, "main-title-move-right"],
        [scroll, "scroll-move-right"]
    ]

    //mobile transition classes to be added on first scroll
    let mobileClasses = [
        [wiper, "wiper-move-right-mobile"],
        [preTitle, "pre-title-fade"]
    ]

    //note in the event listener below that opacity transitions have been added by manipulating the style property on the element object (rather than adding a class)

    w.addEventListener("scroll", () => {

        if(w.pageYOffset > 0) {

            //both desktop and mobile
            setStyle(intro, {
                "opacity": "1",
                "transition" : "opacity 1s 1s"
            });

            if (d.body.clientWidth > 768) {

                //desktop only
                desktopClasses.forEach(addClass);
                setStyle(navMain, {
                    "opacity": "1",
                    "transition": "opacity 1s 2s"
                });

            } else {

                //mobile only
                mobileClasses.forEach(addClass);

            }

        //reset all transition classes/styles at top of page
        } else {

            //both desktop and mobile
            setStyle(intro, {
                "opacity": "0",
                "transition" : "opacity 1s"
            });

            if (d.body.clientWidth > 768) {

                //desktop only
                desktopClasses.forEach(removeClass);
                setStyle(navMain, {
                    "opacity": "0",
                    "transition": "opacity 1s"
                });

            } else {

                //mobile only
                mobileClasses.forEach(removeClass);

            }

        }

    })
    
    //reset hero transition classes/styles on resize
    w.addEventListener("resize", () => {

        //both desktop and mobile
        intro.style.opacity = "0";

        //deskop
        if (d.body.clientWidth > 768) {
            desktopClasses.forEach(removeClass);
            scroll.style.display = "inline-block";

        //mobile
        } else {
            mobileClasses.forEach(removeClass);
            scroll.style.display = "none";
        }

    })
    
    
    //MAINTITLE & INTRO PARALLAX SCROLLING (DESKTOP) ---------------------------------------

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


    //SCROLL TO TOP OF PAGE ON RELOAD -----------------------------------------------------

    w.onbeforeunload = () => {
        w.scrollTo(0, 0);
    }


    //NAV TOGGLE (MOBILE) -----------------------------------------------------------------

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