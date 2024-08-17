
// Scroll to the second page when the "NEXT" button is clicked
document.querySelector('.page1-button').addEventListener('click', function() {
    document.querySelector('.section-two').scrollIntoView({ behavior: 'smooth' });
});

// Scroll to the third page when the "NEXT" button is clicked
document.querySelector('.page2-button').addEventListener('click', function() {
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
});

// Scroll to the top page when the "TOP" button is clicked
document.querySelector('.page3-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
