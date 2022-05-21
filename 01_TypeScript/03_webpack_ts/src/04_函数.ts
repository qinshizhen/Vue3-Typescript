/**
 * 函数
 *  封装了一些重复使用的代码，在需要的时候直接调用即可
 */
(() => {
    // 函数声明，命名函数
    // function add(x, y) {
    //     return x + y
    // }
    // 函数表达式，匿名函数
    // const add2 = function(x, y) {
    //     return x + y
    // }

    /**
     * 函数类型
     */
    // 为函数定义类型
    // 函数中的x和y参数的类型都是number 类型，小括号后面的:number 代表的是该函数的返回值也是 number 类型的
    function add(x: number, y: number): number {
        return x + y
    }
    let myAdd = function (x: number, y: number): number {
        return x + y
    }

    // 书写完整函数类型
    // (x: number, y: number) => number 当前的这个函数的类型
    let myAdd2: (x: number, y: number) => number =
        function (x: number, y: number): number {
            return x + y
        }

    /**
     * 可选参数和默认参数
     */
    function buildName(firstName: string = 'A', lastName?: string): string {
        if (lastName) {
            return firstName + '-' + lastName
        } else {
            return firstName
        }
    }
    console.log(buildName('C', 'D'))
    console.log(buildName('C'))
    console.log(buildName())

    /**
     * 剩余参数
     */
    // ...args: string[]  ---> 剩余的参数，放在了一个字符串的数组中，args里面
    function info(x: string, ...args: string[]) {
        console.log(x, args)
    }
    info('abc', 'c', 'b', 'a')

    /**
     * 函数重载
     *  函数名相同, 而形参不同的多个函数
     *  在JS中, 由于弱类型的特点和形参与实参可以不匹配, 是没有函数重载这一说的 但在TS中, 与其它面向对象的语言(如Java)就存在此语法
     *  需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加 
     */
    
    // 重载函数声明
    // 关闭66 67行 83行不会报错，打开后会报错
    function add_cz(x: string, y: string): string
    function add_cz(x: number, y: number): number

    // 定义函数实现
    function add_cz(x: string | number, y: string | number): string | number {
        // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y
        }
    }
    // 参数都是number
    console.log(add_cz(1, 2))
    // 参数都是string
    console.log(add_cz('a', 'b'))
    // 此时如果传入的是非法的数据，ts应该给我提示出错误的信息内容，报错
    // console.log(add_cz(1, 'a')) // error
    // console.log(add_cz('a', 1)) // error

})()