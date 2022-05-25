<template>
  <h2>toRaw 与 markRaw</h2>
  <h3>state: {{ state }}</h3>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from 'vue'

interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent({

/*
  toRaw
    返回由 reactive 或 readonly 方法转换成响应式代理的普通对象。
    这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新。
  markRaw
    一个对象，使其永远不会转换为代理。返回对象本身
  应用场景:
    有些值不应被设置为响应式的，例如复杂的第三方类实例或 Vue 组件对象。
    当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。
*/
  setup() {
    const state = reactive<UserInfo>({
      name: 'tom',
      age: 25,
    })

    const testToRaw = () => {
      // 把代理对象变成了普通对象，数据变化，页面不变化
      const user = toRaw(state)
      user.age++  // 界面不会更新
    }

    const testMarkRaw = () => {
      // state.likes =  ['a', 'b'];
      // state.likes[0] += '--';
      // console.log(state);
      
      // ========
      const likes = ['a', 'b'];
      // markRaw 标记的对象数据，从此以后都不能再成为代理对象了
      state.likes = markRaw(likes) // likes数组就不再是响应式的了
      setTimeout(() => {
        if (state.likes) {
          state.likes[0] += '--'
        }
      }, 1000)
    }

    return {
      state,
      testToRaw,
      testMarkRaw,
    }
  },
})
</script>