/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
    // customize the overlay property according to the different requested page.
    Drupal.behaviors.extra_animations = {
        attach: function (context) {

            var support_transitions = Modernizr.csstransitions;

            var mobile_device = is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            /**************************
             *  WAYPOINT EFFECTS
             ***************************/

            if (!support_transitions || mobile_device) {
                $("body").addClass('waypoint-no-effects');
            } else {
                $('.waypoint-effect').waypoint( function(direction) {

                    if($(this).attr('data-waypoint-function')){
                        var callback = $(this).attr('data-waypoint-function');
                        var call = eval(callback).call();
                    }

                    $(this).addClass($(this).attr('data-waypoint-effect'));

                }, { offset: "90%" });
            }

            /**************************
             *  NUMBER COUNTERS EFFECTS
             ***************************/

            function wi_inview(ele) {
                var	window_top = $(window).scrollTop(),
                    offset_top = $(ele).offset().top;
                if ( $(ele).length > 0 ) {
                    if (	offset_top + $(ele).height() - 100 >= window_top &&
                        offset_top <= ( window_top + 0.85 * $(window).height() ) ) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }

            function counter( ele, number ){

                if ( typeof(ele)!='object' ) return;

                ele.find('.number').empty();

                if ( !number ) number = 0;
                var number = number.toString();
                var numArray = number.split("");

                for(var i=0; i<numArray.length; i++) {
                    numArray[i] = parseInt(numArray[i], 10);
                    ele.find('.number').append('<span class="digit-con"><span class="digit'+i+'">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br></span></span>');
                }

                var increment = ele.find('.digit-con').outerHeight();
                var speed = 1000;

                for(var i=0; i<numArray.length; i++) {
                    ele.find('.digit'+i).animate({top: -(increment * numArray[i])}, speed);
                }

                ele.find(".digit-con:nth-last-child(3n+4)").after("<span class='comma'>,</a>");

                $(window).resize(function(){
                    counter( ele, number );
                });

            }

            function run_counters(){

                /* number
                 ----------------------------- */
                if (support_transitions) {
                    $('.wi-count').each(function() {
                        var $this = $(this);

                        if ( !$this.data('complete') ) {
                            $this.find('.number').text('').css({opacity:0});
                        }
                        //if ( wi_inview($this) && !$this.data('complete') ) {
                        $this.data('complete',true);
                        var delay = parseInt("200");
                        setTimeout(function(){
                            $this.find('.number').animate({opacity:1});
                            counter( $this, $this.data('number') );
                        }, delay );
                        //}	// if wi_inview
                    });	// each wi count
                }	// endif not IE or mobile view
                else {
                    $('.wi-count .number').css({opacity:1});
                }

            }

        }
    };
})(jQuery);



