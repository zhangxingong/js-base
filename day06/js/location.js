/**
 * Created by zhangxingong on 2016/7/22.
 */
//获取地理信息HTML5 API
//navigator.geolocation.getCurrentPosition()
//navigator.geolocation.watchPosition()
//navigator.geolocation.clearWatch()
/**
 * 获取当前位置
 */
navigator.geolocation.getCurrentPosition(function(pos){
    var latitude  = pos.coords.latitude;
    var longitude = pos.coords.longitude;
    alert("You position: "+latitude + ", " + longitude);
});
//返回一张img标签的Google地铁
function getmap(){
    //检查是否支持地址位置API
    if(!navigator.geolocation) throw "Geolocation not supported";

    //创建一个新的<img>元素，并开始请求地理位置信息,
    //img元素显示包含当前位置的地图，然后再将返回该图片
    var image = document.createElement("img");
    navigator.geolocation.getCurrentPosition(setMapURL);
    return image;
}
//当（如果）成功获取到地理位置信息后，会在返回image对象后调用此方法
function setMapURL(pos){
    var latitude  = pos.coords.latitude; //经度
    var longitude = pos.coords.longitude; //维度
    var accuracy  = pos.coords.accuracy;//米

    //构造一个ＵＲＬ，用于显示当前位置的静态Google地图
    var url = "http://maps.google.com/maps/api/staticmap" +
       "?center=" + latitude + "," + longitude + "&size=640*640&sensor=true";

    //设置一个大致的缩放级别
    var zoomlevel = 20;//以各种方式开始缩放
    if(accuracy > 80)
        zoomlevel -= Math.round(Math.log(accuracy/50)/Math.LN2);
    url += "&zoom" + zoomlevel;

    //现在在iamge对象中显示该地图。感谢Google
    image.src = url;
}