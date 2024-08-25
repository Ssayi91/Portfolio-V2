document.addEventListener("scroll", function () {
    const parallaxElements = document.querySelectorAll(".parallax-bg");
    parallaxElements.forEach(element => {
        let scrolled = window.pageYOffset;
        let rate = scrolled * 0.5; // Adjust the rate to your liking
        element.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.projects-gallery div');

    projects.forEach(project => {
        project.addEventListener('click', function () {
            // Replace with actual project view logic, like opening a modal or redirecting to the project page
            alert('Project clicked: ' + this.innerText);
        });
    });
});
