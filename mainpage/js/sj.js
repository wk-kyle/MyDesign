/**
 * Created by ${宋佳} on 2016/10/8.
 */

//跳回楼顶的事件
$(window).load(function () {
    $(document).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $(".arrowTop").fadeIn(1000);
        } else {
            $(".arrowTop").fadeOut(1000);
        }
    });
    $(".arrowTop").click(function () {
//                alert("nihao")
//                $(document).animate({scrollTop:"0px"},1000);
//                $(document).scrollTop(0);
        $("html,body").animate({"scrollTop":"0px"}, 500);
    })
})
$(function() {
    //为T恤层添加高亮显示特效
    $("#menshirt").children("li").mouseenter(function() {
        $(this).css("opacity",1).siblings("li").css("opacity",.5);
    })
    $("#menshirt").mouseleave(function() {
        $("#menshirt").children("li").css("opacity",1);
    })

    //鼠标进入每一个下标切换图片
    var lis = my$("olbtn").children;
    var ol = my$("img");
    for(var i=0; i<lis.length; i++){
        lis[i].index = i;
        lis[i].onmouseover = earFn;
        function earFn(){
            for(var j=0; j<lis.length; j++){
                lis[j].style.border = "";
            };
            this.style.border = "3px solid black";
            var index = this.index;
            var target = -index*273;
            animateJD(ol,target);
        };
        lis[0].style.border = "3px solid black";
    };
    var lis1 = my$("olbtn1").children;
    var ol1 = my$("olimg1");
    for(var i=0; i<lis1.length; i++){
        lis1[i].index = i;
        lis1[i].onmouseover = earFn;
        function earFn(){
            for(var j=0; j<lis.length; j++){
                lis1[j].style.border = "";
            };
            this.style.border = "3px solid black";
            var index = this.index;
            var target = -index*273;
            animateJD(ol1,target);
        };
        lis1[0].style.border = "3px solid black";
    };
    var lis2 = my$("olbtn2").children;
    var ol2 = my$("olimg2");
    for(var i=0; i<lis2.length; i++){
        lis2[i].index = i;
        lis2[i].onmouseover = earFn;
        function earFn(){
            for(var j=0; j<lis2.length; j++){
                lis2[j].style.border = "";
            };
            this.style.border = "3px solid black";
            var index = this.index;
            var target = -index*273;
            animateJD(ol2,target);
        };
        lis2[0].style.border = "3px solid black";
    };
    //设置鼠标进入li标签 显示查看详情和加入购物车
    $("#goods>li").mouseover(function() {
        $(this).find(".buy").css("display","block");
    })
    //设置鼠标离开li标签 隐藏查看详情和加入购物车
    $("#goods>li").mouseout(function() {
        $(this).find(".buy").css("display","none");
    })
    ////为手机选择中的li注册鼠标进入事件
    $(".phone-choose li").mouseenter(function() {
        $(this).children("div").stop().slideUp(300);

    })
    $(".phone-choose li").mouseleave(function() {
        $(this).children("div").stop().slideDown(300);
    })

})






$(function () {
    var datas=[
        {"names": "Smartisan T2","src":"images/a.jpg","money":"2000.00","bigsrc":"images/aa.jpg"},
        {"names":"JBL E30 蓝色","src":"images/b.jpg","money":"499.00","bigsrc":"images/bb.jpg"},
        {"names":"bong2S 心率智能手环 银色","src":"images/c.jpg","money":"129.00","bigsrc":"images/cc.jpg"},
        {"names": "坚果手机硅胶保护套 红色","src":"images/d.jpg","money":"15.00","bigsrc":"images/dd.jpg"}
    ];

    var arr=[];
    var sum=0;
    var arr2 = [];
    var arr3 = [];
    var summoney=0;

    $(".hot").text(sum);
    $("#car").mouseenter(function () {
        $("#shopcar").show();
        $(".shop").empty();
        showcar();
    })

    $(".car").mouseleave(function () {
        $(".shopcar").hide();
    })
    $("#shopcar").mouseenter(function () {
        $(".shopcar").show();
    })
    $("#shopcar").mouseleave(function () {
        $(".shopcar").hide();
    })


    $("#shop").on("mouseenter",".pic",function(){
        var nameProduct=$(this).next().text();
        var srcProduct="";
        for(var i=0;i<4;i++){
            if(nameProduct==datas[i].names){
                srcProduct=datas[i].bigsrc;
            }
        }
        $(".shopbigbox>img").attr("src",srcProduct);

        $(this).mousemove(function(e){

            $(".shopbigbox").show();
            $(this).children("div").eq(0).show();
            var maskBig=$(this).children("div").eq(0);
            //console.log(e.clientX);
            //console.log(e.clientY);
            var parentLeft=$(this).parent().offset().left;
            var parentTop=$(this).parent().offset().top;
            var x= e.clientX-40-parentLeft;
            var y=e.clientY-40-parentTop;

            x=x<0?0:x;
            y=y<0?0:y;

            //
            x=x>40?40:x;
            y=y>40?40:y;

            maskBig.css("display","block");
            maskBig.css("left",x);
            maskBig.css("top",y);

            var imgMaxMove= $(".shopbigbox").width()-$(".shopbigbox>img").width();
            //console.log(imgMaxMove);
            var imgLeft=x*imgMaxMove/40;
            var imgTop=y*imgMaxMove/40;
            $(".shopbigbox>img").css("marginLeft",imgLeft);
            $(".shopbigbox>img").css("marginTop",imgTop);

        });


        $(".pic").mouseleave(function(){
            var maskBig=$(this).children("div").eq(0);
            maskBig.hide();
            $(".shopbigbox").hide();
        });


    });


    function showcar() {
        arr2=[];
        arr3=[];
        for(i=0;i<arr.length;i++){
            var m = 1;
            for(j=0;j<arr2.length;j++){
                if(arr2[j]==arr[i]){
                    m=0;
                    arr3[j]+=1;
                }
            }
            if(m==1){
                arr3[arr2.length]=1;
                arr2[arr2.length]=arr[i];
            }
        }
        summoney=0;
        for(var i=0;i<arr2.length;i++){
            summoney+=parseInt(datas[arr2[i]].money)*parseInt(arr3[i]);
        }
        if(arr.length==0){
            $(".shop").empty();
            $("#shop").css({"width":312,"height":172,"background-color":"white"});
            $("#shop").append($("<img src='images/kong.png'/>"));
            //console.log($("#shop img"));
        }else{
            $(".shop").empty();
            $("#shop").css({"width":312,"height":""});
            var sums=arr2.length>3?3:arr2.length;
            for(var i=0;i<sums;i++){

                var dt=datas[arr2[i]];

                var num=arr3[i];
                //console.log(arr3[i]);
                //console.log(num);

                $("#shop").append($("<div class='box1'><div class='pic'><div class='shopmask'></div></div><p class='shopname'>"+dt.names+"</p><p class='jiage'><b class='onejia'>￥"+dt.money+"</b>&nbsp;x<b class='onege'>"+num+"</b></p><div class='off'>x</div></div>"));
                $("#shop>div:last").children("div").eq(0).css("background","url("+dt.src+")");
            }
            $("#shop").append($("<div class='box2'><b class='sumNum'>共 "+sum+" 件商品</b><a href='#' class='allshop'>查看所有商品 ></a></div>"));
            $("#shop").append($("<div class='box3'>合计：<b class='sumjiage'>￥"+summoney+"</b><div class='shopbtn'>去购物车</div>"));
            if(arr2.length>3){
                $(".allshop").show();
            }else{
                $(".allshop").hide();
            }


        }
    }
    $("#car1").click(function(){
        //sum++;
        arr[sum]=0;
        sum++;
        $(".hot").text(sum);
        $("#fly1").show();
        $("#fly1").animate({"top":-2000,"right":-3000},800,function() {
            $("#fly1").hide();
            $("#fly1").css({"top":-30,"right":20});
        })
    });
    $("#car2").click(function(){
        arr[sum]=1;
        sum++;
        $(".hot").text(sum);
        $("#fly2").show();
        $("#fly2").animate({"top":-2000,"right":-2000},800,function() {
            $("#fly2").hide();
            $("#fly2").css({"top":-30,"right":20});
        })
    });
    $("#car3").click(function(){
        arr[sum]=2;
        sum++;
        $(".hot").text(sum);
        $("#fly3").show();
        $("#fly3").animate({"top":-2000,"right":-1000},800,function() {
            $("#fly3").hide();
            $("#fly3").css({"top":-30,"right":20});
        })
    });
    $("#car4").click(function(){
        arr[sum]=3;
        sum++;
        $(".hot").text(sum);
        $("#fly4").show();
        $("#fly4").animate({"top":-2000,"right":-500},800,function() {
            $("#fly4").hide();
            $("#fly4").css({"top":-30,"right":20});
        })
    });
 

})



