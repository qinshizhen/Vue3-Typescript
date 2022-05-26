<template>
    <h2 :style="{ color }">grandSon 组件</h2>
</template>

<script lang='ts'>
import { defineComponent, inject } from 'vue'
export default defineComponent({
    name: "grandSon",
    components: {},
    setup() {
        const color = inject('color')
        return {
            color,
        }
    }
})
</script>

<style lang='scss' scoped>
</style>