$.fn.center = function () {
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
}, 9000);


 var x = document.getElementById("earth_sound");
     function playAudio() {
           x.play();
    }