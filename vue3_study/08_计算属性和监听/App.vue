<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>

    fistName: <input v-model="user.firstName" /><br />
    lastName: <input v-model="user.lastName" /><br />
    fullName1: <input v-model="fullName1" /><br />
    fullName2: <input v-model="fullName2" /><br />
    fullName3: <input v-model="fullName3" /><br />
  </fieldset>

  <fieldset>
    <legend>计算属性和监听的演示</legend>

    fistName: <input v-model="user.firstName" /><br />
    lastName: <input v-model="user.lastName" /><br />
    fullName1: <input v-model="fullName1" /><br />
    fullName2: <input v-model="fullName2" /><br />
    fullName3: <input v-model="fullName3" /><br />
  </fieldset>
  
</template>

<script lang="ts">
/*
  计算属性与监视
  1. computed函数: 
    与computed配置功能一致
    只有getter
    有getter和setter
  2. watch函数
    与watch配置功能一致
    监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
    默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
    通过配置deep为true, 来指定深度监视
  3. watchEffect函数
    不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
    默认初始时就会执行第一次, 从而可以收集需要监视的数据
    监视数据发生变化时回调
*/

import { reactive, ref, computed, watch, watchEffect } from "vue";

export default {
  setup() {
    const user = reactive({
      firstName: "A",
      lastName: "B",
    });

    /**
     * 计算属性
     *  - 只传入一个回调函数，表示的是 get
     */

    // 只有getter的计算属性
    const fullName1 = computed(() => {
      console.log("fullName1");
      return user.firstName + "-" + user.lastName;
    });
    // 返回的是一个Ref类型的对象
    console.log(fullName1);
    

    // 有getter与setter的计算属性
    const fullName2 = computed({
      get() {
        console.log("fullName2 get");
        return user.firstName + "-" + user.lastName;
      },

      set(value: string) {
        console.log("fullName2 set");
        const names = value.split("-");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });

    const fullName3 = ref("");

    /* 
    watchEffect: 监视所有回调中使用的数据
    不需要配置immediate，本身默认就会进行监视（默认执行一次）
    */
    /* 
    watchEffect(() => {
      console.log('watchEffect')
      fullName3.value = user.firstName + '-' + user.lastName
    }) 
    watchEffect(() => {
      const names = fullName3.value.split('-')
      user.firstName = names[0]
      user.lastName = names[1]
    }) 
    */

    /* 
    使用watch的2个特性:
      深度监视
      初始化立即执行
    */
    watch(
      user,
      () => {
        fullName3.value = user.firstName + "-" + user.lastName;
      },
      {
        immediate: true, // 是否初始化立即执行一次, 默认是false
        deep: true, // 是否是深度监视, 默认是false
      }
    );

    /* 
    watch一个数据
      默认在数据发生改变时执行回调
    */
    watch(fullName3, (value) => {
      console.log("watch");
      const names = value.split("-");
      user.firstName = names[0];
      user.lastName = names[1];
    });

    /* 
    watch多个数据: 
      使用数组来指定
      如果是ref对象, 直接指定
      如果是reactive对象中的属性,  必须通过函数来指定
    */
    watch([() => user.firstName, () => user.lastName, fullName3], (values) => {
      console.log("监视多个数据", values);
    });

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
};
</script>