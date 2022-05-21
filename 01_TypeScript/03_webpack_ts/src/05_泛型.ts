/**
 * 泛型
 *  指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。
 */
(() => {
    /**
     * 需求
     *  根据指定的数量 count 和数据 value , 创建一个包含 count 个 value 的数组
     */
    // 不使用泛型
    /**
     * value: number
     *  ... 步骤省略，const arr = createArray(11, 3) value的类型只能是number
     * value: string
     *  ... 步骤省略，const arr = createArray('aa', 3) value的类型只能是string
     */
    function createArray(value: any, count: number): any[] {
        const arr: any[] = []
        for (let index = 0; index < count; index++) {
            arr.push(value)
        }
        return arr
    }

    const arr1 = createArray(11, 3)
    const arr2 = createArray('aa', 3)
    console.log(arr1);
    console.log(arr2);
    // arr1中存储的是数字类型的数据
    // arr2中存储的是字符串类型的数据
    // 没有任何的智能提示的信息(要么有方法名字的提示信息，要么有错误的提示信息)
    console.log(arr1[0].toFixed(), arr2[0].split(''))

    // 使用泛型
    function createArray2<T>(value: T, count: number) {
        const arr: Array<T> = []
        for (let index = 0; index < count; index++) {
            arr.push(value)
        }
        return arr
    }
    const arr3 = createArray2<number>(11, 3)
    console.log(arr3[0].toFixed())
    // console.log(arr3[0].split('')) // error
    const arr4 = createArray2<string>('aa', 3)
    console.log(arr4[0].split(''))
    // console.log(arr4[0].toFixed()) // error

    console.log('==================');

    /**
     * 多个泛型参数的函数
     *  一个函数可以定义多个泛型参数
     */
    function swap<K, V>(a: K, b: V): [K, V] {
        return [a, b]
    }
    const result = swap<string, number>('abc', 123)
    console.log(result[0].length, result[1].toFixed())

    console.log('==================');

    /**
     * 泛型接口
     *  在定义接口时, 为接口中的属性或方法定义泛型类型
     *  在使用接口时, 再指定具体的泛型类型
     */
    // 需求：
    // 定义一个类，用来存储用户的相关信息(id, 名字, 年龄)
    // 通过一个类的实例对象调用add方法可以添加多个用户信息的对象，调用 getUserId 方法可以根据id获取某个指定的用户信息对象

    // 定义一个泛型接口
    interface IBaseCRUD<T> {
        // data: T[]
        data: Array<T>
        add: (t: T) => T
        getUserId: (id: number) => T
    }
    // 定义一个用户信息的类
    class User {
        id?: number; //id主键自增
        name: string; //姓名
        age: number; //年龄
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }
    // 定义一个类，可以针对用户的信息对象进行增加及查询的操作
    // CRUD ---> Create，Read, Update, Delete
    class UserCRUD implements IBaseCRUD<User> {
        // 用来保存多个User类型的用户信息对象
        data: User[] = []
        add(user: User): User {
            user = { ...user, id: Date.now() + Math.random() }
            this.data.push(user)
            console.log('保存user', user.id)
            return user
        }
        getUserId(id: number): User {
            return this.data.find(item => item.id === id)
        }
    }

    const userCRUD: UserCRUD = new UserCRUD()
    userCRUD.add(new User('tom', 12))
    userCRUD.add(new User('tom2', 13))
    console.log(userCRUD.data)
    const { id } = userCRUD.add(new User('tom3', 14))
    const user = userCRUD.getUserId(id)
    console.log(user);

    console.log('==================');

    /**
     * 泛型类
     *  在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型
     */
    class GenericNumber<T> {
        zeroValue: T
        add: (x: T, y: T) => T
    }

    let myGenericNumber: GenericNumber<number> = new GenericNumber<number>()
    myGenericNumber.zeroValue = 0
    myGenericNumber.add = function (x, y) {
        return x + y
    }

    let myGenericString: GenericNumber<string> = new GenericNumber<string>()
    myGenericString.zeroValue = 'abc'
    myGenericString.add = function (x, y) {
        return x + y
    }

    console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
    console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))

    console.log('==================');

    /**
     * 泛型约束
     */
    // 如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性

    // 没有泛型约束
    function fn<T>(x: T): void {
        // console.log(x.length)  // error
    }


    // 我们可以使用泛型约束来实现
    interface Lengthwise {
        length: number;
    }
    // 指定泛型约束
    function fn2<T extends Lengthwise>(x: T): number {
        console.log(x.length)
        return x.length
    }


    // 我们需要传入符合约束类型的值，必须包含必须 length 属性：
    fn2<string>('abc')
    // fn2<number>(123) // error  number没有length属性

})()