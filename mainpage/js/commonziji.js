
//1获取id值
function my$(id){
    return document.getElementById(id);
};

//2获取innerText兼容
function getInnerText(element){//element表示的是标签
    return element.innerText?element.innerText:element.textContent;
};

//3设置innerText兼容
function setInnerText(element,value){//element是标签，value两个标签中间的内容
    if(element.innerText){
        element.innerText=value;
    }else{
        element.textContent=value;
    }
};


//4获取当前父元素的第一个子元素--兼容代码

function getFirstElement(element){//此时element是父元素
    if(element.firstElementChild){//如果支持直接返回
        return element.firstElementChild
    }else{//如果不支持element.firstElementChild属性
        var node = element.firstChild;//获取父元素的第一个子节点
        while(node&&node.nodeType!=1){//判断子节点是否存在是否是元素，如果不是继续往下找
            node = node.nextSibling;//当前子节点的下一个节点
        }
        return node;//循环结束，直接返回
    }
};
//5获取当前父元素的最后一个子元素--兼容代码
function getLastElement(element){
    if(element.lastElementChild){//如果支持直接返回
        return element.lastElementChild;
    }else{
        var node = element.lastChild;//如果不支持使用element.lastChild
        while(node&&node.nodeType!=1){
            node = node.previousSibling;//如果不是继续往上一个兄弟节点找
        }
        return node;//如果是，直接循环结束，直接返回
    }
};

//6获取当前元素的前一个兄弟元素
function getPreviousElementSibling(element){
    if(element.previousElementSibling){
        return element.previousElementSibling;
    }else{
        var node = element.previousSibling;
        while(node&&node.nodeType!=1){
            node = node.previousSibling;
        }
        return node;
    }
};


//7获取当前元素的下一个兄弟元素
function getNextElementSibling(element){
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        var node = element.nextSibling;
        while(node&&node.nodeType!=1){
            node = node.nextSibling;
        }
        return node;
    }
};

//8获取当前元素的所有的兄弟元素
function getSiblingElement(element) {
    var elements=[];//存储的是所有兄弟元素
    //先找当前元素的前面的所有的兄弟元素
    var node=element.previousSibling;
    while(node){
        if(node.nodeType==1){//是标签
            elements.push(node);
        }
        node=node.previousSibling;
    }
    //找当前元素的后面的所有的兄弟元素
    node=element.nextSibling;
    while(node){
        if(node.nodeType==1){
            elements.push(node);
        }
        node=node.nextSibling;
    }
    return elements;
}

//获取当前日期的函数
function getdate(dt){//dt是一个时间对象
    year = dt.getFullYear();//获取年份
    month = dt.getMonth()+1;//获取月份
    date = dt.getDate();//获取日期
    hours = dt.getHours();//获取小时
    minutes = dt.getMinutes();//获取分钟
    seconds = dt.getSeconds();//获取秒
    //如果月日小时分钟秒小于10 的话在前面加0
    month = month<10?"0"+month:month;
    date= date<10?"0"+date:date;
    hours = hours<10?"0"+hours:hours;
    minutes = minutes<10?"0"+minutes:minutes;
    seconds = seconds<10?"0"+seconds:seconds;
    return year+"年"+month+"月"+date+"日"+hours+":"+minutes+":"+seconds;
}

//获取scroll函数的封装
function getScroll(){
    return {
        left:window.pageXOffset||document.documentElement.scrollLeft
        ||document.body.scrollLeft||0,
        top:window.pageYOffset||document.documentElement.scrollTop
        ||document.body.scrollTop||0
    }

    var scroll = {
        left:window.pageXOffset||document.documentElement.scrollLeft
        ||document.body.scrollLeft||0,
        top:window.pageYOffset||document.documentElement.scrollTop
        ||document.body.scrollTop||0
    }
};

//封装兼容可视区域的坐标及pageX和pageY的坐标
var eventTools = {
    getEvt:function (e){
        return e||window.event;
    },

    getClientX:function(e) {
        return this.getEvt(e).clientX;
    },
    getClientY:function(e) {
        return this.getEvt(e).clientY;
    },
    getPageX:function(e) {
        return this.getEvt(e).pageX?this.getEvt(e).pageX:this.getClientX(e)+(window.pageXOffset||document.documentElement.scrollLeft
        ||document.body.scrollLeft||0);
    },
    getpageY:function(e) {
        return this.getEvt(e).pageY?this.getEvt(e).pageY:this.getClientY(e)+(window.pageYOffset||document.documentElement.scrollTop
        ||document.body.scrollTop||0);
    }
}

//获取可是区域的内容的宽度和高度
function getClient(){
    return {
        width: window.innerWidth||document.documentElement.clientWidth
        ||document.body.clientWidth||0,
        height:window.innerHeight||document.documentElement.clientHeight
        ||document.body.clientHeight||0
    }
};

//强大的动画函数封装完整版===================================================开始
//任意的元素可以获取任意的属性值left/top/
function getStyle(element,attribute){//element想要获取的元素  attribute传的是left top
    return element.currentStyle?element.currentStyle[attribute]:
    window.getComputedStyle(element,null)[attribute]||0;
};

//强大的动画函数封装完整版===================================================结束
function animateJD(element,target) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var step=8;
        var current=element.offsetLeft;
        step=current<target?step:-step;
        if(Math.abs(target-current)<=Math.abs(step)){
            clearInterval(element.timeId);
            element.style.left=target+"px";
        }else{
            current=current+step;
            element.style.left=current+"px";
        }
    },10);
}


//为任意的元素注册任意的事件
function myAddEventListener(element,eventName,fn){
    if(element.addEventListener){
        element.addEventListener(eventName,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+eventName,fn);
    }else{
        element["on"+eventName] = fn;
    }
};
//移除事件的兼容封装函数
function myRemoveEventListener(element,eventName,fn){
    if(removeEventListener){
        element.removeEventListener(eventName,fn,false);
    }else if(detachEvent){
        element.detachEvent("on"+eventName,fn);
    }else{
        element["on"+eventName] = null;
    }
};
