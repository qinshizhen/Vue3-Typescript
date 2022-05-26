<template>
    <h3>son 组件</h3>
    <hr/>
    <GrandSon></GrandSon>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import GrandSon from "./GrandSon.vue"
export default defineComponent({
    name: 'son',
    components: {
        GrandSon
    },
    setup() {
        return {}
    }
})
</script>

<style lang='scss' scoped>
</style>