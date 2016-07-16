/**
 * Created by Administrator on 2016/7/16.
 */

//准备工作
function preparegallery(){
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("gallery"))return false;
    var gellery = document.getElementById("gallery");
    var links = gellery.getElementsByTagName("a");
    for(var i = 0;i < links.length;i++){
        eventPrevent(links[i]);
        links[i].onclick = function(){
            //return showPic(this)?false:true;
            return !showPic(this);
        }
        links[i].onclick = links[i].onkeypress;
    }
}

//显示画廊
function showPic(whichPic){
    if(!whichPic.getAttribute)return false;
    if(!whichPic.setAttribute)return false;
    if(document.getElementById("palceholder"))return false;
    var source = whichPic.getAttribute("href")?whichPic.getAttribute("href"):"javascript:void(0)";
    var palceholder = document.getElementById("palceholder");
    if(palceholder.nodeName != "IMG")return false;
    palceholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var text = whichPic.getAttribute("title")?whichPic.getAttribute("title"):"";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof  window.onload != 'function'){
        window.onload = func;
    }else{
        oldonload();
        func();
    }
}

function eventPrevent(domObj){
    var e = domObj.event;
    if ( e && e.preventDefault )
        e.preventDefault();
    else
        window.event.returnValue = false;
}
//程序入口
addLoadEvent(preparegallery);