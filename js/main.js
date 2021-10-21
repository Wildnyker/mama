// Sticky menu background - clan JS
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.8;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});





// Smooth Scrolling (from Jquery) - targeting all a's in #navbar
// on event 'click' we start function()
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800 // speed of scroll can be changed
        );
    }
});