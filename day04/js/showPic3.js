/**
 * Created by Administrator on 2016/7/16.
 */

window.onload = function(){
    var placeholder = document.createElement("img");
        placeholder.setAttribute("id","palceholder");
        placeholder.setAttribute("src","../images/34858PIC6sf_1024.jpg");
        placeholder.setAttribute("alt","my image gallery");
        placeholder.setAttribute("width","450px");
        placeholder.setAttribute("height","450px");
    var description = document.createElement("p");
        description.setAttribute("id","description");

    var destext = document.createTextNode("Choose an image");

        description.appendChild(destext);

    var gallery = document.getElementById("iamgegallery");
        gallery.parentNode.insertBefore(placeholder,gallery);

    document.getElementsByTagName("body")[0].appendChild(placeholder);
    document.getElementsByTagName("body")[0].appendChild(description);
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