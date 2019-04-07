


    // 实现隐藏条功能
        $(document).ready(function(){
            //在没有设置收个li颜色时可用
            $('.content11-content-nav .list').eq(0).addClass('activity');
            $('.content11-content-nav .list').click(function(){
                $(this).addClass('activity');
                $('.content11-content-nav .list').not($(this)).removeClass('activity');
                //获取子元素
                // $('.nav').find('li').eq(0);
                var idx=$(this).index('.content11-content-nav .list');
                
                $('.content11-content-text').eq(idx).show();
                $('.content11-content-text').not($('.content11-content-text').eq(idx)).hide();
            });
            $('.content11-content-nav .list').mouseenter(function(){
                $(this).children().css({"color":"blue"});
            });
            $('.content11-content-nav .list').mouseleave(function(){
                $(this).children().css({"color":"black"});
            });

        });
