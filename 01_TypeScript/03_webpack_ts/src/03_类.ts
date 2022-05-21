/**
 * 类
 *  可以理解为模版，通过模版可以实例化对象
 * 面向对象的变成思想
 */
(() => {
    // ts中类的定义及使用
    class Person {
        // 定义属性
        name: string;
        age: number;
        gender: string;
        // 定义构造函数： 为了将来实例化对象的时候，可以直接对属性的值进行初始化
        constructor(name: string = '小甜甜', age: number = 10, gender: string = '女') {
            // 更新对象中的属性数据
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        // 定义实例方法
        sayHi(str: string): void {
            console.log(`大家好，我是${this.name}，今年${this.age}岁了，是个${this.gender}孩子`, str);
        }
    }
    // ts中使用类，实例化对象，可以直接进行初始化操作
    let person = new Person();
    person.sayHi('what is your name？');

    console.log('====================');

    /**
     * 继承：
     *  类与类之间的关系
     *  关键字 extends 来实现继承
     *  关键字 super 来调用父类的构造函数和实例方法
     *  子类可以重写父类的方法
     * 继承后类与类之间的叫法：
     *  A类继承了B类，那么此时A类叫做子类，B类叫做基类
     *  子类 ----> 派生类
     *  基类 ----> 超类(父类)
     *  一旦发生了继承的关系，就出现了父子类的关系(叫法)
     */
    class Person2 {
        name: string;
        age: number;
        gender: string;
        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sayHi(str: string): void {
            console.log(`我是${this.name}, ${str}`);
        }
    }
    class Student extends Person2 {
        // name: string;
        // age: number;
        // gender: string;
        money: number;
        constructor(name: string, age: number, gender: string, money: number) {
            super(name, age, gender);
            this.money = money
        }
        sayHi() {
            super.sayHi('hhh');
        }
    }
    let student = new Student('小甜甜', 18, '女', 12)
    console.log(student);
    student.sayHi();

    console.log('====================');

    /**
     * 多态：
     *  父类型的引用指向了子类型的对象
     *  不同类型的对象针对相同的方法，产生了不同的行为
     */
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        run(distance: number) {
            console.log(`${this.name} 跑了 ${distance}`);
        }
    }
    class Snake extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number) {
            console.log(`${this.name} 跑了 ${distance}`);
        }
    }
    class House extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number) {
            console.log(`${this.name} 跑了 ${distance}`);
        }
        eat() {
            console.log(`我喜欢吃草`);
        }
    }
    // 实例化
    let ani: Animal = new Animal('动物');
    let sn: Snake = new Snake('蛇');
    let ho: House = new House('马');
    ani.run(10);    // 动物 跑了 10
    sn.run(11);     // 蛇 跑了 11
    ho.run(12);     // 马 跑了 12

    // 父类型引用指向子类型的实例 ==> 多态
    let sn2: Animal = new Snake('蛇蛇');
    let ho2: Animal = new House('马马');
    sn2.run(1); // 蛇蛇 跑了 1
    ho2.run(2); // 马马 跑了 2

    // 如果子类型没有扩展的方法, 可以让子类型引用指向父类型的实例
    let sn3: Snake = new Animal("蛇蛇蛇")
    sn3.run(3) // 蛇蛇蛇 跑了 3
    // 如果子类型有扩展的方法, 不能让子类型引用指向父类型的实例
    // let ho3: House = new Animal('马马马'); // 类型 "Animal" 中缺少属性 "eat"，但类型 "House" 中需要该属性。

    console.log('====================');

    /**
     * 访问修饰符: 用来描述类内部的属性/方法的可访问性
     *  public: 默认值, 公开的外部也可以访问
     *  private: 只能类内部可以访问，子类也不可以
     *  protected: 类内部和子类可以访问
     */
    class Animal_xsf {
        public name: string

        public constructor(name: string) {
            this.name = name
        }

        public run(distance: number = 0) {
            console.log(`${this.name} run ${distance}m`)
        }
    }

    class Person_xsf extends Animal_xsf {
        private age: number = 18
        protected sex: string = '男'

        run(distance: number = 5) {
            console.log('Person jumping...')
            super.run(distance)
        }
    }

    class Student_xsf extends Person_xsf {
        run(distance: number = 6) {
            console.log('Student jumping...')

            console.log(this.sex) // 子类能看到父类中受保护的成员
            // console.log(this.age) //  子类看不到父类中私有的成员

            super.run(distance)
        }
    }

    console.log(new Person('abc').name) // 公开的可见
    // console.log(new Person('abc').sex) // 受保护的不可见
    // console.log(new Person('abc').age) //  私有的不可见

    console.log('====================');

    /**
     * readonly 修饰符
     *  你可以使用 readonly 关键字将属性设置为只读的。 
     *  只读属性必须在声明时或构造函数里被初始化。
     */
    class Person_readonly {
        readonly name: string = 'abc'
        constructor(name: string) {
            // 构造函数中，可以对只读的属性进行修改
            this.name = name
        }
        changeName() {
            // this.name = '大甜甜';  // error 无法分配到 "name" ，因为它是只读属性。
        }
    }

    let john = new Person_readonly('John')
    console.log(john.name);
    // john.name = 'peter' // error 无法分配到 "name" ，因为它是只读属性。

    console.log('====================');

    /**
     * 参数属性
     * readonly 修饰类中的构造函数中的参数
     */
    class Person_cs {
        // 构造函数中的name参数，一旦使用readonly进行修饰后，那么该name参数可以叫 参数属性
        // 构造函数中的name参数，一旦使用readonly进行修饰后，那么Person中就有了一个name的属性成员 
        // <public private protected 一样>
        // “public private protected”修饰符必须位于“readonly”修饰符之前。
        // 构造函数中的name参数，一旦使用readonly进行修饰后，外部也是无法修改类中的name属性成员值的
        constructor(readonly name: string) {
            // this.name = name
        }
    }
    const p = new Person_cs('jack')
    console.log(p);
    console.log(p.name);

    console.log('====================');

    /**
     * 存取器
     *  TypeScript 支持通过 getters/setters 来截取对对象成员的访问。 
     *  它能帮助你有效的控制对对象成员的访问。
     */
    class Person_ccq {
        firstName: string = 'A'
        lastName: string = 'B'
        get fullName() {
            return this.firstName + '-' + this.lastName
        }
        set fullName(value) {
            const names = value.split('-')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

    const p_ccq = new Person_ccq()
    console.log(p_ccq.fullName)

    p_ccq.firstName = 'C'
    p_ccq.lastName = 'D'
    console.log(p_ccq.fullName)

    p_ccq.fullName = 'E-F'
    console.log(p_ccq.firstName, p_ccq.lastName);

    console.log('====================');

    /**
     * 静态属性 / 静态成员
     *  语法： static 
     *  静态属性, 是类对象的属性
     *  非静态属性, 是类的实例对象的属性
     */
    class Person_static {
        // 有一个内置的name属性
        // static name: string = '小甜甜' // error 静态属性“name”与构造函数“Person_static”的内置属性函数“name”冲突 
        name1: string = 'A'
        static name2: string = 'B'
        // static 不能修饰构造函数
        // constructor(name: string) {
        //     // 此时this是实例对象，name2 是静态属性，不能通过实例对象直接调用静态属性来使用
        //     // this.name2 = name;
        // }
        // 静态方法
        static sayHi() {
            console.log('萨瓦迪卡');
        }
    }
    // 通过类名.静态属性的方式来访问该成员数据
    console.log(Person_static.name2)
    // 通过类名.静态属性的方式来设置该成员数据
    Person_static.name2 = 'aaaaa'
    console.log(new Person_static().name1)
    Person_static.sayHi();
    // new Person_static().sayHi(); // error

    console.log('====================');

    /**
     * 抽象类
     *  不能创建实例对象, 只有通过继承实现类才能创建实例
     *  可以包含未实现的抽象方法(抽象方法一般没有任何的具体内容的实现)
     *  可以包含实例方法
     *  抽象类的目的或是作用 最终都是为了子类服务的
     */
    abstract class Animal_abstract {
        abstract name: string
        abstract cry()
        run() {
            console.log('run()')
        }
    }
    class Dog extends Animal_abstract {
        name: string = 'aaa'
        cry() {
            console.log(' Dog cry()')
        }
    }
    const dog = new Dog()
    dog.cry()
    dog.run()

})()