/**
 * Created by GSS123 on 2016/10/6.
 */
//��װ���ݵ�scroLeft��scrollTop
function getScroll(){
    return{
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
    };

}

//����id��ȡ��Ӧ��Ԫ��
function my$(id) {
    return document.getElementById(id);
}

/*
 * element---�����Ԫ��
 * attr---����
 * */
function getAttrValue(element,attr) {
    return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}

/*
 * �ռ��汾�Ķ�������---��bug
 *
 * */
function animate(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;//���趼�ﵽ��Ŀ��
        for(var attr in json){
            if(attr=="opacity"){//�ж������ǲ���opacity
                var current= getAttrValue(element,attr)*100;
                //ÿ���ƶ����ٲ�
                var target=json[attr]*100;//ֱ�Ӹ�ֵ��һ������,����Ĵ��붼���ø�
                var step=(target-current)/10;//(Ŀ��-��ǰ)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){//�ж������ǲ���zIndex
                element.style[attr]=json[attr];
            }else{//��ͨ������

                //��ȡ��ǰ��λ��----getAttrValue(element,attr)��ȡ�����ַ�������
                var current= parseInt(getAttrValue(element,attr))||0;
                //ÿ���ƶ����ٲ�
                var target=json[attr];//ֱ�Ӹ�ֵ��һ������,����Ĵ��붼���ø�
                var step=(target-current)/10;//(Ŀ��-��ǰ)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current+"px";
            }
            if(current!=target){
                flag=false;//���û��Ŀ������Ϊfalse
            }
        }
        if(flag){//���Ϊtrue
            clearInterval(element.timeId);
            if(fn){//����û������˻ص��ĺ���
                fn(); //��ֱ�ӵĵ���,
            }
        }

    },10);
}
