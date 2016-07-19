/**
 * Created by Administrator on 2016/7/17.
 */
function displayCitations(){
    if(!document.createElement)return false;
    if(!document.createTextNode)return false;
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    var quotes = document.getElementsByTagName("blockquote");
    for(var j=0;j<quotes.length;j++){
        var current_qoute = quotes[j];
        if(!current_qoute.getAttribute("cite")){continue;}
        var url = current_qoute.getAttribute("cite");
        var quoteChildren = current_qoute.getElementsByTagName('*');
        if(quoteChildren.length<1)continue;
        var elem = quoteChildren[quoteChildren.length-1];

        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);

        var superscript = document.createElement("sup");
        superscript.appendChild(link);

        elem.appendChild(superscript);
    }

}

addLoadEvent(displayCitations);