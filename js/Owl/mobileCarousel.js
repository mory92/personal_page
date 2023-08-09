$('.owl-carousel').owlCarousel({
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            items:1,
            itemsMobile : [479,2],
            // autoWidth: true,
            // autoHeight: true,
            // // autoplay: true,
            center: true,
            // loop: true,
          });

          $('.owl-next').click(function() {
            $('.owl-carousel').trigger('next.owl.carousel');
          });

          $('.owl-prev').click(function() {
            $('.owl-carousel').trigger('prev.owl.carousel');
          });

          $('#carouselHomeMobile').find($('.owl-dots')).css('display', 'none');
