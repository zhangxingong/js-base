/**
 * Created by zhangxingong on 2016/7/20.
 */
//创建XML对象
/**
 * 第一种方法
 *
var pt =
    <preiodictable>
        <element id="1"><name>Hydrogen</name></element>
        <element id="2"><name>Helium</name></element>
        <element id="3"><name>Lithium</name></element>
    </preiodictable>;

    pt.element += <element id="4"><name>Beryllium></name></element>;

    pt = <preiodictable></preiodictable>;
    var elements = ["Hydrogen","Helium","Lithium","Beryllium"];
    //使用数组元素创建XML标签
    for(var n = 0;n< elements.length;n++){
        pt.element += <element id={n+1}><name>{element[n]}</name></element>;
    }

    pt += new XML('<element id = "5"><name>Boron</name></element>');

    pt += new XMLList('<element id="6"><name>Carbon</name></element>'+
                      '<element id="7"><name>Nitrogen</name></element>');

    //访问 搜索
    var elements = pt.element;
    var names    = pt.element.name;
    var n        =  names[0]

    var name2    = pt..name;//后代运算符
    //通配符
    var name3 = pt.element.*;
    //E4X中使用字符@来区分属性名和标签名。比如，可以这样获得一个属性
    var atomicNumber = pt.element[i].@id;
    //可以使用通配符
    var atomicNums = pt.element.@*;
    //过滤表达式
   var lightElements = pt.element.(@id < 3);

   var bElementNames = pt.element.(name.charAt(0) == 'B').name;

   for (var e in pt.element){
    console.log(e.name);
}

    //输出每个元素的原子序数
    for (var n in pt.element.@*) console.log(n);

    //赋值
    pt.element[0].@symol = "H";
    pt.element[0].weight = 1.00794;

    delete pt.element[0].@symol
    delete pt..weight;

 */