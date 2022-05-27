<template>
    <h2>setup 和 ref 的基本使用</h2>
    <h4>{{ count }}</h4>
    <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
// defineComponent 函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent, ref } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
    name: "App",
    // 需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化

    // Vue2
    // data() {
    //   return {
    //     count: 0
    //   }
    // },
    // methods: {
    //   updateCount() {
    //     this.count++
    //   }
    // },

    // Vue3

    /**
     * setup
     *  新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
     *  函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
     */
    setup() {
        // let count = 0 // 此时的数据并不是响应式的数据（响应式数据：数据变化，页面跟着渲染变化）
        // ref 是一个函数，作用：定义一个响应式的数据，返回的是一个Ref对象，对象中有一个value属性，如果需要对数据进行操作，需要使用该Ref对象调用value属性的方法进行数据的操作
        /**
         * ref
         * 作用: 定义一个数据的响应式
         * 语法: const xxx = ref(initValue):
         *  - 创建一个包含响应式数据的引用(reference)对象
         *  - js中操作数据: xxx.value
         *  - 模板中操作数据: 不需要.value
         * 一般用来定义一个『基本类型』的响应式数据
         */

        // 定义响应式数据 ref对象
        const count = ref(1);
        console.log(count);

        // 更新响应式数据的函数
        function updateCount() {
            // alert('update')
            count.value++;
        }

        return {
            count,
            updateCount,
        };
    },
});
</script>