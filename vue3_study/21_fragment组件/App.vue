<template>
    <!-- 
        Fragment：片断
        在Vue2中: 组件必须有一个根标签
        在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
        好处: 减少标签层级, 减小内存占用 
    -->
	<!-- <div>
        <h2>111</h2>
        <h2>222</h2>
    </div> -->
    <h2>111</h2>
    <h2>222</h2>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
	name: "",
	components: {},
	setup() {
		return {}
	}
})
</script>

<style lang='scss' scoped>
</style>