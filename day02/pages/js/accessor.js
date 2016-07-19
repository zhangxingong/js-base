/**
 * Created by zhangxingong on 2016/7/19.
 */

var p = {
    x:1.0,
    y:1.0,

    // r是可读写的存取器属性，它有getter和setter.
    // 函数体结束后不要忘记带上逗号
    get r() { return Math.sqrt(this.x*this.x + this.y*this.y);},
    set r(newvalue){
        var oldvallue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newvalue/oldvallue;
        this.x *= ratio;
        this.y *- ratio;
    },
    //theta 是只读存取器属性，它只有getter方法
    get theta(){ return Math.atan2(this.y,this.x);}
};

var serialnum = {
    //这个数据属性包含下一个序列号
    //$符号暗示这个属性是一个私有属性
    $n:0,

    //返回当前值，然后自增
    get next() { return this.$n++;},
    set next(n) {
        if( n >= this.$n) this.$n = n;
    }
};