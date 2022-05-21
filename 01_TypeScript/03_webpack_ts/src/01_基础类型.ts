// 基础类型
(() => {
    /**
     * 基本语法
     * let 变量名: 数据类型 = 值
     */
    // 布尔类型 - boolean
    let flag: boolean = true;
    // flag = 10; // 不能将类型“number”分配给类型“boolean”。
    console.log(flag);

    // 数字类型 - number
    // 和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 
    // 这些浮点数的类型是 number。 
    // 除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015中引入的二进制和八进制字面量。
    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    console.log(a1, a2, a3, a4);

    // 字符串类型 - string
    let name: string = 'tom'
    name = 'jack'
    // name = 12 // error
    let age: number = 12
    const info = `My name is ${name}, I am ${age} years old!`
    console.log(info);

    // 字符串和数字之间能一起拼接
    let str: string = '我这么有钱';
    let num: number = 100;
    console.log(str + num);

    // 总结：ts 中变量一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，是不允许用其他类型的数据赋值给当前的这个变量

    console.log('==================');

    let und: undefined = undefined;
    let nll: null = null;
    console.log(und);
    console.log(nll);
    // undefined 和 null 都可以作为其他类型的子类型，可以把 undefined 和 null 赋值给其他类型的变量
    let num2: number = undefined;
    console.log(num2);

    console.log('==================');

    /**
     * 数组类型
     * 数组定义方式1
     *  let 变量名: 数据类型[] = [...]
     * 数组定义方式2
     *  let 变量名: Array<数据类型> = [...]
     */
    let arr1: number[] = [1, 2, 3];
    console.log(arr1);

    let arr2: Array<string> = ['a', 'b', 'c'];
    console.log(arr2);
    // 注意问题： 数组定义后，里面的数据的类型必须和定义数组的类型一致

    /**
     * 元组类型
     */
    let arr3: [string, number, boolean] = ['小甜甜', 1.223344, true]
    console.log(arr3);
    // 注意问题：元组类型在使用的时候，数据的类型的位置和数据的个数，应该和在定义元素的时候的数据类型及位置应该是一致的
    console.log(arr3[0].split(''));
    console.log(arr3[1].toFixed());

    console.log('==================');

    /**
     * 枚举
     * 枚举类型，枚举里面的每个数据都可以叫元素，每个元素都有自己的编号，编号是从0开始的，依次的递增加1
     */
    enum Color {
        red,
        green,
        blue
    }
    let color: Color = Color.red
    console.log(color);
    console.log(Color[2]);

    console.log('==================');

    /**
     * any
     */
    let notSure: any = 4
    notSure = 'maybe a string'
    console.log(notSure);
    notSure = false // 也可以是个 boolean
    console.log(notSure);

    let list: any[] = [1, true, 'free']
    list[1] = 100
    console.log(list);
    // 这种情况下也没有错误的提示信息，但是编译后会报错
    // console.log(list[0].split(''));  // TypeError: list[0].split is not a function

    /**
     * void
     */
    function showMsg(): void { } // 函数没有返回值

    console.log('==================');

    /**
     * object
     */
    function getObj(obj: object): object {
        return {
            name: 'name',
            age: 123
        }
    }
    console.log(getObj({}));
    console.log(getObj(String));

    console.log('==================');

    /**
     * 联合类型（Union Types）
     *  表示取值可以为多种类型中的一种
     */
    // 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
    function toString2(x: number | string): string {
        return x.toString()
    }
    // 需求2: 定义一个一个函数得到一个数字或字符串值的长度
    // function getLength(x: number | string) {
    // return x.length // error
    // if (x.length) { // error
    //     return x.length
    // } else {
    //     return x.toString().length
    // }
    // }

    console.log('==================');

    /**
     * 类型断言
     *  类型断言(Type Assertion): 可以用来手动指定一个值的类型
     *  语法:
     *      方式一: <类型>值
     *      方式二: 值 as 类型  tsx中只能用这种方式
     */
    // 需求: 定义一个函数得到一个字符串或者数值数据的长度
    function getLength(x: number | string) {
        if ((<string>x).length) {
            return (x as string).length
        } else {
            return x.toString().length
        }
    }
    console.log(getLength('abcd'), getLength(1234))

    console.log('==================');

    /**
     * 类型推断
     *      TS会在没有明确的指定类型的时候推测出一个类型
     */
    // 定义变量时赋值了, 推断为对应的类型
    let b9 = 123 // number
    // b9 = 'abc' // error

    // 定义变量时没有赋值, 推断为any类型
    let b10  // any类型
    b10 = 123
    b10 = 'abc'

})()