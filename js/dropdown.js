(function($){
    'use strict';

    function dropdown(elem) {
        var $elem = $(elem),
            activeClass = $elem.data('active') + '-active';
        $elem.hover(function() {
            $elem.addClass(activeClass);
        }, function() {
            $elem.removeClass(activeClass);
        });

     };

    $.fn.extend({
        dropdown:function(){
            return this.each(function(){
                dropdown(this);

            });

        }
    });

    
})(jQuery);