/* Template Name: Juora - Tailwind CSS Minimal Page Template
   Author: Zoyothemes
   Email: zoyothemes@gmail.com
   Website: https://www.zoyothemes.com/
   Version: 1.0.0
   File Description: Main JS file of the template
*/

// Sticky Navbar
function windowScroll() {
    const navbar = document.getElementById("topnav");
    if (navbar) {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            navbar.classList.add("is-sticky");

        } else {
            navbar.classList.remove("is-sticky");
        }
    }
}
window.addEventListener("scroll", (ev) => {
    ev.preventDefault();
    windowScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    var pageUrl = window.location.href.split(/[?#]/)[0];
    var navLinks = document.querySelectorAll('#mobileMenu .menu-item a');

    navLinks.forEach(function (link) {
        if (link.href === pageUrl) {
            link.classList.add('active');
            // If you want to add the "active" class to the parent li element, use:
            // link.closest('.menu-item').classList.add('active');
        }
    });
});

// Smooth scroll
try {
    var scroll = new SmoothScroll(".navbar-navlist a", {
      speed: 800,
      offset: 80,
    });
} catch (error) {}

// Back To Top Start   
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.classList.add("opacity-100");
            mybutton.classList.remove("opacity-0");
        } else {
            mybutton.classList.add("opacity-0");
            mybutton.classList.remove("opacity-100");
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
