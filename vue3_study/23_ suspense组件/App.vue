<template>
    <h2>App 父级组件： Suspense</h2>
    <AsyncComponent></AsyncComponent>

    <Suspense>
        <!-- 切换网络为 Slow 3G -->
        <!-- <template v-slot:default> -->
        <template #default>
            <!-- 异步组件 -->
            <!-- <AsyncComponent></AsyncComponent> -->
            <AsyncAddress></AsyncAddress>
        </template>
        <template v-slot:fallback>
            <!-- loading 的内容 -->
            <h2>Loading</h2>
        </template>
    </Suspense>
</template>

<script lang='ts'>
import { defineAsyncComponent, defineComponent } from "vue";
// 引入组件： 静态引入 和 动态引入
// Network -> JS -> src_components_AsyncComponent_vue.js 后出现
// vue2 中的动态引入组件的写法 (在vue3中这种写法不行)
// const AsyncComponent = () => import('./components/AsyncComponent.vue')

// vue3 中动态引入组件的写法
// const AsyncComponent = defineAsyncComponent(
//     () => import("./components/AsyncComponent.vue")
// );

// 静态引入组件
// import AsyncComponent from './components/AsyncComponent.vue'
import AsyncAddress from './components/AsyncAddress.vue'

export default defineComponent({
    name: "App",
    components: {
        // AsyncComponent,
        AsyncAddress
    },
    setup() {
        return {};
    },
});
</script>

<style lang='scss' scoped>
</style>