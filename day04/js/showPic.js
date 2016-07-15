/**
 * Created by zhangxingong on 2016/7/15.
 */
function showPic(whichPic){
    var e = whichPic.event;
    if ( e && e.preventDefault )
        e.preventDefault();
    else
        window.event.returnValue = false;
    var source = whichPic.getAttribute("href");
    var title  = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    var placeholder = window.document.getElementById("palceholder");
    placeholder.setAttribute("src",source);
    //alert(description.childNodes[0].nodeValue);
    //alert(description.firstChild.nodeValue);
    description.firstChild.nodeValue = title;
    return false;
}