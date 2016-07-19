/**
 * Created by Administrator on 2016/7/16.
 */

/**
 * addLoadEvent
 * insertAfter
 * preparePlaceholder
 * prepareGallery
 * showPic
 */

/**
 *
 */
function addLoadEvent(fuc){
    var oldload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = fuc;
    }else {
        oldload();
        fuc();
    }
}

/**
 *
 */
function insertAfter(newElement,targetElement){
    if(targetElement.parentNode.lastChild == targetElement){
        targetElement.appendChild(newElement);
    }else {
        targetElement.parentNode.insertBefore(newElement,targetElement.siblings());
    }
}

/**
 *
 */
function preparePlaceholder(){
    if(!document.createElement)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("imagegallery"))return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","../images/34858PIC6sf_1024.jpg");
    placeholder.setAttribute("width","450px");
    placeholder.setAttribute("height","450px");
    placeholder.setAttribute("title","show pic");

    var description = document.createElement("p");
    description.setAttribute("id","description");

    var destext = document.createTextNode("Choose an image");
    description.appendChild(destext);

    var gallery = document.getElementById("imagegallery");

    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

/**
 *
 */
function prepareGallery(){
    if(!document.getElementById)return false;
    if(!document.getElementById("placeholder"))return false;
    if(!document.getElementsByTagName)return false;
    var placeholder = document.getElementById("imagegallery");
    var links = placeholder.getElementsByTagName("a");

    for(var i=0;i<links.length;i++){
        links[i].onclick = function(){
            return !showPic(this);
        }

    }
}

/**
 *
 */
function showPic(whichPic){
    if(!document.getElementById("placeholder"))return false;
    if(!document.getElementById("description"))return false;
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName == "IMG"){
        var source = whichPic.getAttribute("href");
        placeholder.setAttribute("src",source)
    }

    var description = document.getElementById("description");
    if(description.firstChild.nodeType == 3){
        var text = whichPic.getAttribute("title")?whichPic.getAttribute("title"):"";
        description.firstChild.nodeValue = text;
    }
    return true;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);