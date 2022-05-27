<template>
    <h2>App 父级组件</h2>
    <hr/>
    <ModalButton></ModalButton>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ModalButton from './components/ModalButton.vue'
export default defineComponent({
    name: "",
    components: {
        ModalButton
    },
    setup() {
        return {}
    }
})
</script>

<style lang='scss' scoped>
</style>