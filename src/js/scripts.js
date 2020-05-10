((d,w) => {

    console.log("hey haz javascript is working");

    let wiper = d.getElementById("wiper");
    let mainTitle = d.getElementById("mainTitle");
    let preTitle = d.getElementById("preTitle");
    let intro = d.getElementById("intro");
    let scroll = d.getElementById("scroll");
    let hero = d.getElementById("hero");
    let header = d.getElementById("header");

    w.addEventListener("scroll", () => {

        if(w.pageYOffset > 0) {
            wiper.style.width = "calc(100% - 2 * var(--border)";
            wiper.style.transition = "1.10s"; //can we combine the transitions?
            wiper.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            mainTitle.style.right = "calc(0.17 * var(--border))";
            mainTitle.style.transition = "1s"; //better to put this in css?
            mainTitle.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            scroll.style.right = "calc(0.8 * var(--border))";
            scroll.style.transition = "1s";
            scroll.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            preTitle.style.top = "-5%";
            preTitle.style.transition = "1s";
            preTitle.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            intro.style.opacity = "1";
            intro.style.transition = "1.5s";
            intro.style.transitionDelay = "1s";

        } else {
            wiper.style.width = "calc(50% - var(--border)";
            wiper.style.transition = "1.10s";
            wiper.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            mainTitle.style.right = "50%";
            mainTitle.style.transition = "1s";
            mainTitle.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            scroll.style.right = "49%";
            scroll.style.transition = "1s";
            scroll.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            preTitle.style.top = "16%";
            preTitle.style.transition = "1s";
            preTitle.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            intro.style.opacity = "0";
            intro.style.transition = "1s";
        }

    })
    
    w.addEventListener("scroll", () => {
        let trigger = hero.scrollHeight + (header.scrollHeight * 2) - w.innerHeight;
        console.log(w.pageYOffset);
        console.log(trigger);
        let offset = (w.pageYOffset - trigger) / w.innerHeight;
        let change = 50 - (+offset * 100);
        if(w.pageYOffset > trigger) {
            mainTitle.style.top = `${change}%`;
            mainTitle.style.transition = "top 0s linear";

            intro.style.top = `${change}%`;
            intro.style.transition = "top 0s linear";

            scroll.style.display = "none";
        } else if (w.pageYOffset > w.innerHeight) {
            mainTitle.style.top = "50%";
            mainTitle.style.transition = "top 0s linear";

            intro.style.top = "50%";
            intro.style.transition = "top 0s linear";

            scroll.style.display = "inline-block";
        }
    })

})(document, window);