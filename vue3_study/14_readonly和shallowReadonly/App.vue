<template>
  <h2>readonly 与 shallowReadonly</h2>
  <h3>m1: {{ m1 }}</h3>
  <hr/>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'
export default defineComponent({

/*
readonly:
深度只读数据
获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。
只读代理是深层的：访问的任何嵌套 property 也是只读的。
shallowReadonly
浅只读数据
创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换
应用场景:
在某些特定情况下, 我们可能不希望对数据进行更新的操作, 那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除
*/

  setup() {
    const m1 = reactive({
      name: 'aaa',
      age: 20,
      car: {
        name: 'BMW',
        color: 'red'
      }
    })
    const m2 = readonly(m1); // 只读，深度只读
    const m3 = shallowReadonly(m1);
    const update = () => {
      // m2.name += 'm1---';  // error
      // m2.car.name += 'm1---';  // error
      // m3.name += 'm1---';  // error
      m3.car.name += 'm1---';
    }

    return {
      m1,
      m2,
      update
    }
  },
})
</script>