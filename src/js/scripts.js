((d,w) => {

    console.log("hey haz javascript is working");

    let wiper = d.getElementById("wiper");
    let mainTitle = d.getElementById("mainTitle");
    let preTitle = d.getElementById("preTitle");
    let intro = d.getElementById("intro");

    w.addEventListener("scroll", () => {

        if(window.pageYOffset > 0) {
            wiper.style.width = "calc(100% - 2 * var(--border)";
            wiper.style.transition = "1.05s"; //can we combine the transitions?
            wiper.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            mainTitle.style.right = "calc(0.17 * var(--border))";
            mainTitle.style.transition = "1s"; //better to put this in css?
            mainTitle.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            preTitle.style.top = "-5%";
            preTitle.style.transition = "1s";
            preTitle.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            intro.style.opacity = "1";
            intro.style.transition = "1.5s";
            intro.style.transitionDelay = "0.5s";
        } else {
            wiper.style.width = "calc(50% - var(--border)";
            wiper.style.transition = "1.05s";
            wiper.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            mainTitle.style.right = "50%";
            mainTitle.style.transition = "1s";
            mainTitle.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            preTitle.style.top = "16%";
            preTitle.style.transition = "1s";
            preTitle.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            intro.style.opacity = "0";
            intro.style.transition = "1s";
        }

    })

})(document, window);