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
          sr.reveal('.mov_left', { duration: 1500, origin: 'left',distance: '150px', mobile: true });
          sr.reveal('.mov_right', { duration: 1500, origin: 'right',distance: '150px', mobile: true });
          sr.reveal('.mov_left2', { duration: 1500, origin: 'left',distance: '150px',delay: 800, mobile: true });
          sr.reveal('.mov_right2', { duration: 1500, origin: 'right',distance: '150px',delay: 800,mobile: true});
          sr.reveal('.mov_up', { duration: 1000, origin: 'bottom',distance: '150px', delay: 1500, easing: 'linear', mobile: true });
          // for mobile move_right(1) and move_right2(3) //
          sr.reveal('.mov_right1', { duration: 1500, origin: 'right', mobile: true });
          sr.reveal('.mov_right3', { duration: 1500, origin: 'right',delay: 800,mobile: true});


    //for toogle button
    $(".button-prestation").click(function (e) {

       e.preventDefault();

       $('[class^=show-presta]').not($('.'+this.id)).hide();

       $('.'+this.id).show(1000);
})
});
