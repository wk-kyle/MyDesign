/**
 * Created by GSS123 on 2016/10/6.
 */
/*固定导航栏=====开始*/
//获取所有的元素
var topPart=my$("header-main");
var navBar=my$("header-sub");
var mainPart=my$("main");
var reback=document.getElementsByClassName("reback")[0].children[0];
var navBarSon=navBar.children[0];
var leader=0;

window.onscroll=function (){
    leader= scroll().top;
    if(getScroll().top>topPart.offsetHeight){
        navBar.className="header-sub fixed activeGu";
        navBarSon.className="w clearfix scroll";
        //解决下面主体部分跳的问题
        mainPart.style.paddingTop=navBar.offsetHeight+"px";
        reback.style.display="block";
    }else{
        navBar.className="header-sub";
        navBarSon.className="w clearfix";
        mainPart.style.paddingTop=0+"px";
        reback.style.display="none";
    }

};
/*固定导航栏=====结束*/
/*旋转木马=====开始*/
//数组--每一个数组元素都是一个键值对的对象
var config = [
    {
        left: 50,
        opacity: 0.2,
        zIndex: 2
    },//0
    {
        left: 0,
        opacity: 0.5,
        zIndex: 3
    },//1
    {


        left: 350,
        opacity: 1,
        zIndex: 4
    },//2
    {
        left:730,
        opacity: 0.5,
        zIndex: 3
    },//3
    {
        left: 700,
        opacity: 0.2,
        zIndex: 2
    }//4
];
window.onload=function(){
    var flag=true;//假设的一个锁
    var lisMu=my$("slide").children[0].children;
    function assign(){
        for(var i=0;i<lisMu.length;i++){
            animate(lisMu[i],config[i],function(){
                flag=true;
            });
        }
    }
    assign();
    //为层添加书比偶进入和离开事件
    my$("wrap").onmouseover=function (){
        animate(my$("arrow"),{"opacity":1});
    };
    my$("wrap").onmouseout=function (){
        animate(my$("arrow"),{"opacity":0});
    };
    my$("arrRight").onclick=function (){
        if(flag){
            flag=false;
            config.push(config.shift());
            assign();
        }
    };
    my$("arrLeft").onclick=function (){
        if(flag){
            flag=false;
            config.unshift(config.pop());
            assign();
        }
    };
};
/*旋转木马=====结束*/


/*手风琴案例======开始*/
var lisShou=my$("main-slide-box").children[0].children;
for(var i=0;i<lisShou.length;i++){
    lisShou[i].style.backgroundImage="url(images/shou"+(i+1)+".jpg)";
    lisShou[i].onmouseover=mouseoverHandle;
    lisShou[i].onmouseout=mouseoutHandle;
}
//鼠标进入
function mouseoverHandle(){
    for(var j=0;j<lisShou.length;j++){
        animate(lisShou[j],{"width":80});
    }
    animate(this,{"width":800});
}
//鼠标移出
function mouseoutHandle(){
    for(var j=0;j<lisShou.length;j++){
        animate(lisShou[j],{"width":224});
    }
}
/*手风琴案例======结束*/

/*楼层跳跃=====开始*/
    var ulLou=document.getElementsByClassName("lou-step")[0];
    var liLou=ulLou.children;
    var main=my$("main");
    var mainSon=main.children;
    var target=0;
    var timer=null;
    var pic=0;
    for(var i=0;i<liLou.length;i++){
        liLou[i].setAttribute("index",i);
        liLou[i].onclick=function(){
            pic=parseInt(this.getAttribute("index"));
            console.log(pic);
            target=mainSon[pic].offsetTop;
            //console.log(target);
            clearInterval(timer);
            timer=setInterval(function(){
                //获取步长
                var step = (target-leader)/10;
                //二次处理步长
                step = step>0?Math.ceil(step):Math.floor(step);
                //屏幕滑动
                leader = leader + step;
                window.scrollTo(0,leader);
                //清除计时器
                if(Math.abs(target-leader)<=Math.abs(step)){
                    window.scrollTo(0,target);
                    clearInterval(timer);
                }
            },25);
        };
    }

/*封装的scroll方法====开始*/
function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
/*封装的scroll方法====结束*/

/*楼层跳跃=====结束*/
//手机壳淡入淡出
var scale = my$("scale");
var imgs = scale.getElementsByTagName("img");
for(var i=0;i<imgs.length;i++){
    imgs[i].onmouseover=function () {
        for(var j=0;j<imgs.length;j++){
            animate(imgs[j],{"opacity":0.8});
        }
        animate(this,{"opacity":1});
    };
    imgs[i].onmouseout=function () {
        for(var k=0;k<imgs.length;k++){
            animate(imgs[k],{"opacity":1});
        }
    };
}

//设置height
var h1 = [{"height":198,"bottom":-176},{"height":270,"bottom":-115},{"height":168,"bottom":-206},{"height":270,"bottom":-115},{"height":320,"bottom":-48},{"height":255,"bottom":-125},{"height":196,"bottom":-176}];
var ul = scale.children[0];
var lis = ul.children;
for(var i=0;i<h1.length;i++){
    lis[i].style.height = h1[i].height + "px";
    lis[i].style.bottom = h1[i].bottom + "px";
}

$(function(){
    $("#color-red").mouseenter(function(){
        $(this).animate({"bottom":1});
    }).mouseleave(function(){
        $(this).animate({"bottom":-176});
    });
});

$(function(){
    $("#color-orange").mouseenter(function(){
        $(this).animate({"bottom":1});
    }).mouseleave(function(){
        $(this).animate({"bottom":-115});
    });
});

$(function(){
    $("#color-yellow").mouseenter(function(){
        $(this).animate({"bottom":1});
    }).mouseleave(function(){
        $(this).animate({"bottom":-206});
    });
});
$(function(){
    $("#color-green").mouseenter(function(){
        $(this).animate({"bottom":1});
    }).mouseleave(function(){
        $(this).animate({"bottom":-115});
    });
});

$(function(){
    $("#color-cyan").mouseenter(function(){
        $(this).animate({"bottom":1});
    }).mouseleave(function(){
        $(this).animate({"bottom":-45});
    });
});
$(function(){
    $("#color-blue").mouseenter(function(){
        $(this).animate({"bottom":1});
    }).mouseleave(function(){
        $(this).animate({"bottom":-125});
    });
});
$(function(){
    $("#color-purple").mouseenter(function(){
        $(this).animate({"bottom":1});
    }).mouseleave(function(){
        $(this).animate({"bottom":-176});
    });
});


//图片切换
var phoneShow = my$("phoneShow");
var colorSelect = my$("colorSelect");
var colors = phoneShow.getElementsByTagName("li");
var colorful = my$("colorful");
var fColor = my$("f-color");
var rColor = my$("r-color");
for(var i=0;i<colors.length;i++){
    var color = colors[i];
    colors[i].setAttribute("index",i+1);
    var index = colors[i].getAttribute("index");
    color.onclick = function(){
        var _index = this.getAttribute('index');
        fColor.src = "images/"+_index+".png";
        rColor.src = "images/"+_index+_index+".png";
        for(var j=0;j<colors.length;j++){
            colors[j].classList.remove("active");
        }
        this.classList.add("active");
        animate(fColor,{"left":20},function(){
            animate(fColor,{"left":0});
        });
        animate(rColor,{"left":-10},function(){
            animate(rColor,{"left":20});
        });
    };
}
