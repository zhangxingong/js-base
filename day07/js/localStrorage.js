/**
 * Created by zhangxingong on 2016/7/21.
 */

localStorage.setItem("x",1);
localStorage.setItem("x");

///枚举所有存储的名字/值对
for(var i = 0;i< localStorage.length;i++){
    var name = localStorage.key(i);
    var value= localStorage.getItem(name);
}

localStorage.removeItem("x");
localStorage.clear();