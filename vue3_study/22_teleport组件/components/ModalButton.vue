<template>
    <button @click="modalOpen = true">打开一个对话框</button>
    <button @click="modalOpen = false">关闭一个对话框</button>
    <div v-if="modalOpen" class="modal">我是一个对话框啊</div>
    <!-- 
        Teleport： 瞬移
        Teleport 提供了一种干净的方法, 让组件的html在父组件界面外的特定标签(很可能是body)下插入显示
    -->
    <teleport to="body">
        <div v-if="modalOpen" class="modal">我是一个对话框啊</div>
    </teleport>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: "ModalButton",
    components: {},
    setup() {
        const modalOpen = ref(false);
        return {
            modalOpen,
        };
    },
});
</script>

<style lang='scss' scoped>
// .modal {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// }

// .modal div {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: white;
//     width: 300px;
//     height: 300px;
//     padding: 5px;
// }
</style>