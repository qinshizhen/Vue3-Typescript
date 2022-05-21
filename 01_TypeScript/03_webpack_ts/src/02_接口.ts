/**
 * 接口
 *      TypeScript 的核心原则之一是对值所具有的结构进行类型检查。
 *      我们使用接口（Interfaces）来定义对象的类型。
 *      接口是对象的状态(属性)和行为(方法)的抽象(描述)
 * 接口： 是一种类型，是一种规范，是一种规则，是一个能力，是一种约束
 */

/* 
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
接口类型的对象
    多了或者少了属性是不允许的
    可选属性: ?
    只读属性: readonly
*/
(() => {
    /**
     * 需求: 创建人的对象, 需要对人的属性进行一定的约束
     *  id是number类型, 必须有, 只读的
     *  name是string类型, 必须有
     *  age是number类型, 必须有
     *  sex是string类型, 可以没有
     */

    // 定义人的接口，作为person对象的类型使用，限定或者是约束该对象中的属性数据
    interface IPerson {
        readonly id: number
        name: string
        age: number
        // 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。
        sex?: string
    }
    // 定义一个对象，该对象的类型就是定义的接口 IPerson
    // 类型检查器会查看对象内部的属性是否与IPerson接口描述一致, 如果不一致就会提示类型错误。
    const person1: IPerson = {
        id: 1,
        name: 'tom',
        age: 20,
        sex: '男',
        // xxx: 12 // error 没有在接口中定义, 不能有
    }
    // person2.id = 2 // error
    // 最简单判断该用 readonly 还是 const 的方法是看要把它做为变量使用还是做为一个属性。 
    // 做为变量使用的话用 const，若做为属性则使用 readonly。


    console.log('==================');

    /**
     * 函数类型： 通过接口的方式作为函数的类型来使用
     *  为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
     *  它就像是一个只有参数列表和返回值类型的函数定义。
     *  参数列表里的每个参数都需要名字和类型。
     */

    // 定义一个接口，用来作为某个函数的类型使用
    interface SearchFunc {
        (source: string, subString: string): boolean
    }
    // 定义一个函数，该类型就是上面定义的接口
    const mySearch: SearchFunc = function (source: string, sub: string): boolean {
        // 在 source 字符串中查找 subString 这个字符串
        return source.search(sub) > 1
    }
    // 调用函数
    console.log(mySearch('abcd', 'bc'))

    console.log('==================');

    /**
     * 类类型: 实现接口
     *  关键字： implements (implement => 实现)
     *  1. 一个类可以实现多个接口
     *  2. 一个接口可以继承多个接口
     */
    interface Alarm {
        alert(): any;
    }

    interface Light {
        lightOn(): void;
        lightOff(): void;
    }

    class Car implements Alarm {
        alert() {
            console.log('Car alert');
        }
    }
    // 一个类可以实现多个接口
    class Car2 implements Alarm, Light {
        alert() {
            console.log('Car alert');
        }
        lightOn() {
            console.log('Car light on');
        }
        lightOff() {
            console.log('Car light off');
        }
    }
    // 接口继承接口
    interface LightableAlarm extends Alarm, Light {}

    /**
     * 总结：
     *  类可以通过接口的方式，来定义当前这个类的类型
     *  类可以实现一个接口，类也可以实现多个接口，要注意，接口中的内容都要真正的实现
     *  接口和接口之间叫继承 extends
     *  类和接口之间叫实现  implements
     */





})()