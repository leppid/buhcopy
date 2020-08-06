/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
    // customize the overlay property according to the different requested page.
    Drupal.behaviors.project_detail = {
        attach: function (context) {

            $.fn.ajax_detail = function() {

                //Load project details
                var work_list = $("#block-views-work-block"),
                    work_detail_anchor = $(".view-id-work.view-display-id-block .work-list .views-row a"),
                    button_open = $("a.open_project"),
                    project_detail_wrapper = $(".portolio_detail_holder"),
                    project_detail = $(".portolio_detail_holder .project_detail"),
                    close_project_wrapper = $(".portolio_detail_holder .close_project"),
                    close_project = $(".portolio_detail_holder a.close"),
                    filter_view = $("#block-views-filter-controls-block");

                button_open.click(function(){

                    var url = $(this).attr("href");

                    project_detail.load(url + " #container_inner",function(){

                        $('.flexslider').flexslider();

                        $('html, body').animate({
                            scrollTop: work_list.offset().top + work_list.height() + 200
                        }, 750,function(){
                            project_detail_wrapper.slideDown(function(){

                                $('html, body').animate({
                                    scrollTop: project_detail_wrapper.offset().top - 80
                                }, 750,function(){
                                    project_detail.css('visibility','visible');
                                    close_project_wrapper.show();
                                });


                            });
                        });

                    });

                    close_project.click(function(){

                        project_detail.css('visibility','hidden');

                        project_detail_wrapper.slideUp(function(){
                            project_detail.html("");
                            close_project_wrapper.hide();

                            $('html, body').animate({
                                scrollTop: work_list.offset().top - 70 - filter_view.height() - 110
                            }, 750,function(){

                            });

                        });

                        return false;

                    });

                    return false;

                });

                return this;
            }

        }
    };
})(jQuery);



