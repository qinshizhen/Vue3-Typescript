<template>
    <h2>provide 与 inject</h2>
    <p>当前的颜色： {{ color }}</p>
	<button @click="color = 'red'">红色</button>
	<button @click="color = 'yellow'">黄色</button>
	<button @click="color = 'green'">绿色</button>
	<hr/>
	<Son></Son>
</template>

<script lang='ts'>
import { defineComponent, provide, ref } from 'vue'
import Son from "./components/Son.vue"

/**
 * provide和inject提供依赖注入，功能类似 2.x 的provide/inject
 * 需求: 实现跨层级组件(祖孙)间通信
 */

export default defineComponent({
    name: 'App',
	components: {
		Son
	},
    setup() {
		const color = ref('red');
		provide('color', color)
        return {
			color
		}
    }
})
</script>

<style lang='scss' scoped>
</style>