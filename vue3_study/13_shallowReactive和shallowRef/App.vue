<template>
  <h2>shallowReactive 和 shallowRef</h2>
  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <h3>m4: {{ m4 }}</h3>
  <hr/>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from 'vue'
export default defineComponent({

  /* 
shallowReactive与shallowRef
  shallowReactive: 只处理了对象内最外层属性的响应式(也就是浅响应式)
  shallowRef: 只处理了value的响应式, 不进行对象的reactive处理
总结:
  reactive与ref实现的是深度响应式, 而shallowReactive与shallowRef是浅响应式
  什么时候用浅响应式呢?
    一般情况下使用ref和reactive即可,
    如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
    如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef
*/

  setup() {
    // 深度劫持（深监视） --- 深度响应式
    const m1 = reactive({
      name: 'aaa',
      age: 20,
      car: {
        name: 'BMW',
        color: 'red'
      }
    })
    // 浅度劫持（浅监视） --- 浅度响应式
    const m2 = shallowReactive({
      name: 'aaa',
      age: 20,
      car: {
        name: 'BMW',
        color: 'red'
      }
    })
    // 深度劫持（深监视） --- 深度响应式
    const m3 = ref({   // ref 放入对象，会进行 reactive 处理
      name: 'aaa',
      age: 20,
      car: {
        name: 'BMW',
        color: 'red'
      }
    })
    // 只处理了value的响应式, 不进行对象的reactive处理 不再返回proxy对象，而是返回普通object对象，没有响应式
    const m4 = shallowRef({
      name: 'aaa',
      age: 20,
      car: {
        name: 'BMW',
        color: 'red'
      }
    })
    const update = () => {
      // 更改m1的数据 reactive
      // m1.name += 'm1---';
      // m1.car.name += 'm1---';
      // 更改m2的数据 shallowReactive
      // m2.name += 'm2---';
      // m2.car.name += 'm2---';
      // 更改m3的数据 ref
      // m3.value.name += 'm3---'
      // m3.value.car.name += 'm3---'
      // 更改m4的数据 shallowRef
      m4.value.name += 'm4---'
      m4.value.car.name += 'm4---'
    }

    return {
      m1,
      m2,
      m3,
      m4,
      update
    }
  },
})
</script>