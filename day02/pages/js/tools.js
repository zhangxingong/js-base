/**
 * Created by zhangxingong on 2016/7/19.
 */
/**
 * 把p可枚举属性复制到o中，并返回o
 * 如果o和p含有同名属性，则覆盖o中的属性
 * @param o target
 * @param p source
 */
function extend(o,p){
    for(prop in p){
        o[prop] = p[prop];
    }
    return o;
}
/**
 * 把p可枚举属性复制到o中，并返回o
 * 如果o和p含有同名属性，o中的属性将不受影响
 * @param o target
 * @param p source
 */
function merge(o,p){
    for(prop in p){
        if(o.hasOwnProperty(prop)) continue;
        o[prop] = p[prop];
    }
    return o;
}
/**
 * 如果o中的属性在p中没有同名属性,则从o中删除这个属性
 * @param o
 * @param p
 */
function restrict(o,p){
    for(prop in p){
        if(!(prop in p)) delete o[prop];
        o[prop] = p[prop];
    }
    return o;
}
/**
 * 如果o中的属性在p中存在同名属性，则从o中删除这个属性
 * @param o
 * @param p
 */
function subtract(o,p){
    function restrict(o,p){
        for(prop in p){
           delete o[prop];
        }
        return o;
    }
}
/**
 * 返回一个新对象，这个对象拥有同时在o和p中出现的属性
 * 如果o和p中有重名属性,使用p中的属性值
 * @param o
 * @param p
 */
function union(o,p){return extend(extend({},o),p);}
/**
 * 返回一个新对象，这个对象拥有同时在o和p中出现的属性
 * 很像求o和p的交集,但p中属性的值被忽略
 * @param o
 * @param p
 */
function intersection(o,p){ return restrict(extend({},o),p);}
/**
 * 返回一个数组,这个数组包含的是o中可枚举的自由属性的名字
 * @param o
 */
function keys(o){
    if(typeof o !== "object") throw TypeError();
    var resutl = [];
    for(var prop in o){
         if(o.hasOwnProperty(prop)){
             resutl.push(prop);
         }
    }
    return resutl;
}