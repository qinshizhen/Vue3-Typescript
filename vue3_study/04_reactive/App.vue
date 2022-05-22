<template>
  <h2>reactive 的使用</h2>
  <ul>
    <li>姓名：{{ user.name }}</li>
    <li>年龄：{{ user.age }}</li>
    <li>性别：{{ user.gender }}</li>
    <li>媳妇：{{ user.wife }}</li>
  </ul>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
// defineComponent 函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent, reactive } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
  name: "App",
  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据
  setup() {
    /**
     * reactive
     *  - 作用: 定义多个数据的响应式
     *  - const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
     *  - 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
     *  - 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
     */
    let obj: any = {
      name: '小明',
      age: 20,
      wife: {
        name: '小甜甜',
        age: 18,
        cars: ['奔驰', '奥迪', '宝马']
      }
    }
    const user = reactive(obj)
    console.log(user);
    
    const updateUser = () => {
      // 直接使用目标对象obj的方式来更新目标对象中成员的值，是不可能的，只能使用代理对象user的方式来更新数据（响应式数据）
      // obj.name = "ssssss"

      user.name = "大明"
      user.age = 30
      user.wife.name = "大甜甜"
      user.wife.cars[0] = '保时捷'

      // user ---> 代理对象， obj ----> 目标对象
      // user对象或者obj对象添加一个新的属性，哪一种方式会影响界面的更新
      // obj.gender = '男' // obj上有gender，页面不生效
      // user.gender = '男' // obj上有gender，页面生效

      // user对象或者obj对象移除一个已经存在的属性，哪一种方式会影响界面的更新
      // delete obj.age  // obj上没有age，页面不生效
      // delete user.age  // obj上没有age，页面生效

      /**
       * 总结：
       *  如果操作代理对象，目标对象中的数据也会随之变化，同时如果想要在操作数据的时候，界面也要跟着重新更新渲染，那么也是操作代理对象
       */
    }
    
    return {
      user,
      updateUser
    }
  }
});
</script>

<style>
</style>