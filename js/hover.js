
// 实现顶部导航的经过显示隐藏
$(function(){
            // 鼠标移入位置和移除
            $('.nav-top-l-l,.map-hover').mouseenter(function(){
                $('.map-hover').css("display","block");
                $('.nav-top-l-l').css("background","#ffffff");
            });
            $('.nav-top-l-l,.map-hover').mouseleave(function(){
                $('.map-hover').css("display","none");
                $('.nav-top-l-l').css("background","#fbfbfb");
            });
           
            // 我的八戒
            $('.nav-top-r').children().children('li').eq(1).mouseenter(function(){
                $('.mybajie-hover').css("display","block");
                $('.nav-top-r').children().children('li').eq(1).css("background","#ffffff");
            });
            $('.nav-top-r').children().children('li').eq(1).mouseleave(function(){
                $('.mybajie-hover').css("display","none");
                $('.nav-top-r').children().children('li').eq(1).css("background","#fbfbfb");
            });
            $('.mybajie-hover').mouseenter(function(){
                $('.mybajie-hover').css("display","block");
                $('.nav-top-r').children().children('li').eq(1).css("background","#ffffff");
            });
            $('.mybajie-hover').mouseleave(function(){
                $('.mybajie-hover').css("display","none");
                $('.nav-top-r').children().children('li').eq(1).css("background","#fbfbfb");
            });

            //客服中心
            $('.nav-top-r').children().children('li').eq(3).mouseenter(function(){
                $('.kefu-hover').css("display","block");
                $('.nav-top-r').children().children('li').eq(3).css("background","#ffffff");
            });
            $('.nav-top-r').children().children('li').eq(3).mouseleave(function(){
                $('.kefu-hover').css("display","none");
                $('.nav-top-r').children().children('li').eq(3).css("background","#fbfbfb");
            });
            $('.kefu-hover').mouseenter(function(){
                $('.kefu-hover').css("display","block");
                $('.nav-top-r').children().children('li').eq(3).css("background","#ffffff");
            });
            $('.kefu-hover').mouseleave(function(){
                $('.kefu-hover').css("display","none");
                $('.nav-top-r').children().children('li').eq(3).css("background","#fbfbfb");
            });

            //app
            $('.nav-top-r').children().children('li').eq(5).mouseenter(function(){
                $('.app-hover').css("display","block");
                $('.nav-top-r').children().children('li').eq(5).css("background","#ffffff");
            });
            $('.nav-top-r').children().children('li').eq(5).mouseleave(function(){
                $('.app-hover').css("display","none");
                $('.nav-top-r').children().children('li').eq(5).css("background","#fbfbfb");
            });
            $('.app-hover').mouseenter(function(){
                $('.app-hover').css("display","block");
                $('.nav-top-r').children().children('li').eq(5).css("background","#ffffff");
            });
            $('.app-hover').mouseleave(function(){
                $('.app-hover').css("display","none");
                $('.nav-top-r').children().children('li').eq(5).css("background","#fbfbfb");
            });
            
        });