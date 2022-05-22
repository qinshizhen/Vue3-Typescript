<template>
  <h2>App 父级组件</h2>
  <h3>msg: {{ msg }}</h3>
  <button @click="msg += '2222' ">更新数据</button>
  <hr>
  <Child :msg="msg" msg2="哈哈哈" @xxx="xxx"></Child>
</template>

<script lang="ts">
// defineComponent 函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue"

// 暴露出去一个定义好的组件
export default defineComponent({
  name: "App",
  components: {
    Child
  },

  setup() {
    const msg = ref('what are you nong sha lei')
    const xxx = (str: string) => {
      msg.value += str
    }
    return {
      msg,
      xxx
    }
  }
});
</script>

<style>
</style>