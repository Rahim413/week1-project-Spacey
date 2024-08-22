
                    //For Navigation Bar 
// To go to the second page when user clicked in tickets at nav bar 
document.querySelector("#tickets").addEventListener("click", function() {
    document.querySelector(".section-two").scrollIntoView({ behavior: "smooth"});});

// To go to the second page when user clicked in rockets at nav bar 
document.querySelector("#rockets").addEventListener("click", function() {
    document.querySelector(".section-two").scrollIntoView({ behavior: "smooth"});});

// To go to the second page when user clicked in pricing at nav bar 
document.querySelector("#pricing").addEventListener("click", function() {
    document.querySelector(".section-three").scrollIntoView({ behavior: "smooth"});});


                //For Pages Button
// To scroll to the second page when the (NEXT) button is clicked
document.querySelector(".page1-button").addEventListener("click", function() {
    document.querySelector(".section-two").scrollIntoView({ behavior: "smooth"})});

// To scroll to the third page when the (NEXT) button is clicked
document.querySelector(".page2-button").addEventListener("click", function() {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });});

// TO scroll to the top page when the (TOP) button is clicked
document.querySelector(".page3-button").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "auto"});});

            //For Background Music
// To paly backgroung music when user clicked on the page
// document.addEventListener("click", function() {
//         let audio = document.querySelector(".background-music");
//         if (audio.paused) { audio.play(); }});
