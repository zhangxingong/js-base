/**
 * Created by zhangxingong on 2016/7/15.
 */

/**
 * 1.���ĵ�������е����ӷŵ�һ���������
 * 2.��������
 * 3.���ĳ�����ӵ�class����
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