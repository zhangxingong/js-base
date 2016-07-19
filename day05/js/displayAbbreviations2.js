/**
 * Created by Administrator on 2016/7/17.
 */
function displayAbbreviations(){
    if(!document.createElement)return false;
    if(!document.createTextNode)return false;
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    //取得所有缩略语
    var abbrevations = document.getElementsByTagName("abbr");
    if(abbrevations.length<1)return false;
    //遍历这些缩略语
    var defs = new Array();
    for(var i=0;i<abbrevations.length;i++){
        var current_abbr = abbrevations[i];
        if(current_abbr.childNodes.length<1)continue;//todo:解决IE浏览器兼容问题
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    for(var key in defs){
        var definition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //把他们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.length<1)return false;//todo:检测空值

    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //把他们添加的页面上
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);