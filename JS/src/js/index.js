__webpack_require__.r(__webpack_exports__);
/* harmony import */
var _node_modules_tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../node_modules/tiny-slider/dist/tiny-slider.css */ "./node_modules/tiny-slider/dist/tiny-slider.css");
/* harmony import */
var _css_animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../css/animate.css */ "./src/css/animate.css");
/* harmony import */
var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../css/style.css */ "./src/css/style.css");
/* harmony import */
var _js_typewriter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../js/typewriter */ "./src/js/typewriter.js");
/* harmony import */
var _js_typewriter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_js_typewriter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */
var tiny_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! tiny-slider */ "./node_modules/tiny-slider/dist/tiny-slider.js");
/* harmony import */
var isotope_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */
var isotope_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */
var wowjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! wowjs */ "./node_modules/wowjs/dist/wow.js");
/* harmony import */
var wowjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(wowjs__WEBPACK_IMPORTED_MODULE_6__);







window.wow = new(wowjs__WEBPACK_IMPORTED_MODULE_6___default().WOW)({
    live: false
});
window.wow.init({
    offset: 50
}); //========= testimonial

var testimonial = document.querySelectorAll('.testimonial-active');

if (testimonial.length) {
    (0, tiny_slider__WEBPACK_IMPORTED_MODULE_4__.tns)({
        container: '.testimonial-active',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        gutter: 0,
        nav: false,
        controlsText: ["<svg\n        width=\"20\"\n        height=\"20\"\n        viewBox=\"0 0 20 20\"\n        class=\"if\"\n      >\n        <path\n          d=\"M6.52329 10.8331L10.9933 15.3031L9.81496 16.4814L3.3333 9.99978L9.81496 3.51811L10.9933 4.69645L6.52329 9.16645L16.6666 9.16645L16.6666 10.8331L6.52329 10.8331Z\"\n          \n        />\n      </svg>", "<svg\n        width=\"20\"\n        height=\"20\"\n        viewBox=\"0 0 20 20\"\n        class=\"if\"\n      >\n        <path\n          d=\"M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z\"\n          \n        />\n      </svg>"]
    });
} //============== isotope masonry js


var elem = document.querySelector('.portfolio-grid');
var iso = new(isotope_layout__WEBPACK_IMPORTED_MODULE_5___default())(elem, {
    // options
    itemSelector: '.grid-item',
    masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
    }
});
var filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
filterButtons.forEach(function(e) {
    return e.addEventListener('click', function() {
        var filterValue = event.target.getAttribute('data-filter');
        iso.arrange({
            filter: filterValue
        });
    });
}); //======= portfolio-btn active

var elements = document.querySelectorAll('.portfolio-btn-wrapper button');

for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function() {
        // remove class from sibling
        var el = elements[0];

        while (el) {
            if (el.tagName === 'BUTTON') {
                //remove class
                el.classList.remove('active');
            } // pass to the new sibling


            el = el.nextSibling;
        }

        this.classList.add('active');
    };
}

(function() {
    'use strict'; // ======= Sticky

    window.onscroll = function() {
        var ud_header = document.querySelector('.header');
        var sticky = ud_header.offsetTop;

        if (window.pageYOffset > sticky) {
            ud_header.classList.add('sticky');
        } else {
            ud_header.classList.remove('sticky');
        } // show or hide the back-top-top button


        var backToTop = document.querySelector('.back-to-top');

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    }; // Mobile Menu


    var menuToggler = document.querySelector('.menu-toggler');
    var menuWrapper = document.querySelector('.menu-wrapper');
    menuToggler.addEventListener('click', function() {
        menuWrapper.classList.toggle('show');
        document.body.classList.toggle('be');
        menuToggler.querySelector('.cross').classList.toggle('jb');
        menuToggler.querySelector('.menu').classList.toggle('jb');
    }); //===== close navbar-collapse when a  clicked

    document.querySelectorAll('.navbar li:not(.submenu-item) a').forEach(function(e) {
        return e.addEventListener('click', function() {
            menuWrapper.classList.toggle('show');
            document.body.classList.toggle('be');
            menuToggler.querySelector('.cross').classList.toggle('jb');
            menuToggler.querySelector('.menu').classList.toggle('jb');
        });
    }); // ===== Sub-menu

    var submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(function(el) {
        el.querySelector('a').addEventListener('click', function() {
            el.querySelector('a').classList.toggle('active');
            el.querySelector('.submenu').classList.toggle('jb');
        });
    }); // ====== scroll top js

    function scrollTo(element) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
        var start = element.scrollTop;
        var change = to - start;
        var increment = 20;
        var currentTime = 0;

        var animateScroll = function animateScroll() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;

            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };

        animateScroll();
    }

    Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    document.querySelector('.back-to-top').onclick = function() {
        scrollTo(document.documentElement);
    };
})(); // Document Loaded


document.addEventListener('DOMContentLoaded', function() {
    // ==== darkToggler
    var darkTogglerCheckbox = document.querySelector('#darkToggler');
    var html = document.querySelector('html');

    var darkModeToggler = function darkModeToggler() {
        darkTogglerCheckbox.checked ? html.classList.remove('a') : html.classList.add('a');
    };

    darkModeToggler();
    darkTogglerCheckbox.addEventListener('click', darkModeToggler);
});

//# sourceURL=webpack://go-tailwind/./src/js/index.js?