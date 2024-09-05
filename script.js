document.addEventListener("scroll", function () {
    const parallaxElements = document.querySelectorAll(".parallax-bg");
    parallaxElements.forEach(element => {
        let scrolled = window.pageYOffset;
        let rate = scrolled * 0.3; // Reduce the rate to make the movement more subtle
        element.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    });
});
