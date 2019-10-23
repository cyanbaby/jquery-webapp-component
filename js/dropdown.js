(function($) {
    'use strict'

    function dropdown(elem, options) {
        var $elem = $(elem),
            $layer = $elem.find('.dropdown-layer'),
            activeClass = $elem.data('active') + '-active';
        // $layer.showHide({
        //     css3: true,
        //     js: true,
        //     animation: 'slideUpDown'

        // });  //在这里传参，不方便，易于出错，应该在调用时传参。

        $layer.showHide(options);
        $elem.hover(function() {
            $elem.addClass(activeClass);
            $layer.showHide('show');
        }, function() {
            $elem.removeClass(activeClass);
            $layer.showHide('hide');
        });

    }

    var defaults={
            css3: true,
            js: true,
            animation: 'slideUpDown'
    };

    $.fn.extend({
        dropdown: function() {
            return this.each(function() {
                var options=$.extend({},defaults,options);
                dropdown(this,options);

            });

        }
    });


})(jQuery);