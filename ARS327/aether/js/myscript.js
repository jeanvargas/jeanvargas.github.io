var earth = document.getElementById("earth_sound");
     function playAudioEarth() {
           earth.play();
    }
var air = document.getElementById("air_sound");
     function playAudioAir() {
           air.play();
    }
var water = document.getElementById("water_sound");
     function playAudioWater() {
           water.play();
    }
var fire = document.getElementById("fire_sound");
     function playAudioFire() {
           fire.play();
    }

$(document).on('ready', function () {
    setTimeout(function () {
        $('.letter').addClass('loaded');
        $('.reg-text').addClass('loaded');
    }, 1000);
});