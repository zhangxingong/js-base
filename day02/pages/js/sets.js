/**
 * Created by zhangxingong on 2016/7/19.
 */
//创建命名空间
var collections;
if(!collections) collections = {};

//定义set模块
collections.sets = (function namespace(){
    //这里定义集合类
    function Set(){
        this.values = {};
        this.n = 0;
        this.add.apply(this,arguments);
    }

    Set.prototype.contains = function(value){}
    Set.prototype.size = function(){}
    Set.prototype.add = function(){}
    Set.prototype.remove = function(){}
    Set.prototype.foreach = function(){}

    //工具函数
    function v2s(val){/***/}
    function objectId(o){}

    //通过返回命名空间对象将API导出
    return {
        //导出属性名：局部变量名称
        AbstractSet:AbstractSet,
        NotSet:NotSet,
        AbstractEnumerableSet:AbstractEnumerableSet,
        ArraySet:ArraySet
    };
})();


collections.sets = (new function namespace(){
    //...........省略

    //将API导出到this对象
    this.AbstractSet = AbstractSet;
    this.NotSet = Notset;

    //注意：这里没有返回值
}());


//-----------------------------------------------------------------------------

    var collections;
    if(!collections) collections = {};
    collections.set = {};

    (function namespace(){
        //------------省略很多代码

        collections.sets.AbstractSet = AbstractSet;
        collections.NotSet = NotSet;

        //导出操作依据执行了，无需写return与旧了
    }());
