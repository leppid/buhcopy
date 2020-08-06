/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
    // customize the overlay property according to the different requested page.
    Drupal.behaviors.blog_animations = {
        attach: function (context) {

            $.fn.fitBlogs = function() {

                var height = $(".view-id-blog_custom .view-content .project_images:first,.page-blog .node-blog .project_images:first").find("img"),
                    head_element = $(".view-id-blog_custom .view-content .project_images:first,.page-blog .node-blog .project_images:first").find("img").closest(".blog_head");

                var video_embed_iframe = $(".view-id-blog_custom .view-content iframe,.page-blog .node-blog iframe").each(function(){
                    $(this).attr("height",height.parent().height() + "px");
                    $(this).attr("width","100%");

                    $(this).closest(".blog_head").attr("style","height:" + head_element.height() + "px;width:100%;");
                });

                var video_uploads = $(".view-id-blog_custom .view-content .mediaelement-video .mejs-container,.page-blog .node-blog .mediaelement-video .mejs-container").each(function(){

                    $(this).attr("style","height:" + height.parent().height() + "px;width:100%;");
                    //$(this).css("width","100%");
                    $(this).closest(".blog_head").attr("style","height:" + head_element.height() + "px;width:100%;");

                });

            }


        }
    };
})(jQuery);



