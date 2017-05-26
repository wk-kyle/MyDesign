
$(function(){
    //设置上边的盒子设置图片可以改变透明度和淡入的效果
    $(".min-banner").find("li").mouseenter(function(){
        //设置每一个li有透明进入的效果
        //var json={"width":50,"height":50,"border-radius":20};
        //$(this).animate(json,2000);
        $(this).fadeTo(100,0.5);

    })
    $(".min-banner").find("li").mouseleave(function(){
        //设置每一个li有透明进入的效果
        //var json={"width":50,"height":50,"border-radius":20};
        //$(this).animate(json,2000);
        $(this).fadeTo(500,1);

    })
    //设置鼠标进入select1设置阴影效果
    $("#select1-jsul").children("li").mouseenter(function(){
        $(this).addClass("shadow");
    })
    //鼠标离开阴影效果消失
    $("#select1-jsul").children("li").mouseleave(function(){
        $(this).removeClass("shadow");
    })
    ////设置第二个select2
    // $("#select2-jqul").children("li").mouseenter(function(){
    //     //$(this).css("opacity",0.3);
    //     $(this).addClass("shadow2");
    // })
    //$("#select2-jqul").children("li").mouseleave(function(){
    //    //$(this).css("opacity",1);
    //    //$(this).removeClass("shadow2");
    //})
    //$("#select3-jsu").find("li").mouseenter(function(){
    //
    //    //设置每一个li有透明进入的效果
    //    //var json={"width":50,"height":50,"border-radius":20};
    //    //$(this).animate(json,2000);
    //    $(this).siblings("li").stop().fadeTo(300,0.1,function(){
    //        $(this).siblings("li").fadeTo(300,1);
    //
    //    })
    //
    //})
    //设置第三个盒子，，鼠标进入，显示底下的盒子
    $("#select2-jqul").find("li").mouseenter(function(){
        console.log( $("#select2-jqul").find("li"));
        //鼠标进入显示下面的盒子
        //$("this").last("").css("display","block");
        $(this).children("div").eq(3).slideDown(200);


        $(this).children("div").eq(3).siblings("div").hide(200);
        //$(this).children("div").eq(3).css("display","block");
        console.log( $(this).children("div"));
    })
    $("#select2-jqul").find("li").mouseleave(function(){
        console.log( $("#select2-jqul").find("li"));
        //鼠标进入显示下面的盒子
        //$("this").last("").css("display","block");
        $(this).children("div").eq(3).slideUp(200);
        $(this).children("div").eq(3).siblings("div").slideDown(200);
        console.log( $(this).children("div"));
    })
    //设置第三个盒子的特效
    $(".min-banner").mouseenter(function(){
        $(this).stop().animate({"marginTop":20,"marginBttom":-20}, 1000, function () {
            $(this).stop().animate({"marginTop":-20,"marginBttom":20}, 1000, function () {
                $(this).stop().animate({"marginTop":0,"marginBttom":0}, 1000);
            });
        })
    })

    $("#select3-jsu").find("li").mouseenter(function(){
        $(this).stop().animate({"marginLeft": 10, "marginRight": -10 ,"marginTop":10,"marginBttom":-10}, 100, function () {
            $(this).stop().animate({"marginLeft": -10, "marginRight": 10,"marginTop":-20,"marginBttom":20}, 100, function () {
                $(this).stop().animate({"marginLeft": 0, "marginRight": 0,"marginTop":0,"marginBttom":0}, 100);
            });
        })
    })

    //个人中心
    $(".login #register").click(function(){
        $(this).css("display","none");
        $(".account-menu").css("display","block");
    });
    $(".account-menu .account-link").mouseenter(function(){
        $(".account-menu ul").css("display","block");
    });
    $(".account-menu ul").mouseleave(function(){
        $(".account-menu ul").css("display","none")
    });
})






