/**
 * Created by zhangxingong on 2016/7/19.
 */
//数组是有序集合
var arr = [];
var array = new Array();

//<<<<<<数组方法
// Array.join()

var a = [1,2,3];
a.join() // =>1,2,3
a.join(" ") // => 1 2 3
a.join("") // => 123
var b = new Array(10);
b.join('-') // => ----------


// Array.reverse()

var a = [1,2,3];
a.reverse().join() // => 3,2,1

// Array.sort()
var a = new Array("banana","cherry","apple");
a.sort();
var s = a.join(", "); //s == "apple, banana, cherry"

var a = [33,4,1111,222];
a.sort();
a.sort(function(a,b){
    return a- b;
});

a.sort(function(a,b){return b-a});

//Array concat()
var a = [1,2,3];
a.concat(4,5);
a.concat([4,5]);
a.concat([4,5],[6,7]);
a.concat(4,[5,[6,7]]);

//Array slice()
var a = [1,2,3,4,5];
a.slice(0,3); // => [1,2,3]
a.slice(3);   // => [4,5]
a.slice(1,-1); // => [2,3,4,5]
a.slice(-3,-2); // => [3]

//Array splice()
var a = [1,2,3,4,5,6,7,8];
a.splice(4); // => [5,6,7,8]
a.splice(1,2); // => [2,3]
a.splice(1,1); // =>[4]

var a = [1,2,3,4,5];
a.splice(2,0,'a','b'); // => [1,2,'a','b',3,4,5]
a.splice(2,2,[1,2],3); // => [1,2,[1,2],3,3,5]

//Array push() pop()

//Array unshift() shift()

//Array toStirng() toLocalString()

//ECMA5
array.forEach(function(v,i,a){})

//map()
a = [1,2,3];
b = a.map(function(x){return x*x;}); // b => [1,4,9]

//filter
//返回子集
a = [5,4,3,2,1];
smallvalues = a.filter(function(x){return x <3;}) // => [2,1]
everyother  = a.filter(function(x,i){return i%2 ==0}) // => [5,3,1]

//every() 和 some
a = [1,2,3,4,5];
a.every(function(x){ return x < 10}) // => true
a.every(function(x){ return x %2 === 0}) // => false

a.some(function(x){return x%2===0}) // =>true
a.some(isNaN) // => false

//array reduce reduceRight

var a = [1,2,3,4,5];
var sume = a.reduce(function(x,y){return x+y;},0); //数组求和
var product = a.reduce(function(x,y){return x*y;},1);//数组求积
var max = a.reduce(function(x,y){return (x>y)?x:y});//求最大值

//indexof lastindexof

// isArray()

// Array.prototype

//作为数组的字符串
var s = test;
s.charAt(0);
s[1];

s = "Javascript"

Array.prototype.join.call(s," ") // "J a v a s c r i p t
Array.prototype.filter.call(s,
    function(x){
        return x.match(/[^aeiou]/);//只匹配非元音字母
    }).join("");
