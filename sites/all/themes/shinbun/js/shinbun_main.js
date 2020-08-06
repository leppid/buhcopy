/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
  // customize the overlay property according to the different requested page.
  Drupal.behaviors.shinbun_main = {
    attach: function (context) {


      /**************************
       *  STICKY HEADER / LOADING ANIMATIONS
       ***************************/

      if ($().sticky) {
        $('.front header#navbar,.node-type-shinbun-front-page header#navbar').sticky({topSpacing: 0});
      }
      ; // if sticky exists

      $(".la-anim-1").addClass("la-animate");

      $(".loading_text i").addClass("rotating");


      $(document).ready(function () {


        /**************************
         *  REVOLUTION SLIDER IMPLEMENTATION
         ***************************/

        var revapi;
        var query_narrow = 'all and (max-width: 768px)';
        if (window.matchMedia(query_narrow).matches) {
          $('.view-revolution-slide-videos .tp-banner').show().revolution(
            {
              delay: 15000,
              startwidth: 1170,
              startheight: 500,
              hideThumbs: 10,
              fullWidth: "off",
              fullScreen: "off",
              fullScreenOffsetContainer: ""
            });
        }

        $('.tp-banner').show().revolution(
          {
            delay: 15000,
            startwidth: 1170,
            startheight: 500,
            hideThumbs: 10,
            fullWidth: "off",
            fullScreen: "on",
            fullScreenOffsetContainer: ""
          });


        /**************************
         *  FLEXSLIDER INIT
         ***************************/

        $('.flexslider').flexslider({
          animation: "slide"
        });

        /**************************
         *  PORTFOLIO SECTION
         ***************************/

        $('.da-thumbs > li ').each(function () {
          $(this).hoverdir();
        });

        $('.da-thumbs li').hover(function () {
          $(this).find(".social_icons").stop().fadeIn(300);
        }, function () {
          $(this).find(".social_icons").stop().hide();
        });

        $('#Grid').mixitup();

        /*GET THE PROJECTS ON HOME TO OPEN WITH AJAX*/
        $(document).ajax_detail();

        $('.view-id-work.view-display-id-page_3 .item_inner').hover(function () {
          $(this).find("div").not(".title").not(".space").css({
            top: $(this).height(),
            position: 'absolute'
          }).stop().animate({
            top: 0
          }, 500, function () {

            //SAME ON MASONRY
            $(this).closest(".item_inner").find(".social_icons").stop().fadeIn(300);

          });
        }, function () {

          $(this).closest(".item_inner").find(".social_icons").stop().hide();

          $(this).find("div").not(".title").not(".space").stop().animate({
            top: $(this).height()
          }, 500, function () {

          });
        });


        /**************************
         *  BACK TO TOP BUTTON
         ***************************/

        $(".top_button a.back_to_top").click(function () {

          $('html, body').animate({
            scrollTop: 0
          }, 750, function () {

          });

        });


      });

      $(window).load(function () {


        $(".loader").fadeOut();

        $('#masonry_container').masonry({
          columnWidth: '.grid-sizer',
          itemSelector: '.item',
          isFitWidth: true
        });

        /**************************
         *  BLOG ANIMATIONS
         ***************************/

        $("document").fitBlogs();

        $(window).on('resize', function () {
          $("document").fitBlogs();
        });

      });

    }
  };
})(jQuery);



