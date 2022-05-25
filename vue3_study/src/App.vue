<template>
    <h2>customRef</h2>
    <input type="text" v-model="keyword">
    <p>{{ keyword }}</p>
</template>

<script lang='ts'>
import { defineComponent, customRef } from 'vue'

/**
 * 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制
 * 需求: 使用 customRef 实现 debounce(防抖) 的示例
 */

function useDebouncedRef<T> (value: T, delay = 200) {
	// 准备一个存储定时器的id的变量
	let timeOutId: number
	return customRef( (track, trigger) => {
		return {
			// 返回数据
			get() {
				track()
				return value
			},
			// 设置数据
			set(newValue: T) {
				clearTimeout(timeOutId)
				timeOutId = setTimeout(() => {
					value = newValue;
					trigger()
				}, delay)
			}
		}
	})
}
export default defineComponent({
    name: 'App',
    setup() {
		const keyword = useDebouncedRef('abc', 1000)
        return {
			keyword
		}
    }
})
</script>

<style lang='scss' scoped>
</style>