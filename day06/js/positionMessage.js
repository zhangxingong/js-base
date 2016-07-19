/**
 * Created by Administrator on 2016/7/17.
 */
function positionMessage(){
    if(!document.getElementById)return false;
    if(!document.getElementById("message"))return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveElement(elem,125,25,20);
}
addLoadEvent(positionMessage);