
$(window).load(function () {
    function my$(id){
        return document.getElementById(id);
    }
    // my$("wechat").onmouseover=function(){
    //     this.style.background='url("../images/icons2.png")';
    // }
    var flag=null;
    //文本框按键按下，隐藏默认文字所在的层
    $("#username").find("input").keyup(function () {
        //错误提示层隐藏
        $(".usernameWrong").hide();
        $(".usernameWrong1").hide();
        //文本框中内容不为空，隐藏默认文字所在的层
        if($(this).val().length>0){
            $(this).prev("span").prev("span").hide();
        }else{
            //默认文字层
            $(this).prev("span").prev("span").show();

        }
        if ($(this).val().length>0&&$("#password").find("input").val().length>0) {
            $("#btn-wrapper").children("div").css("opacity", 1);
            $("#btn>a").css("cursor","pointer");
        } else {
            $("#btn-wrapper").children("div").css("opacity", .4);
            $("#btn>a").css("cursor","default");
        }
    });
    $("#password").find("input").keyup(function () {
        //错误提示层隐藏
        $(".passwordWrong").hide();
        //文本框中内容不为空，隐藏默认文字所在的层
        // console.log($(this).val()=="2")
        if ($(this).val().length > 0) {
            $(this).prev("span").prev("span").hide();
        } else {
            //默认文字层
            $(this).prev("span").prev("span").show();

        }
        if ($(this).val().length>0&&$("#username").find("input").val().length>0) {
            $("#btn-wrapper").children("div").css("opacity", 1);
            $("#btn>a").css("cursor","pointer");
        } else {
            $("#btn-wrapper").children("div").css("opacity", .4);
            $("#btn>a").css("cursor","default");
        }
    })
        // // 登录按钮变亮的条件=================这里可以改用户名和密码
        // if(($("#username").find("input").val()=="111")||($("#password").find("input").val()=="11")){
        //     $("#btn-wrapper").children("div").css("opacity",1);
        // }
        // else{
        //     $("#btn-wrapper").children("div").css("opacity",.4);
        // }
    //有户名文本框失去焦点事件
    $("#username").find("input").blur(function () {
        flag=false;
        //失去焦点让username透明度改变
        $("#username").stop().fadeTo(300,.62)
        //手机和邮箱的正则验证
        var reg=/(^[1](([3][0-9])|([4][7])|([5][0-9])|([7][0178])|([8][0-9]))[0-9]{8}$)|([0-9a-zA-Z_.-]+[@][0-9a-zA-Z_-]+([.][a-zA-Z]+){1,2})/
        if(reg.test($(this).val())){
            $(".usernameWrong").fadeOut(800);
            $(".usernameWrong1").fadeOut(800);
        }else if($(this).val()!=""){
            $(".usernameWrong").fadeIn(800);
            $("#username").children(".input").css("border","1px solid #D16D62");
        }else{
            $(this).parent(".input").css("border","1px solid #ccc");
        }
        // if($(this).val()==""){
        //     alert("nohao")
        //     // $(".usernameWrong").fadeOut(800);
        // }
    })

    //密码文本框失去焦点事件
    $("#password").find("input").blur(function () {
        flag=false;
        //失去焦点让password透明度改变
        $("#password").stop().fadeTo(300,.62)
        //密码的正则验证
       if($(this).val()=="123456"){
           $(".passwordWrong").fadeOut(800);
       } else if($(this).val()!=""){
           $(".passwordWrong").fadeIn(800);
           $("#password").children(".input").css("border","1px solid #D16D62");
       }else{
           $(this).parent(".input").css("border","1px solid #ccc");
       }
    });
    
    //文本框获取焦点，所在的大层的边框改变颜色
    $("#username").find("input").focus(function(){
        flag=true;
        $(this).parent(".input").css("border","1px solid #6B93F2");
        //文本框中有内容，则透明度为1
        if($("#username").find("input").val()!=""){
            $(this).css("opacity",1);
        }
    });
    $("#password").find("input").focus(function(){
        flag=true;
        $(this).parent(".input").css("border","1px solid #6B93F2");
        //文本框中有内容，则透明度为1
        if($("#password").find("input").val()!=""){
            $(this).css("opacity",1);
        }
    });

    // 鼠标进入和离开用户名和密码的层，该层改变透明度
    $("#username").mouseenter(function(){
        $(this).stop(false,true).fadeTo(500,1)
    });
    $("#username").mouseleave(function(){
        if(flag==true){
            $(this).stop().fadeTo(500,1)
        }else{
            $(this).stop().fadeTo(500,.62)
        }
    });
    $("#password").mouseenter(function(){
        $(this).stop(false,true).fadeTo(500,1)
    });
    $("#password").mouseleave(function(){
        if(flag==true){
            $(this).stop().fadeTo(500,1)
        }else{
            $(this).stop().fadeTo(500,.62)
        }
    });


    //自动登录按钮的点击事件
    var flag1=true;
    $("#auto").click(function () {
        if(flag1==true){
            flag1=false;
            $(this).find("span").css("backgroundPosition","0 2px");
        }else{
            flag1=true;
            $(this).find("span").css("backgroundPosition","0 -18px");
        }
    })


    //点击登录按钮，如果用户名不是15771254171，让用户名所在的等抖动
    //如果正确，则跳转到首页==========================================需要首页地址
    $("#btn").click(function () {
        //用户名层不满足条件
       if($("#username").find("input").val()!="15771254171") {
           //跳动
           $("#username").stop().animate({"marginLeft":10,"marginRight":-10},80,function () {
               $("#username").stop().animate({"marginLeft":-10,"marginRight":10},80,function () {
                   $("#username").stop().animate({"marginLeft":0,"marginRight":0},80);
               });
           })
           //边框变色
           $("#username").children(".input").css("border","1px solid #D16D62");
           //透明度为1
           $("#username").css("opacity",1);
           //显示错误层1,需要判断usernameWrong是否显示
           if($(".usernameWrong").css("display")=="none"){
               $(".usernameWrong1").fadeIn(800);
           }

          //密码层不满足条件
       }else if($("#password").find("input").val()!="wangkai123"){
           //跳动
           $("#password").stop().animate({"marginLeft":10,"marginRight":-10},80,function () {
               $("#password").stop().animate({"marginLeft":-10,"marginRight":10},80,function () {
                   $("#password").stop().animate({"marginLeft":0,"marginRight":0},80);
               });
           })
           //边框变色
           $("#password").children(".input").css("border","1px solid #D16D62");
           //透明度为1
           $("#password").css("opacity",1);

       }else if($("#password").find("input").val()=="wangkai123"){
           // alert("nihao");
           //此处改变a的地址，跳转到主页面=========================主页地址添加======================
           window.close();
       }
    });
   
    
});
    



    

    


