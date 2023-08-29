function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}

// ES6 Class
var TypeWriter = /*#__PURE__*/ function() {
    function TypeWriter(txtElement, words) {
        var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;

        _classCallCheck(this, TypeWriter);

        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    _createClass(TypeWriter, [{
        key: "type",
        value: function type() {
            var _this = this;

            // Current index of word
            var current = this.wordIndex % this.words.length; // Get full text of current word

            var fullTxt = this.words[current]; // Check if deleting

            if (this.isDeleting) {
                // Remove char
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                // Add char
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            } // Insert txt into element


            this.txtElement.innerHTML = "<span class=\"txt\">".concat(this.txt, "</span>"); // Initial Type Speed

            var typeSpeed = 300;

            if (this.isDeleting) {
                typeSpeed /= 2;
            } // If word is complete


            if (!this.isDeleting && this.txt === fullTxt) {
                // Make pause at end
                typeSpeed = this.wait; // Set delete to true

                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === "") {
                this.isDeleting = false; // Move to next word

                this.wordIndex++; // Pause before start typing

                typeSpeed = 500;
            }

            setTimeout(function() {
                return _this.type();
            }, typeSpeed);
        }
    }]);

    return TypeWriter;
}(); // Init On DOM Load


document.addEventListener("DOMContentLoaded", init); // Init App

function init() {
    var txtElement = document.querySelectorAll(".txt-type");

    if (txtElement.length) {
        var _txtElement = document.querySelector('.txt-type');

        var words = JSON.parse(_txtElement.getAttribute("data-words"));

        var wait = _txtElement.getAttribute("data-wait"); // Init TypeWriter


        new TypeWriter(_txtElement, words, wait);
    }
}

//# sourceURL=webpack://go-tailwind/./src/js/typewriter.js?