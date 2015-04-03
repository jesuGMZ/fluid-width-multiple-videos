jQuery(document).ready(function($){
    var $allVideos = $("iframe[src^='http://www.youtube.com'], iframe[src^='https://www.youtube.com'], iframe[src^='//www.youtube.com'], object, embed");

    $allVideos.each(function() {
        $(this)
            // jQuery .data does not work on object/embed elements
            .attr('data-aspectRatio', this.height / this.width)
            .removeAttr('width');
    });

    $(window).resize(function() {

        $allVideos.each(function() {
            var $el = $(this);
            var newWidth = $el.parent('figure').width();
            
            $el
                .width(newWidth)
                .height(newWidth * el.attr('data-aspectRatio'));
        });
    }).resize();

});