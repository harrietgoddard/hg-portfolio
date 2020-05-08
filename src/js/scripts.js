((d,w) => {

    console.log("hey haz javascript is working");

    let wiper = d.getElementById("wiper");
    let mainTitle = d.getElementById("mainTitle");

    w.addEventListener("scroll", () => {

        if(window.pageYOffset > 0) {
            wiper.style.width = "calc(100% - 2 * var(--border)";
            wiper.style.transition = "1.05s"; //can we combine the transitions?
            wiper.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            mainTitle.style.right = "calc(0.17 * var(--border))";
            mainTitle.style.transition = "1s"; //better to put this in css?
            mainTitle.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";
        } else {
            wiper.style.width = "calc(50% - var(--border)";
            wiper.style.transition = "1.05s";
            wiper.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";

            mainTitle.style.right = "50%";
            mainTitle.style.transition = "1s";
            mainTitle.style.transitionTimingFunction = "cubic-bezier(0.7, 0, 0.3, 1)";
        }

    })

})(document, window);