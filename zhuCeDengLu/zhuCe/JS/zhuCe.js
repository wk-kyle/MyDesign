var datas=[
    {"names": "阿尔巴尼亚","num":"+355"},
    {"names":"阿富汗","num":"+93"},
    {"names":"阿根廷","num":"+54"},
    {"names":"阿拉伯联合酋长国","num":"+971"},
    {"names":"阿鲁巴","num":"+297"},
    {"names":"阿曼","num":"+968"},
    {"names":"阿塞拜疆","num":"+994"},
    {"names":"阿根廷","num":"+54"},
    {"names":"阿根廷","num":"+54"},
    {"names":"阿根廷","num":"+54"},
    {"names":"阿根廷","num":"+54"},
    {"names":"阿根廷","num":"+54"},
    {"names":"中国","num":"+86"}
]
var data2=[
    {"name1":"b93j","name2":"B93J","srcs":"a"},
    {"name1":"m7rr","name2":"M7RR","srcs":"b"},
    {"name1":"p2f6","name2":"P2F6","srcs":"c"},
    {"name1":"pvgp","name2":"PVGP","srcs":"d"},
    {"name1":"3xgj","name2":"3XGJ","srcs":"e"},
    {"name1":"tgpt","name2":"TGPT","srcs":"f"},
    {"name1":"fw37","name2":"FW37","srcs":"g"},
    {"name1":"ehgx","name2":"EHGX","srcs":"h"},
    {"name1":"44xt","name2":"44XT","srcs":"i"},
    {"name1":"e86f","name2":"E86F","srcs":"j"}
];
var phone=document.getElementById("phone");
var phonetxt=document.getElementById("phonetxt");
var moren1=document.getElementById("moren1");
var wrong1=document.getElementById("wrong1");
var guojiaName=document.getElementById("guojiaName");
var xicon=document.getElementById("xicon");
var zhuce=document.getElementById("zhuce");

var tongyiImg=document.getElementById("wordimg");
var tongyi=document.getElementById("word");
var tongyiIndex=true;

var yanzheng=document.getElementById("yanzheng");
var yanzhengtxt=document.getElementById("yanzhengtxt");
var moren2=document.getElementById("moren2");
var wrong2=document.getElementById("wrong2");
var DXyanzhengimg=document.getElementById("DXyanzhengimg");
var index=0;
var psstishi=document.getElementById("psstishi");

var yanzhengOk=false;
var yanzhengImg=document.getElementById("yanzhengImg");
var yZimg2=document.getElementById("yZimg2");

var DXyanzheng=document.getElementById("DXyanzheng");
var DXyanzhengtxt=document.getElementById("DXyanzhengtxt");
var DXyanzhengimg=document.getElementById("DXyanzhengimg");
var moren3=document.getElementById("moren3");
var wrong3=document.getElementById("wrong3");
var randoms="";

var email=document.getElementById("email");
var emailtxt=document.getElementById("emailtxt");
var moren4=document.getElementById("moren4");
var wrong4=document.getElementById("wrong4");

var password=document.getElementById("password");
var passwordtxt=document.getElementById("passwordtxt");
var moren5=document.getElementById("moren5");
var wrong5=document.getElementById("wrong5");

var passwordOk=false;
var newpassword=document.getElementById("newpassword");
var newpasswordtxt=document.getElementById("newpasswordtxt");
var moren6=document.getElementById("moren6");
var wrong6=document.getElementById("wrong6");
var newpasswordOk=false;
var emailOk=false;
var phoneOk=false;
var china=document.getElementById("china");
var zgpic=document.getElementById("zgpic");
var guojia=document.getElementById("guojia");
var uu1=document.getElementById("uu1");
var flag=true;
var quhao=document.getElementById("quhao");
var setId=null;
var mask=document.getElementById("mask");
var jumpmove=document.getElementById("jumpmove");
var back=document.getElementById("back");
var jump=document.getElementById("jump");
//输入框在点击时，边框变蓝色
phonetxt.onclick=function(){
    phone.style.border="1px solid blue";
};
//输入框的默认值在点击时，能够获取到光标
moren1.onclick= function () {
    phone.style.border="1px solid blue";
    phonetxt.focus();
};
//电话的输入框如果有内容则取消默认值
phonetxt.onfocus=function(){
    phonetxt.onkeyup=function(){
        if(phonetxt.value.length>0){
            moren1.style.display="none";
            phone.style.border="1px solid blue";
            wrong1.style.display="none";
            if(phonetxt.value.length>5&&yanzhengOk){
                DXyanzhengimg.style.backgroundColor="#ECECEC";
                DXyanzhengimg.style.color="#666666";
                DXyanzhengimg.style.cursor="pointer";
            }else{
                DXyanzhengimg.style.backgroundColor="#F7F7F7";
                DXyanzhengimg.style.color="#C2C2C2";
                DXyanzhengimg.style.cursor="not-allowed";
            }
        }
    }
};

//判断输入的电话号码是否正确
phonetxt.onblur=function(){

    phone.style.border="1px solid #DADADA";
    if(phonetxt.value.length==0){
        wrong1.style.display="none";
        moren1.style.display="block";
    }else if(isNaN(phonetxt.value)||phonetxt.value.length<5||phonetxt.value.length>11){
        phone.style.border="1px solid #D16D62";
        wrong1.style.display="block";
        wrong1.innerHTML="手机格式错误";

    }else{
        wrong1.style.display="none";
        var reg1=/^[1](([3][0-9])|([4][7])|([5][0-9])|([7][07])|([8][0-9]))[0-9]{8}$/;
        if(reg1.test(phonetxt.value)){
            phoneOk=true;
            phone.style.border="1px solid #DADADA";
            wrong1.style.display="none";
        }else{
            phoneOk=false;
            phone.style.border="1px solid #D16D62";
            wrong1.style.display="block";
            wrong1.innerHTML="手机格式错误";
        }
    }
};

//这个函数是用来动态的添加国家列表及样式
function creat(){
    for(var i=0;i<datas.length;i++){
        var span=document.createElement("span");
        uu1.appendChild(span);
        var li=document.createElement("li");
        uu1.appendChild(li);
        li.setAttribute("dex",i);
        uu1.style.position="relative";
        span.style.width="40px";
        span.style.height="40px";
        span.style.position="absolute";
        span.style.right="0px";
        span.style.display="none";
        span.style.backgroundImage="url(../images/ok.png)";
        li.innerHTML=datas[i].names;
        li.onmouseover=lioverHandle;
        li.onclick=liClickHandle;
    }
}
creat();
//国家的改变的收起和打开
    china.onclick= function (e) {
        e.stopPropagation();
        if(flag){
            flag=false;
            guojia.style.display="block";
            xicon.style.display="block";
        }else{
            flag=true;
            guojia.style.display="none";
            xicon.style.display="none";
        }
        };

    china.onmouseover= function () {
      zgpic.style.display="block";
    };
china.onmouseout= function () {
    zgpic.style.display="none";
};

zgpic.onmouseover= function (e) {
  this.style.display="block";
    e.stopPropagation();
};

//鼠标进入li标签的样式
document.onclick= function () {
    flag=true;
    guojia.style.display="none";
    xicon.style.display="none";
};
function lioverHandle(){
    //排他的样式
    for(var i=0;i<datas.length;i++){
        var li2=uu1.getElementsByTagName("li");
        li2[i].style.backgroundColor="#FFF";
        li2[i].style.color="#999";
        li2[i].style.fontWeight="400";
    }
    //当前的样式
    this.style.backgroundColor="#FAFAFA";
    this.style.color="#666";
    this.style.fontWeight="900";
}
//点击每一个国家的标签时的设置
function liClickHandle(){
    //去除所有非选中的对钩的样式
    for(var i=0;i<datas.length;i++) {
        var span=uu1.getElementsByTagName("span");
        span[i].style.display="none";
    }
    //当前选中Li标签的对钩和其他的样式
    this.style.backgroundColor="#FFF";
    this.style.color="#666";
    this.style.fontWeight="900";
    this.previousElementSibling.style.display="block";
    flag=true;
    guojia.style.display="none";
    xicon.style.display="none";
    var str1=datas[this.getAttribute("dex")].names;
    var str2="";
    if(str1.length>4){
        var strsub=str1.substr(0,3);
        str2=strsub+"...";
    }else{
        str2=str1;
    }
    quhao.innerHTML=datas[this.getAttribute("dex")].num;
    guojiaName.innerHTML=str2;
    zgpic.innerHTML=str1;
    }

yanzhengtxt.onclick=function(){
    yanzheng.style.border="1px solid blue";
};
moren2.onclick= function () {
    yanzheng.style.border="1px solid blue";
    yanzhengtxt.focus();
};
yanzhengtxt.onfocus=function(){
    yanzhengtxt.onkeyup=function(){
        wrong2.style.display="none";
        if(yanzhengtxt.value.length>0){
            moren2.style.display="none";
            if(setId==null){
                if(phoneOk){
                    DXyanzhengimg.style.backgroundColor="#ECECEC";
                    DXyanzhengimg.style.color="#666666";
                    DXyanzhengimg.style.cursor="pointer";
                }else{
                    DXyanzhengimg.style.backgroundColor="#F7F7F7";
                    DXyanzhengimg.style.color="#C2C2C2";
                    DXyanzhengimg.style.cursor="not-allowed";
                }
            }
        }
    }
};

yanzhengtxt.onblur=function(){
    yanzheng.style.border="1px solid #DADADA";
    if(yanzhengtxt.value.length==0){
        //wrong2.style.display="none";
        moren2.style.display="block";
        yanzhengOk=false;
    }else if(data2[index].name1==yanzhengtxt.value||data2[index].name2==yanzhengtxt.value){//没写完，不等于时
        wrong2.style.display="none";
        yanzhengOk=true;
    }else{
        yanzhengOk=false;

    }
};

//图片验证码的设置============================开始


//以下这三个鼠标进入事件都是为了验证码图片的设置
yanzhengImg.onmouseover= function (e) {
    yZimg2.style.display="block";
    e.stopPropagation();
};
yZimg2.onmouseover= function (e) {
    yZimg2.style.display="block";
    e.stopPropagation();
};
document.onmouseover= function () {
    yZimg2.style.display="none";
};

//这是验证码图片的切换控制
yZimg2.onclick= function () {
    index++;
    if(index==9){
        index=0;
    }
    yanzhengImg.style.backgroundImage="url(../images/"+data2[index].srcs+".png)";
};

//图片验证码的设置============================结束
DXyanzhengimg.onclick= function () {
    if(phonetxt.value==0) {
        wrong1.innerHTML = "请输入手机号";
        wrong1.style.display = "block";
        phone.style.border = "1px solid #D16D62";
        animate(phone, {"left": "20"}, function () {
            animate(phone, {"left": "60"}, function () {
                animate(phone, {"left": "40"})
            })
        });
    }
    if(!yanzhengOk){
        yanzheng.style.border="1px solid #D16D62";
        wrong2.innerHTML="验证码错误";
        wrong2.style.display="block";
        DXyanzhengimg.style.backgroundColor="#F7F7F7";
        DXyanzhengimg.style.color="#C2C2C2";
        DXyanzhengimg.style.cursor="not-allowed";
    }
    var k=60;
    if(setId==null&&yanzhengOk&&phoneOk){
        DXyanzhengimg.style.cursor="not-allowed";
        DXyanzhengimg.innerHTML="重新发送"+k;
        DXyanzhengimg.style.backgroundColor="#F7F7F7";
        DXyanzhengimg.style.color="#C2C2C2";
        setId=setInterval(function () {
            if(k>0){
                k--;
                DXyanzhengimg.innerHTML="重新发送"+k;
            }else{
                //DXyanzhengimg.style.cursor="pointer";
                DXyanzhengimg.innerHTML="获取验证码";
                DXyanzhengimg.style.backgroundColor="#ECECEC";
                DXyanzhengimg.style.color="#666666";
                DXyanzhengimg.style.cursor="pointer";
                clearInterval(setId);
                setId=null;
            }
        },1000);
        if(yanzhengOk){
            randoms="";
            for(var i=0;i<6;i++){
                randoms+=parseInt(Math.random()*10);
            }
            console.log("手机验证码："+randoms);
            wrong2.style.display="none";
        }else{
            yanzheng.style.border="1px solid #D16D62";
            wrong2.innerHTML="验证码错误";
            wrong2.style.display="block";
            //DXyanzhengimg.style.cursor="not-allowed";
        }
    }

};

DXyanzhengtxt.onclick=function(){
    DXyanzheng.style.border="1px solid blue";

};

moren3.onclick= function () {
    DXyanzheng.style.border="1px solid blue";
    DXyanzhengtxt.focus();
};
DXyanzhengtxt.onfocus=function(){
    DXyanzhengtxt.onkeyup=function(){
        if(DXyanzhengtxt.value.length==0){
            moren3.style.display="block";
        }else{
            moren3.style.display="none";
            wrong3.style.display="none";
        }
        if (!tongyiIndex&&phoneOk&& yanzhengOk&& DXyanzhengtxt.value == randoms && emailOk&& passwordOk && newpasswordtxt.value == passwordtxt.value) {
            zhuce.style.backgroundColor = "#5F7ED7";
            zhuce.style.cursor = "pointer";
        }else{
            zhuce.style.backgroundColor = "#BAC6EA";
            zhuce.style.cursor = "not-allowed";
        }
    }
};
DXyanzhengtxt.onblur=function(){
    DXyanzheng.style.border="1px solid #DADADA";
    if(randoms==DXyanzhengtxt.value){
        wrong3.style.display="none";
        DXyanzheng.style.border="1px solid #DADADA";
    }
};

emailtxt.onclick=function(){
    email.style.border="1px solid blue";
};

moren4.onclick= function () {
    email.style.border="1px solid blue";
    emailtxt.focus();
};
emailtxt.onfocus=function(){
    email.style.border="1px solid blue";

    emailtxt.onkeyup=function(){
        if(emailtxt.value.length==0){
            moren4.style.display="block";
            wrong4.style.display="none";
            email.style.border="1px solid blue";
        }else{
            moren4.style.display="none";
            email.style.border="1px solid blue";
            wrong4.style.display="none";
        }

    }
};

emailtxt.onblur=function(){
    var reg2=/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_-]+([.][a-zA-Z]+){1,2}$/;
    email.style.border="1px solid #DADADA";
    if(reg2.test(emailtxt.value)){
        emailOk=true;
        wrong4.style.display="none";
        email.style.border="1px solid #DADADA";
    }else if(emailtxt.value.length==0){
        wrong4.style.display="none";
    }else{
        emailOk=false;
        wrong4.innerHTML="邮箱格式错误";
        wrong4.style.display="block";
        email.style.border="1px solid #D16D62";
    }
    if (!tongyiIndex&&phoneOk&& yanzhengOk&& DXyanzhengtxt.value == randoms && emailOk&& passwordOk && newpasswordtxt.value == passwordtxt.value) {
        zhuce.style.backgroundColor = "#5F7ED7";
        zhuce.style.cursor = "pointer";
    }else{
        zhuce.style.backgroundColor = "#BAC6EA";
        zhuce.style.cursor = "not-allowed";
    }
};

passwordtxt.onclick=function(){
    password.style.border="1px solid blue";
};

moren5.onclick= function () {
    password.style.border="1px solid blue";
    passwordtxt.focus();
};
passwordtxt.onfocus=function(){
    password.style.border="1px solid blue";
    psstishi.style.display="block";
    psstishi.style.top="47px";
    passwordtxt.onkeyup=function(){
        if(newpasswordtxt.value!=0&&newpasswordtxt.value!=passwordtxt){
            newpasswordOk=false;
            wrong6.innerHTML="两次密码输入不一致";
            wrong6.style.display="block";
            newpassword.style.border="1px solid #D16D62";
        }
        if(passwordtxt.value.length==0){
            moren5.style.display="block";
            wrong5.style.display="none";
            password.style.border="1px solid blue";
        }else{
            moren5.style.display="none";
            password.style.border="1px solid blue";
            wrong5.style.display="none";
        }
        if (!tongyiIndex&&phoneOk&& yanzhengOk&& DXyanzhengtxt.value == randoms && emailOk&& passwordOk && newpasswordtxt.value == passwordtxt.value) {
            zhuce.style.backgroundColor = "#5F7ED7";
            zhuce.style.cursor = "pointer";
        }else{
            zhuce.style.backgroundColor = "#BAC6EA";
            zhuce.style.cursor = "not-allowed";
        }
    }
};

passwordtxt.onblur=function(){
    var reg2=/^.{6,16}$/;
    psstishi.style.display="none";
    password.style.border="1px solid #DADADA";

    if(reg2.test(passwordtxt.value)){
        passwordOk=true;
        wrong5.style.display="none";
        password.style.border="1px solid #DADADA";
    }else if(passwordtxt.value.length==0){
        wrong5.style.display="none";
        passwordOk=false;
    }else{
        passwordOk=false;
        wrong5.innerHTML="密码格式错误";
        wrong5.style.display="block";
        password.style.border="1px solid #D16D62";
    }
};

newpasswordtxt.onclick=function(){
    newpassword.style.border="1px solid blue";
};

moren6.onclick= function () {
    newpassword.style.border="1px solid blue";
    newpasswordtxt.focus();
};
newpasswordtxt.onfocus=function(){
    newpassword.style.border="1px solid blue";
    psstishi.style.display="block";
    psstishi.style.top="112px";
    newpasswordtxt.onkeyup=function() {
        if (newpasswordtxt.value.length == 0) {
            moren6.style.display = "block";
            wrong6.style.display = "none";
            newpassword.style.border = "1px solid blue";
        } else {
            moren6.style.display = "none";
            newpassword.style.border = "1px solid blue";
            wrong6.style.display = "none";
        }

        if (!tongyiIndex&&phoneOk&& yanzhengOk&& DXyanzhengtxt.value == randoms && emailOk&& passwordOk && newpasswordtxt.value == passwordtxt.value) {
            zhuce.style.backgroundColor = "#5F7ED7";
            zhuce.style.cursor = "pointer";
        }else if(newpasswordtxt.value.length==0){
            wrong6.style.display="none";
        }else{
            zhuce.style.backgroundColor = "#BAC6EA";
            zhuce.style.cursor = "not-allowed";
        }
    }
};

newpasswordtxt.onblur=function(){
    psstishi.style.display="none";
    newpassword.style.border="1px solid #DADADA";

    if(newpasswordtxt.value==passwordtxt.value){
        newpasswordOk=true;
        wrong6.style.display="none";
        newpassword.style.border="1px solid #DADADA";
    }else if(newpasswordtxt.value.length==0){
        wrong6.style.display="none";
        newpasswordOk=false;
    }else{
        newpasswordOk=false;
        wrong6.innerHTML="两次密码输入不一致";
        wrong6.style.display="block";
        newpassword.style.border="1px solid #D16D62";
    }
};

//同意书的点击，变成蓝色的按钮或灰色的按钮=================开始

    tongyi.onclick= function () {

        if(tongyiIndex){
            tongyiIndex=false;
            tongyiImg.style.backgroundImage="url(../images/check2.png)";
        }else{
            tongyiIndex=true;
            tongyiImg.style.backgroundImage="url(../images/check1.png)";
        }

        if (!tongyiIndex&&phoneOk&& yanzhengOk&& DXyanzhengtxt.value == randoms && emailOk&& passwordOk && newpasswordtxt.value == passwordtxt.value) {
            zhuce.style.backgroundColor = "#5F7ED7";
            zhuce.style.cursor = "pointer";
        }else{
            zhuce.style.backgroundColor = "#BAC6EA";
            zhuce.style.cursor = "not-allowed";
        }
    };
//同意书的点击，变成蓝色的按钮或灰色的按钮=================结束

document.onclick= function () {
    mask.style.display="none";
    jump.style.display="none";
}

jump.onclick= function (e) {
    e.stopPropagation();
}
back.onclick= function () {
    mask.style.display="none";
    jump.style.display="none";
    // return false;
};

jumpmove.onmousedown= function (e) {
    var x= e.clientX-jump.offsetLeft;
    var y= e.clientY-jump.offsetTop;
    document.onmousemove= function (e) {
        var left= e.clientX-x;
        var top= e.clientY-y;

        jump.style.left=left+"px";
        jump.style.top=top+"px";
    };
}

document.onmouseup= function () {
    document.onmousemove=null;
};

zhuce.onclick=function(e){


        if(!phoneOk) {
            animate(phone, {"left": "20"}, function () {
                animate(phone, {"left": "60"}, function () {
                    animate(phone, {"left": "40"})
                })
            });
        }

            if (phonetxt.value.length == 0) {
                wrong1.innerHTML = "请输入手机号";
                wrong1.style.display = "block";
                phone.style.border = "1px solid #D16D62";
            } else if (phoneOk) {
                wrong1.style.display = "none";
                phone.style.border = "1px solid #DADADA";
            } else {
                wrong1.innerHTML = "手机格式错误";
                wrong1.style.display = "block";
                phone.style.border = "1px solid #D16D62";
            }

            if (yanzhengtxt.value.length == 0) {
                wrong2.innerHTML = "请输入验证码";
                wrong2.style.display = "block";
                yanzheng.style.border = "1px solid #D16D62";
            } else if (phoneOk) {
                wrong2.style.display = "none";
                yanzheng.style.border = "1px solid #DADADA";
            } else {
                wrong2.innerHTML = "验证码错误";
                wrong2.style.display = "block";
                yanzheng.style.border = "1px solid #D16D62";
            }

            if (DXyanzhengtxt.value.length == 0) {
                wrong3.innerHTML = "请输入验证码";
                wrong3.style.display = "block";
                DXyanzheng.style.border = "1px solid #D16D62";
            } else if (DXyanzhengtxt.value==randoms) {
                wrong3.style.display = "none";
                DXyanzheng.style.border = "1px solid #DADADA";
            } else {
                wrong3.innerHTML = "验证码错误";
                wrong3.style.display = "block";
                DXyanzheng.style.border = "1px solid #D16D62";
            }


            if (emailtxt.value.length == 0) {
                wrong4.innerHTML = "请输入邮箱";
                wrong4.style.display = "block";
                email.style.border = "1px solid #D16D62";
            } else if (emailOk) {
                wrong4.style.display = "none";
                email.style.border = "1px solid #DADADA";
            } else {
                wrong4.innerHTML = "邮箱格式错误";
                wrong4.style.display = "block";
                email.style.border = "1px solid #D16D62";
            }


            if (passwordtxt.value.length == 0) {
                wrong5.innerHTML = "请输入密码";
                wrong5.style.display = "block";
                password.style.border = "1px solid #D16D62";
            } else if (emailOk) {
                wrong5.style.display = "none";
                password.style.border = "1px solid #DADADA";
            } else {
                wrong5.innerHTML = "密码格式错误";
                wrong5.style.display = "block";
                password.style.border = "1px solid #D16D62";
            }


            if (newpasswordtxt.value.length == 0) {
                wrong6.innerHTML = "请重复输入密码";
                wrong6.style.display = "block";
                newpassword.style.border = "1px solid #D16D62";
            } else if (newpasswordOk) {
                wrong6.style.display = "none";
                newpassword.style.border = "1px solid #DADADA";
            } else {
                wrong6.innerHTML = "两次密码输入不一致";
                wrong6.style.display = "block";
                newpassword.style.border = "1px solid #D16D62";
            }

    if(!tongyiIndex&&newpasswordtxt.value==passwordtxt.value&&phoneOk==true&&yanzhengOk==true&&DXyanzhengtxt.value==randoms&&emailOk==true&&passwordOk==true){
        mask.style.display="block";
        jump.style.display="block";
        e.stopPropagation();
        tongyi=false;
        phonetxt.value="";
        yanzhengtxt.value="";
        DXyanzhengtxt.value="";
        passwordtxt.value="";
        newpasswordtxt.value="";
        emailtxt.value="";
        phoneOk=false;
        yanzhengOk=false;
        passwordOk=false;
        newpasswordOk=false;
        emailOk=false;
        tongyiImg.style.backgroundImage="url(../images/check1.png)";
        zhuce.style.backgroundColor = "#BAC6EA";
        zhuce.style.cursor = "not-allowed";
        clearInterval(setId);
        DXyanzhengimg.innerHTML="获取验证码";
        setId=null;
    }
}




function getStyle(element,attr){
    return element.currentStyle?element.currentStyle[attr]:window.getComputedStyle(element,null)[attr]||0;
}
//缓动动画的封装

function animate(element,json,fn){
    clearInterval(element.setId);
    element.setId=setInterval(function () {
        var flag=true;
        for(var attr in json){
            if(attr=="opcity"){
                var current=getStyle(element,attr)*100||0;
                var target=json[attr]*100;
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){
                element.style.zIndex=json[attr];
            }else{
                var current=parseInt(getStyle(element,attr))||0;
                var target=json[attr];
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current+"px";
            }
            if(current!=target){
                flag=false;
            }
        }
        if(flag){
            clearInterval(element.setId);
            if(fn){
                fn();
            }
        }
    },5);
}
