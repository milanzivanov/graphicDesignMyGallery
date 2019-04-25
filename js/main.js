// $(document).ready(function () {
//     "use strict";
//     // console.log('everything is working');
// });

$(window).load(function() {
    $(".loader").fadeOut("slow");
});


// particlesjs
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100
      },
      "color": {
        "value": "#ddd"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#159957"
        }
      },
      "image":{
        "src": "some link"
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim":{
          "enable": false,
          "speed": 1
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 100,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#159957",
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none"
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      },
      "modes": {
        "repulse": {
          "distance": 50,
          "duration": 0.4
        }
      }
    }
});

// lazyload
(function() {
    function logElementEvent(eventName, element) {
        console.log(
            Date.now(),
            eventName,
            element.getAttribute("data-src")
        );
    }

    var callback_enter = function(element) {
        logElementEvent("🔑 ENTERED", element);
    };
    var callback_exit = function(element) {
        logElementEvent("🚪 EXITED", element);
    };
    var callback_reveal = function(element) {
        logElementEvent("👁️ REVEALED", element);
    };
    var callback_loaded = function(element) {
        logElementEvent("👍 LOADED", element);
    };
    var callback_error = function(element) {
        logElementEvent("💀 ERROR", element);
        element.src =
            "https://via.placeholder.com/440x560/?text=Error+Placeholder";
    };
    var callback_finish = function() {
        logElementEvent("✔️ FINISHED", document.documentElement);
    };

    ll = new LazyLoad({
        elements_selector: ".lazy",
        // load_delay: 300,
        threshold: 0,
        // Assign the callbacks defined above
        callback_enter: callback_enter,
        callback_exit: callback_exit,
        callback_reveal: callback_reveal,
        callback_loaded: callback_loaded,
        callback_error: callback_error,
        callback_finish: callback_finish
    });
})();

// sticky
$(window).scroll(function() {

    // var headerHeight = $(".header").outerHeight();
    var headerHeight = 145;

    console.log(headerHeight);
    
    if ($(this).scrollTop() > headerHeight) {  
        $('.header, .header-box, .masonry, .header-box--logo').addClass("sticky");
        $('.masonry').css({'margin-top': headerHeight });
    }
    else {
        $('.header, .header-box, .masonry, .header-box--logo').removeClass("sticky");
        $('.masonry').css({'margin-top': headerHeight });
    }
});

// btt 
if ($('.back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
}



