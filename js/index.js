$(function(){
    var items =$(".carousel-inner .item");
    $(window).on("resize",function(){
        var width=$(window).width();
        if(width<768){
            $(items).each(function(index,value){
                var imgSrc=$(this).data("smallImage");
                $(this).html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>');
            })
        }else{
            $(items).each(function(index,value){
                var imgSrc=$(this).data("largeImage");
                $(this).html('<a href="javascript:;" class="pcImg" style="background-image: url('+imgSrc+')"></a>');
            })
        }
    }).trigger("resize");

    //计算wjs_product nav实际宽度
    var nav =$(".wjs_product .container .nav");
    var navLis =nav.find("li");
    var total=0;
    navLis.each(function(index,value){
        total+=$(this).innerWidth();
    });
    nav.width(total);
    var myScroll = new IScroll('.tab_parent',{
        scrollX: true,
        scrollY: false
    });
})



