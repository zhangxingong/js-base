/**
 * Created by Administrator on 2016/7/17.
 */
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }

}