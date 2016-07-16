/**
 * Created by zhangxingong on 2016/7/15.
 */
function eventPrevent(domObj){
    var e = domObj.event;
    if ( e && e.preventDefault )
        e.preventDefault();
    else
        window.event.returnValue = false;
}

function showPic(whichPic){
    eventPrevent(whichPic);
    if(!document.getElementById("description"))return false;
    if(!document.getElementById("palceholder"))return false;
    if(whichPic.getAttribute("href")){
        var source = whichPic.getAttribute("href");
    }else{
        var source = "#";
    }

    if(whichPic.getAttribute("title")){//检测属性是否存在
        var title  = whichPic.getAttribute("title");
    }else {
        var title = "";
    }
    var description = document.getElementById("description");
    var placeholder = document.getElementById("palceholder");
    if(placeholder.nodeName != "IMG")return false;//判断节点的名字是不是<img>
    placeholder.setAttribute("src",source);
    //alert(description.childNodes[0].nodeValue);
    //alert(description.firstChild.nodeValue);
    if(description.firstChild.nodeType == 3){//第一个子节点的元素是文本元素
        description.firstChild.nodeValue = title;
    }
    return false;
}

//优化画廊
function prepareGallary(){//添加了方法坚持
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("imagegallery"))return false;
    var imagegallery = document.getElementById("imagegallery");
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick = function(){
            return !showPic(this);
        }
    }
}