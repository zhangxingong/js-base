/**
 * Created by Administrator on 2016/7/17.
 */
function getNewContent(){
    var request = getHTTPObject();
    if(request){
        request.open("GET","example.txt",true);
        /**
         * readystate
         * 0表示未初始化
         * 1表示正在加载
         * 2表示加载完毕
         * 3表示正在交换
         * 4表示完成
         */
        request.onreadystatechange= function(){
            if(request.readyState == 4 || request.readyState == 200){
                var para = document.createElement("p");
                var text = document.createTextNode(request.responseText);
                para.appendChild(text);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else {
        alert("Sorry,you brower doesn't support XMLHTTPRequest.");
    }
}

addLoadEvent(getNewContent);