/**
 * Created by Administrator on 2016/7/4.
 */
var w = window;
var d = w.document;
var n = w.navigator;
var h = w.history;
var l = w.location;

console.log(w);
console.log(d);
console.log(n);
console.log(h);
console.log(l);
//可现实的宽度、高度
console.log(w.innerWidth);
console.log(w.innerHeight);

//窗口的外部高度，宽度
console.log(w.outerHeight);
console.log(w.outerWidth);

console.log(w.outerWidth - w.innerWidth)
console.log(w.outerHeight - w.innerHeight)

console.log(w instanceof  Object)

//window常用方法

w.open("http://www.baidu.com","baidu")
w.close()
w.alert()
w.confirm()
w.frames

//doucument

d.forms
d.images
d.dir
d.documentMode
d.domain
d.cookie
d.links
d.onload
d.onclose
d.open()
d.location.href

n.appCodeName
n.appName
n.appVersion
n.cookieEnabled
n.javaEnabled()
n.platform

l.search

h.back()
h.forward()
h.go()
