((d,w) => {

    console.log("hey haz javascript is working");

    let wiper = d.getElementById("wiper");

    w.addEventListener("scroll", () => {

        if(window.pageYOffset > 0) {
            wiper.style.width = "100%";
            wiper.style.transition = "1.5s"; //can we combine the transitions?
        } else {
            wiper.style.width = "50%";
            wiper.style.transition = "1.5s";
        }

    })

})(document, window);