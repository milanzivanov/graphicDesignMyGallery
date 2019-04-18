$(document).ready(function () {
    "use strict";
    // console.log('everything is working');
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

// scroll to section
$('a[href^="#"]').bind('click', function(e) {
    e.preventDefault(); 

    var target = $(this).attr("href");

    $('html, body').stop().animate({
        scrollTop: $(target).offset().top
    }, 600, function() {
            location.hash = target; 
    });

    return false;
});

// sticky

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {  
        $('header, .header-box, .masonry, .header-box--logo').addClass("sticky");
    }
    else {
        $('header, .header-box, .masonry, .header-box--logo').removeClass("sticky");
    }
});



