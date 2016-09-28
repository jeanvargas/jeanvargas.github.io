/*$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (
    ($(window).height() - $(this).outerHeight()) / 2) + 
     $(window).scrollTop()) + "px"
  );
  this.css("left", Math.max(0, (
    ($(window).width() - $(this).outerWidth()) / 2) + 
     $(window).scrollLeft()) + "px"
  );
  return this;
}

$("#splash").show();
$("#splash-content").show().center();

setTimeout(function(){    
  $("#splash").fadeOut();
}, 9000);*/


 var earth = document.getElementById("earth_sound");
     function playAudioEarth() {
           earth.play();
           $("#earth").css("background-image: url(..images/earth.gif);");    
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