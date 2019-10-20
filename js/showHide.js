 // 提取init公共部分
 function init($elem, hiddenCallback) {

     if ($elem.is(':hidden')) {
         $elem.data('status', 'hidden');
         if (typeof hiddenCallback === 'function') hiddenCallback();

     } else {
         $elem.data('status', 'shown');
     }
 }

 // 提取show公共部分

 function show($elem, callback) {
     if ($elem.data('status') === 'show') return;
     if ($elem.data('status') === 'shown') return;
     $elem.data('status', 'show').trigger('show');
     callback();


 }

 function hide($elem, callback) {

     if ($elem.data('status') === 'hide') return;
     if ($elem.data('status') === 'hidden') return;
     $elem.data('status', 'hide').trigger('hide');
     callback();

 }

 // 正常显示和隐藏
 var silent = {
     //初始化显示和隐藏的状态
     // if ($elem.is(':hidden')) {
     //            $elem.data('status', 'hidden');
     //            if(typeof hiddenCallback==='function') hiddenCallback();

     //        } else {
     //            $elem.data('status', 'shown');
     //        }

     // 提取公共init后
     init: init,
     // show: function($elem) {
     //     //判断状态，解决重复触发事件  
     //     if ($elem.data('status') === 'show') return;
     //     if ($elem.data('status') === 'shown') return;
     //     //给元素添加状态值
     //     $elem.data('status', 'show').trigger('show');
     //     $elem.show();
     //     $elem.data('status', 'shown').trigger('shown');


     // },
     show: function($elem) {
         show($elem, function() {
             $elem.show();
             $elem.data('status', 'shown').trigger('shown');
         });


     },
     // hide: function($elem) {
     //     if ($elem.data('status') === 'hide') return;
     //     if ($elem.data('status') === 'hidden') return;
     //     $elem.data('status', 'hide').trigger('hide');
     //     $elem.hide();
     //     $elem.data('status', 'hidden').trigger('hidden');
     // }

     hide: function($elem) {
         hide($elem, function() {
             $elem.hide();
             $elem.data('status', 'hidden').trigger('hidden');
         });

     }
 };
 // 带效果的显示和隐藏，css3实现方法
 var css3 = {

     fade: { // 淡入淡出
         // init: function($elem) {
         //    $elem.addClass('transition');
         //     if ($elem.is(':hidden')) {
         //         $elem.data('status', 'hidden');
         //         $elem.addClass('fadeOut');
         //     } else {
         //         $elem.data('status', 'shown');
         //     }

         // 提取公共init后，独有的内容

         init: function($elem) {
             $elem.addClass('transition');
             init($elem, function() {
                 $elem.addClass('fadeOut');

             });

         },
         // show: function($elem) {
         //     if ($elem.data('status') === 'show') return;
         //     if ($elem.data('status') === 'shown') return;
         //     //给元素添加状态值
         //     $elem.data('status', 'show').trigger('show');
         //     $elem.off('transitionend').one('transitionend', function() {
         //         $elem.data('status', 'shown').trigger('shown');
         //     });
         //     $elem.show();
         //     setTimeout(function() {
         //         $elem.removeClass('fadeOut');
         //     }, 20);


         // },

         show: function($elem) {
             show($elem, function() {
                 $elem.off('transitionend').one('transitionend', function() {
                     $elem.data('status', 'shown').trigger('shown');
                 });
                 $elem.show();
                 setTimeout(function() {
                     $elem.removeClass('fadeOut');
                 }, 20);
             });


         },

         // hide: function($elem) {
         //     if ($elem.data('status') === 'hide') return;
         //     if ($elem.data('status') === 'hidden') return;
         //     $elem.data('status', 'hide').trigger('hide');
         //     $elem.off('transitionend').one('transitionend', function() {
         //         $elem.hide();
         //         $elem.data('status', 'hidden').trigger('hidden');
         //     });
         //     $elem.addClass('fadeOut');
         // }

         hide: function($elem) {
             hide($elem, function() {
                 $elem.off('transitionend').one('transitionend', function() {
                     $elem.hide();
                     $elem.data('status', 'hidden').trigger('hidden');
                 });
                 $elem.addClass('fadeOut');

             });

         }

     },
     slideUpDown: { // 上下滚动
         show: function() {

         },
         hide: function() {

         }
     },
     slideLeftRight: { // 左右滚动
         show: function() {

         },
         hide: function() {

         }
     },
     fadeslideUpDown: { // 淡入淡出上下滚动
         show: function() {

         },
         hide: function() {

         }
     },

     fadeslideLeftRight: { // 淡入淡出左右滚动
         show: function() {

         },
         hide: function() {

         }
     }
 };

 // 带效果的显示和隐藏，js实现方法
 var js = {
     fade: { // 淡入淡出
         show: function() {

         },
         hide: function() {

         }
     },
     slideUpDown: { // 上下滚动
         show: function() {

         },
         hide: function() {

         }
     },
     slideLeftRight: { // 左右滚动
         show: function() {

         },
         hide: function() {

         }
     },
     fadeslideUpDown: { // 淡入淡出上下滚动
         show: function() {

         },
         hide: function() {

         }
     },
     fadeslideLeftRight: { // 淡入淡出左右滚动
         show: function() {

         },
         hide: function() {

         }
     }
 };