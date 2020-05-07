((d,w) => {

    console.log("hey haz javascript is working");

    let wiper = d.getElementById("wiper");
    let mainTitle = d.getElementById("mainTitle");

    w.addEventListener("scroll", () => {

        if(window.pageYOffset > 0) {
            wiper.style.width = "calc(100% - 2 * var(--border)";
            wiper.style.transition = "1.5s"; //can we combine the transitions?

            mainTitle.style.right = "2.7%";
            mainTitle.style.transition = "1.5s";
        } else {
            wiper.style.width = "calc(50% - var(--border)";
            wiper.style.transition = "1.5s";

            mainTitle.style.right = "50%";
            mainTitle.style.transition = "50%";
        }

    })

})(document, window);