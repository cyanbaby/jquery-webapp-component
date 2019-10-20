 // 正常显示和隐藏
    var silent = {
        //初始化显示和隐藏的状态
        init:function ($elem) {
            if($elem.is(':hidden')){
                $elem.data('status','hidden');
            }else{
                $elem.data('status','shown');

            }
        },
        show: function($elem) {
          //判断状态，解决重复触发事件  
        if($elem.data('status')==='show') return; 
        if($elem.data('status')==='shown') return; 
            //给元素添加状态值
            $elem.data('status','show').trigger('show');            
            $elem.show();
            $elem.data('status','shown').trigger('shown');            


        },
        hide: function($elem) {
        if($elem.data('status')==='hide') return; 
        if($elem.data('status')==='hidden') return; 
            $elem.data('status','hide').trigger('hide');            
            $elem.hide();
            $elem.data('status','hidden').trigger('hidden'); 
        }
    };
    // 带效果的显示和隐藏，css3实现方法
    var css3 = {
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
