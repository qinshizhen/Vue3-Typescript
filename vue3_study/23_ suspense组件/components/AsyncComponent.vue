<template>
    <h2>AsyncComponent 子级组件</h2>
    <h3>{{ msg }}</h3>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name: "AsyncComponent",
    components: {},
    setup() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    msg: 'what ary you nong sha lei'
                })
            }, 2000)
        })
    }
})
</script>

<style lang='scss' scoped>
</style>