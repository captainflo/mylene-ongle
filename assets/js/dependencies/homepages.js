$( document ).ready(function() {
    // activer les liens internes, précédé par un #
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
      // prendre le nom du lien, substr enleve le premier caractere qui est #
      var ou = $(this).attr("href").substr(1);
      // trouver le tag <a name=""> correspondant
      var saut = $("#"+ ou);
      // aller jusqu'à cet élément
      $('html, body').animate({
          scrollTop: saut.offset().top
      }, 1000);
    });
    //for change navbar color
      $(window).scroll(function() { // check if scroll event happened
            if ($(document).scrollTop() > 400) { // check if user scrolled more than 50 from top of the browser window
              $(".navbar-wagon").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
            } else {
              $(".navbar-wagon").css("background-color", "transparent"); // if not, change it back to transparent
            }
          });
          //for animation move right and left
          window.sr = ScrollReveal({ reset: true });
          sr.reveal('.mov_left', { duration: 1000, origin: 'left', mobile: true });
          sr.reveal('.mov_right', { duration: 1000, origin: 'right', mobile: true });
});
