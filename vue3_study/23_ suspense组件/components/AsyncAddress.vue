<template>
    <h2>AsyncAddress 组件</h2>
    <h3>{{ data }}</h3>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
// 引入 axios
import axios from 'axios'

export default defineComponent({
    name: "AsyncAddress",
    components: {},
    // setup() {
    //     return axios.get('/data/address.json').then((rs) => {
    //         return {
    //             data: rs.data
    //         }
    //     })
    // }

    async setup() {
        const result = await axios.get('/data/address.json')
        return {
            data: result.data
        }
    }
})
</script>

<style lang='scss' scoped>
</style>