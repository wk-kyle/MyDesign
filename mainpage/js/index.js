
function my$(id) {
    return document.getElementById(id);
}
var allFlag=false;

function animate(element,target,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;
        var step=8;
        var current=element.offsetLeft;
        step=current<target?step:-step;
        if(Math.abs(target-current)<=Math.abs(step)){
            //clearInterval(element.timeId);
            element.style.left=target+"px";
            current=target;
        }else{
            current=current+step;
            element.style.left=current+"px";
        }
        if(current!=target){
            flag=false;//如果没到目标结果就为false
        }
        if(flag){//结果为true
            clearInterval(element.timeId);
            if(fn){//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
    },10);
}

//function animatefn(element,json,fn) {
//    clearInterval(element.timeId);
//    element.timeId=setInterval(function () {
//        var flag=true;//假设都达到了目标
//        for(var attr in json){
//            if(attr=="opacity"){//判断属性是不是opacity
//                var current= getAttrValue(element,attr)*100;
//                //每次移动多少步
//                var target=json[attr]*100;//直接赋值给一个变量,后面的代码都不用改
//                var step=(target-current)/10;//(目标-当前)/10
//                step=step>0?Math.ceil(step):Math.floor(step);
//                current=current+step;
//                element.style[attr]=current/100;
//            }else if(attr=="zIndex"){//判断属性是不是zIndex
//                element.style[attr]=json[attr];
//            }else{//普通的属性
//
//                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
//                var current= parseInt(getAttrValue(element,attr))||0;
//                //每次移动多少步
//                var target=json[attr];//直接赋值给一个变量,后面的代码都不用改
//                var step=(target-current)/10;//(目标-当前)/10
//                step=step>0?Math.ceil(step):Math.floor(step);
//                current=current+step;
//                element.style[attr]=current+"px";
//            }
//            if(current!=target){
//                flag=false;//如果没到目标结果就为false
//            }
//        }
//        if(flag){//结果为true
//            clearInterval(element.timeId);
//            if(fn){//如果用户传入了回调的函数
//                fn(); //就直接的调用,
//            }
//        }
//    },10);
//}

//筋斗云
var cWidth=60;
var cloud=my$("cloud");
var lis=my$("navBar").children;
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=mouseoverHandle;
    lis[i].onclick=clickHandle;
    lis[i].onmouseout=mouseoutHandle;
    console.log(cWidth);
}
function mouseoverHandle() {
    //到当前li标签
    cloud.style.width=this.children[0].children[0].offsetWidth+4+"px";
    console.log(cWidth);
    animate(cloud,this.children[0].children[0].offsetLeft-2);
}
var lastLeft=18;
//注册事件

function clickHandle() {
    lastLeft=this.children[0].children[0].offsetLeft-2;
    cWidth=this.children[0].children[0].offsetWidth+4;
}
function mouseoutHandle() {
    //返回位置
    cloud.style.width=cWidth+"px";
    animate(cloud,lastLeft);
}











//轮播图

var box=my$("box");
var screen=box.children[0];
var imgWidth=screen.offsetWidth;
var ul=screen.children[0];
var lis=ul.children;
var ol=screen.children[1];

var pic=0;

for(var i=0;i<lis.length;i++){
    var li=document.createElement("li");
    ol.appendChild(li);
    li.setAttribute("index",i);
    li.onclick=function(){
        allFlag=true;
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].removeAttribute("class");
        }
        this.className="current";
        var index=parseInt(this.getAttribute("index"));
        var target=-index*imgWidth;
        animate(ul,target, function () {
            allFlag=false;
        });
        pic=index;
    };
}


ol.children[0].className="current";
ul.appendChild(ul.children[0].cloneNode(true));

var setId=null;
box.onmouseover= function () {
    //my$("arr").style.display="block";
    clearInterval(setId);
};

box.onmouseout=function(){
    //my$("arr").style.display="none";
    setId=setInterval(rightHandle,5000);
};
setId=setInterval(rightHandle,5000);

//my$("right").onclick=rightHandle;
function rightHandle(){
    allFlag=true;
    if(pic==lis.length-1){
        pic=0;
        ul.style.left=0+"px";
    }
    pic++;
    var target=-pic*imgWidth;
    animate(ul,target, function () {
        allFlag=false;
    });
    if(pic==lis.length-1){
        ol.children[0].className="current";
        ol.children[ol.children.length-1].removeAttribute("class");

    }else{
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].removeAttribute("class");
        }
        ol.children[pic].className="current";
    }
}
//my$("left").onclick=function(){
//    if(pic==0){
//        pic=lis.length-1;
//        ul.style.left=-pic*imgWidth+"px";
//    }
//    pic--;
//    var target=-pic*imgWidth;
//    animate(ul,target);
//    for(var i=0;i<ol.children.length;i++){
//        ol.children[i].removeAttribute("class");
//    }
//    ol.children[pic].className="current";
//}

//鼠标跟随
function getRandomColor() {
    var str="#";
    var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    //var arr="0123456789abcdef";
    for(var i=0;i<6;i++){
        var random=parseInt(Math.random()*16);
        str+=arr[random];
    }
    return str;//把十六进制的值返回
}
window.onload= function (e) {
    for(var i=0;i<7;i++){
        imgObj=document.createElement("img");
        document.body.appendChild(imgObj);
        var x=parseInt(Math.random()*50);
        var y=parseInt(Math.random()*50);
        imgObj.style.left=e.pageX+x+"px";
        imgObj.style.top=e.pageY+y+"px";
        imgObj.style.backgroundColor=getRandomColor();
        imgObj.src="images/mouselogo.png";
        imgObj.className="img";

    }
}
setInterval(function () {
    document.onmousemove=function (e) {

        var imgObjs=document.getElementsByClassName("img");
        document.body.removeChild(imgObjs[0]);
        imgObj=document.createElement("img");
        document.body.appendChild(imgObj);
        var x=parseInt(Math.random()*70);
        var y=parseInt(2*Math.pow(2222-Math.pow(x-35,2),0.5)*Math.random()+35-Math.pow(1225-Math.pow(x-35,2),0.5));
        var size=parseInt(Math.random()*12+8);
        var deg=parseInt(Math.random()*360);
        imgObj.style.left=e.pageX+x-15+"px";
        imgObj.style.top=e.pageY+y+30+"px";
        imgObj.style.backgroundColor=getRandomColor();
        imgObj.style.height=size+"px";
        imgObj.style.transform="rotate(" +deg + "deg)";
        imgObj.src="images/mouselogo.png";
        imgObj.className="img";

    };
},0.1)


//轮播图3d
    $("#box3d").find("ul>li").mousemove(function (e) {
        //如果有标记 取消事件
        if(allFlag)return;
        //鼠标进入 取消父盒子隐藏 隐藏兄弟元素
        $(this).siblings().addClass("liHide");
        $(this).addClass("li3d");
        $("#box3d").addClass("boxShow");
        // 解决占位问题 闪一下
        if($(this).prev()){
            $(this).prev().css("margin-right","1220px");
            $(this).css("left",1220*$(this).index()+"px");
        }else{
            $(this).css("left","0");
            $(this).next().css("margin-left","1220px");
        }
            //效果
        var boxX=$("#box3d").offset().left+$("#box3d").width()/2;
        var boxY=$("#box3d").offset().top+$("#box3d").height()/2;
        var degX=(e.pageX-boxX)/120;
        var degY=(e.pageY-boxY)/80;
        var deg_X=0-(e.pageX-boxX)/120;
        var deg_Y=0-(e.pageY-boxY)/80;
        $(this).css("-webkit-transform"," rotateY("+degX+"deg) rotateX("+deg_Y+"deg)");
        $(".banner2").css("-webkit-transform","translate("+deg_X+"px,"+deg_Y+"px)");
        $(".banner3").css("-webkit-transform","translate("+degX+"px,"+degY+"px)");
        $(this).css("transition", "all 0s");
        $(".banner2").css("transition", "all 0s");
        $(".banner3").css("transition", "all 0s");
});

    $("#box3d").find("ul>li").mouseout(function (e) {
        //删除类
        $(this).css("transition", "all 0.3s");
        $(this).siblings().removeClass("liHide");
        $("#box3d").removeClass("boxShow");
        $(this).removeClass("li3d");
        $(this).removeAttr("style")
        $(this).siblings().css("margin","0");
    });






























