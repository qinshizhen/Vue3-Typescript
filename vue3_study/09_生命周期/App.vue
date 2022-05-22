<template>
  <h2>生命周期</h2>
  <h3>父级组件</h3>
  <button @click="isShow = !isShow">切换显示</button>
  <hr/>
  <Child v-if="isShow"></Child>
</template>

<script lang="ts">
/**
 * 与 2.x 版本生命周期相对应的组合式 API
    beforeCreate -> 使用 setup()
    created -> 使用 setup()
    beforeMount -> onBeforeMount
    mounted -> onMounted
    beforeUpdate -> onBeforeUpdate
    updated -> onUpdated
    beforeDestroy -> onBeforeUnmount
    destroyed -> onUnmounted
    errorCaptured -> onErrorCaptured
 */
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue"
export default defineComponent ({
  name: 'App',
  components: {
    Child,
  },
  setup() {
    const isShow = ref(true);
    return {
      isShow,
    }
  }
});
</script>