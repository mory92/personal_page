$(document).ready(function() {

    new WOW().init();

    // $("#pwc-section2-te img").click(function() {
    //     var imgSrc = $(this).attr("src");
    //     var fullName = $(this).parent("div").children("h2").html();

    //     $("#pwc-teamModal img").attr("src", imgSrc);
    //     $("#pwc-teamModal h2").html(fullName);
    // });

    // Efecto 'smooth' con el click en los dots para ir a la section
    // $('.first-link').click(function() {
    //     $('html,body').animate({ scrollTop: $('#pwc-home').offset().top }, 1000);
    // });
    // $('.second-link').click(function() {
    //     $('html,body').animate({ scrollTop: $('#pwc-proposal').offset().top }, 1000);
    // });
    // $('.third-link').click(function() {
    //     $('html,body').animate({ scrollTop: $('#pwc-tl').offset().top }, 1000);
    // });
    // $('.fourth-link').click(function() {
    //     $('html,body').animate({ scrollTop: $('#pwc-team').offset().top }, 1000);
    // });
    // $('.fifth-link').click(function() {
    //     $('html,body').animate({ scrollTop: $('#pwc-contact').offset().top }, 1000);
    // });




    // Eventos de waypoint/scroll al llegar al lugar cambiamos el color del navbar
    // var waypoint = new Waypoint({
    //     element: $('.pwc-menu'),
    //     handler: function(direction) {
    //         if (direction === "down") {
    //             $('#navbar1').css('background-color', 'white');
    //             $('#navbar1').css('box-shadow', 'rgba(0, 0, 0, 0.25) 0px 10px 29px -10px');
    //         } else {
    //             $('#navbar1').css('background-color', 'transparent');
    //             $('#navbar1').css('box-shadow', 'none');
    //         }
    //     },
    //     offset: -200
    // });


});