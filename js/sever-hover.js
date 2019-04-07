


//经过div div里面的p改变颜色，图片改变颜色


$(function(){
    $('.content15-content-img1').mouseenter(function(){
        var idx = $(this).index('.content15-content-img1');
        $(this).children().next().css("color","#3581fe");
        $('.imglist').eq(idx).css("-webkit-filter","grayscale(0%)");
        $('.imglist').eq(idx).css("filter","grayscale(0%)");
        $('.imglist').eq(idx).css("-moz-filter","grayscale(0%)");
        $('.imglist').eq(idx).css("-ms-filter","grayscale(0%)");
        $('.imglist').eq(idx).css("-o-filter","grayscale(0%)");
    });
    $('.content15-content-img1').mouseleave(function(){
        var idx = $(this).index('.content15-content-img1');
        $(this).children().next().css("color","black");
        $('.imglist').eq(idx).css("-webkit-filter","grayscale(100%)");
        $('.imglist').eq(idx).css("filter","grayscale(100%)");
        $('.imglist').eq(idx).css("-moz-filter","grayscale(100%)");
        $('.imglist').eq(idx).css("-ms-filter","grayscale(100%)");
        $('.imglist').eq(idx).css("-o-filter","grayscale(100%)");
    });
});
