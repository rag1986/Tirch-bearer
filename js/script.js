

/*------------------------------
Mobile Menu (toggleClass to activate transitions)
------------------------------*/

$( ".hamburger" ).click(function() {
  $(".hamburger").toggleClass("is-active");
  $( ".navbar__menu" ).toggleClass( "navbar__menu--active" );
  $(".top").toggleClass("top--open");
});

/*------------------------------
".Top" Color (if scroll >= 60)
------------------------------*/ 

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 60) {
      $(".top").addClass("top--scrolling");
  } else {
      $(".top").removeClass("top--scrolling");
  }
});
