<template>
  <h3>子级组件</h3>
  <hr />
  <h5>msg: {{ msg }}</h5>
  <button @click="updateMsg">更新msg</button>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
} from "vue";

export default defineComponent({
  name: "Child",
  /**
   * vue2.x 中的生命周期钩子
   */
  beforeCreate() {
    console.log("2.x 中的 beforeCreate....");
  },
  created() {
    console.log("2.x 中的 created....");
  },
  beforeMount() {
    console.log("2.x 中的 beforeMount....");
  },
  mounted() {
    console.log("2.x 中的 mounted....");
  },
  beforeUpdate() {
    console.log("2.x 中的 beforeUpdate....");
  },
  updated() {
    console.log("2.x 中的 updated....");
  },
  // vue2.x 中的 beforeDestroy -> beforeUnmount
  beforeUnmount() {
    console.log("2.x 中的 beforeUnmount....");
  },
  // vue2.x 中的 destroyed -> unmounted
  unmounted() {
    console.log("2.x 中的 unmounted....");
  },
  // setup() {
  //   const msg = ref("123");
  //   const updateMsg = () => {
  //     msg.value = "1111";
  //   };
  //   return {
  //     msg,
  //     updateMsg,
  //   };
  // },


  /**
   * vue3.x 中的生命周期钩子
   */
  setup() {
    console.log('3.x 中的 setup ...')
    const msg = ref("123");
    onBeforeMount(() => {
      console.log('3.x 中的 onBeforeMount ...')
    })
    onMounted(() => {
      console.log('3.x 中的 onMounted ...')
    })
    onBeforeUpdate(() => {
      console.log('3.x 中的 onBeforeUpdate ...')
    })
    onUpdated(() => {
      console.log('3.x 中的 onUpdated ...')
    })
    onBeforeUnmount(() => {
      console.log('3.x 中的 onBeforeUnmount ...')
    })
    onUnmounted(() => {
      console.log('3.x 中的 onUnmounted ...')
    })
    const updateMsg = () => {
      msg.value = "1111";
    };
    return {
      msg,
      updateMsg,
    };
  }

});
</script>

<style lang="scss" scoped>
</style>