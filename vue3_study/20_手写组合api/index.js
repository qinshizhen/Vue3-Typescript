/**
 * https://24kcs.github.io/vue3_study/chapter4/03_%E6%89%8B%E5%86%99%E7%BB%84%E5%90%88API.html
 */

/**
 * shallowReactive(浅的劫持，浅的监视，浅的响应数据) 与 reactive(深的...)
 */

// 定义一个 reactiveHandler 处理函数
const reactiveHandler = {
    // 获取属性值
    get( target, prop ) {
        const result = Reflect.get(target, prop);
        console.log('拦截了读取数据', prop, result);
        return result
    },
    // 修改属性值或者添加属性
    set( target, prop, value ) {
        const result = Reflect.set(target, prop, value);
        console.log('拦截了修改数据或者添加属性', prop, value);
        return result
    },
    // 删除某个属性
    deleteProperty(target, prop) {
        const result = Reflect.deleteProperty(target, prop);
        console.log('拦截了删除数据', prop);
        return result
    }
}

// 定义一个 shallowReactive 函数，传入一个目标对象
function shallowReactive( target ) {
    // 判断当前的目标对象是不是 object 类型(对象/数组)
    if ( target && typeof target === 'object' ) {
        return new Proxy(target, reactiveHandler)
    }
    // 如果传入的数据是基本类型的数据，那么就直接返回
    return target
}

// 定义一个 reactive 函数，传入一个目标对象
function reactive( target ) {
    // 判断当前的目标对象是不是 object 类型(对象/数组)
    if ( target && typeof target === 'object' ) {
        // 对数组或者是对象中所有的数据进行 reactive 的递归处理
        // 判断当前的数据是不是数组
        if (Array.isArray(target)) {
            target.forEach((item, index) => {
                target[index] = reactive(item)
            })
        } else {
            // 判断当前的数据是不是对象
            Object.keys(target).forEach(key => {
                target[key] = reactive(target[key])
            })
        }

        return new Proxy(target, reactiveHandler)
    }
    // 如果传入的数据是基本类型的数据，那么就直接返回
    return target
}


/**
 * shallowRef 与 ref
 */






/**
 * shallowReadonly 与 readonly
 */



/**
 * isRef, isReactive 与 isReadonly
 */


