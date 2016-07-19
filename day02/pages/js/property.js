/**
 * Created by zhangxingong on 2016/7/19.
 */
var o = {};//创建空对象
//添加一个不可枚举数据属性x
Object.defineProperty(o,"x",{
    value:1,
    writeable:true,
    enumerable:false,
    configurable:true
});

//属性是存在的,但不可枚举
o.x; // =>1
Object.keys(o) // =>[]

//现在修改属性x，让它变为只读
Object.defineProperty(o,"x",{
    writeable:false
});

o.x = 2;//error

Object.defineProperty(o,"x",{
    value:2
});

o.x; // =>2

//现在将x从数据属性修改为存取器属性
Object.defineProperty(o,"x",{get:function(){return o;}});

o.x; //=>o
//同时修改多个属性
var p = Object.defineProperties({},{
    x:{value:1,writeable:true,enumerable:true,configurable:true},
    y:{value:1,writeable:true,enumerable:true,configurable:true},
    r:{
        get :function(){ return Math.sqrt(this.x*this.x + this.y*this.y)},
        enumerable:true,
        configurable:true
    }
});

//复制属性
Object.defineProperty(Object.prototype,
    "extend",
    {
        writeable:true,
        enumerable:false,
        configurable:true,
        value: function(o){
            //得到所有的自有属性,包含不可枚举属性
            var names = Object.getOwnPropertyNames(o);
            //遍历它们
            for(var i =0;i<names.length;i++){
                //如果属性已经存在，则跳过
                if(names[i] in this) continue;
                //获取的o中的属性的描述符
                var desc = Object.getOwnPropertyDescriptor(o,names[i]);
                //用它给this创建一个属性
                Object.defineProperty(this,names[i],desc);
            }
        }
    }
);

Object.preventExtensions(o);
Object.seal(o)
Object.freeze(o)
Object.isSealed()
Object.isExtensible()
Object.isFrozen()
Object.isArray()

//原型属性
var p = {x:1};
var o = Object.create(p);
p.isPrototypeOf(o); // =>true :o继承p
Object.prototype.isPrototypeOf(o) // =>true:p继承自Object.prototye

//对象序列化

o = {x:1,y:{z:[false,null,"0"]}} //定义一个测试对象
s = JSON.stringify(o);           // s是JSON字符串
p =  JSON.parse(s);              // p 是 o 的深拷贝对象