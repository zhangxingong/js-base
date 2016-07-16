/**
 * Created by Administrator on 2016/7/16.
 */
function prepareplaceholder(){
    if(!document.createElement)return false;
    if(!document.createTextNode)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("imagegallery"))return false;
    var imagegallery = document.getElementById("imagegallery");
    var palceholder = document.createElement("img");
    palceholder.setAttribute("id","palceholder");
    palceholder.setAttribute("src","../images/34858PIC6sf_1024.jpg");
    palceholder.setAttribute("width","450px");
    palceholder.setAttribute("height","450px");
    palceholder.setAttribute("alt","choose a image");

    var description = document.createElement("p");
    description.setAttribute("id","description");

    var destext = document.createTextNode("Choose a image.");
    description.appendChild(destext);

    insertAfter(palceholder,imagegallery);
    insertAfter(description,palceholder);
}

//实现insertAfter
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
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