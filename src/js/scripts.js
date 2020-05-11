((d,w) => {

    console.log("hey haz javascript is working");

    let header = d.getElementById("header");
    let hero = d.getElementById("hero");
    let wiper = d.getElementById("wiper");
    let preTitle = d.getElementById("preTitle");
    let mainTitle = d.getElementById("mainTitle");
    let intro = d.getElementById("intro");
    let scroll = d.getElementById("scroll");
    let navMain = d.getElementById("navMain");

    let setStyle = (element, propertyObject) => {
        for (property in propertyObject) {
            element.style[property] = propertyObject[property];
        }
    }

    let elastisize = (elements) => {
        elements.forEach(element => setStyle(element, {"transition-timing-function": "cubic-bezier(0.7, 0, 0.3, 1)"}));
    }

    w.addEventListener("scroll", () => {

        if(w.pageYOffset > 0) {

            if(screen.width > 768) {

                setStyle(wiper, {
                    "width": "calc(100% - 2 * var(--border)",
                    "transition": "width 1.10s",
                });

            } else {

                setStyle(wiper, {
                    "width": "calc(100% - var(--border)",
                    "transition": "width 1.10s",
                });

            }

            setStyle(preTitle, {
                "top": "-5%",
                "transition" : "top 1s",
            });

            setStyle(mainTitle, {
                "right": "calc(0.17 * var(--border))",
                "transition" : "right 1s"
            });

            setStyle(navMain, {
                "opacity": "1",
                "transition": "opacity 1s 2s"
            });
            
            setStyle(intro, {
                "opacity": "1",
                "transition" : "opacity 1s 1s"
            });

            setStyle(scroll, {
                "right": "calc(0.8 * var(--border))",
                "transition" : "right 1s"
            });

            elastisize([wiper, mainTitle, preTitle, scroll]);

        } else {
            wiper.style.width = "";
            mainTitle.style.right = "";
            scroll.style.right = "";
            preTitle.style.top = "";
            intro.style.opacity = "";
            intro.style.transition = "1s";
            navMain.style.opacity = "";
            navMain.style.transition = "1s";
        }

    })
    
    w.addEventListener("scroll", () => {
        //window pageYOffset point at which bottom of hero comes into viewport (adjusted for border height)
        let trigger = hero.scrollHeight - w.innerHeight + header.scrollHeight;
        //increase in window pageYOffset beyond trigger point, as a proportion of the window height
        let offset = (w.pageYOffset - trigger) / w.innerHeight;
        //amount by which to reduce the top percentage. 0.75 slows for parallax effect
        let change = 50 - (offset * 100 * 0.75);

        if(w.pageYOffset > trigger) {
            mainTitle.style.top = `${change}%`;

            intro.style.top = `${change}%`;

            scroll.style.display = "none";

        } else {
            mainTitle.style.top = "";
            intro.style.top = "";
            scroll.style.display = "inline-block";
        }
    })

    //scroll to top of page on reload
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    }

})(document, window);