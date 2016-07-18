/**
 * Created by zhangxingong on 2016/7/15.
 */

/**
 * 1.把文档里的所有的链接放到一个数组里边
 * 2.遍历数组
 * 3.如果某个链接的class属性
 * @type {NodeList}
 */
function init(){
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        if(links[i].className == "popup"){
            links[i].onclick = function(){
                popup(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function popup(winURL){
    window.open(winURL,"popup","width=320,height=480");
}

window.onload = function(){
    /**
     * if(!method)return false;
     */
    if(!document.getElementsByTagName) return false;
    init();
}