<template>
  <h1>{{ number }}</h1>
</template>

<script lang="ts">
// defineComponent 函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是 App
  name: 'App',
  setup() {
    // 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
    // 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
    const number = 10;
    return {
      number
    }
  }
});
</script>