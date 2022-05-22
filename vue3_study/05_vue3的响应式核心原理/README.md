# 比较Vue2与Vue3的响应式

## vue2的响应式
```js
/**
 * 核心:
 *  - 对象: 通过defineProperty对对象的已有属性值的读取和修改进行劫持(监视/拦截)
 *  - 数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持(vue2中把一个普通数组变成一个响应式数组，进行更改的话是需要重写操作)
 *    https://juejin.cn/post/6970752937047883789
 * 
 * 问题: 
 *  - 对象直接新添加的属性或删除已有属性, 界面不会自动更新
 *  - 直接通过下标替换元素或更新length, 界面不会自动更新 arr[1] = {}
 * 
 * 解决问题： set()  $set()
 */
Object.defineProperty(data, 'count', {
    get () {}, 
    set () {}
})
```

## Vue3的响应式
```js
/**
 * 核心:
 *  - 通过Proxy(代理): 拦截对data任意属性的任意(13种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...
 *    - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 *  - 通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作
 *    - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 * 
 * proxy : Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
 *  可以通过proxy代理对象把普通对象实现成响应式对象的操作，实现数据代理的操作
 *  语法： const p = new Proxy(target, handler)
 */

new Proxy(data, {
	// 拦截读取属性值
    get (target, prop) {
    	return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set (target, prop, value) {
    	return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty (target, prop) {
    	return Reflect.deleteProperty(target, prop)
    }
})

proxy.name = 'tom'   

```