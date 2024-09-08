document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navBar = document.querySelector('.nav-bar');

    const toggleNavBar = () => {
        if (window.innerWidth <= 768) {
            navBar.classList.add('active');
        } else {
            navBar.classList.remove('active');
        }
    };

    // Initialize on page load
    toggleNavBar();

    // Add event listener for hamburger menu
    hamburgerMenu.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    // Navigation and button functionality
    document.querySelector("#tickets").addEventListener("click", function() {
        document.querySelector(".section-two").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector("#rockets").addEventListener("click", function() {
        document.querySelector(".section-two").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector("#pricing").addEventListener("click", function() {
        document.querySelector(".section-three").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector(".page1-button").addEventListener("click", function() {
        document.querySelector(".section-two").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector(".page2-button").addEventListener("click", function() {
        document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector(".page3-button").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "auto" });
    });

    document.addEventListener("click", function() {
        let audio = document.querySelector(".background-music");
        if (audio.paused) { audio.play(); }
    });

    // Add event listener for window resize
    window.addEventListener('resize', () => {
        toggleNavBar();
    });
});
