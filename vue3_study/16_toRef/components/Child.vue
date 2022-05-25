<template>
    <div>
        <h2>Child 子级组件</h2>
        <h3>age: {{ age }}</h3>
        <h3>length: {{ length }}</h3>
    </div>
</template>

<script lang="ts">
import { toRef, Ref, computed } from 'vue'
function useGetLength(age: Ref) {
    return computed(()=>{
        return age.value.toString().length;
    })
}
export default {
    props: {
        age: {
            type: Number,
            required: true
        }
    },  
    setup (props: any) {
        const length = useGetLength(toRef(props, 'age'))
        return {
            length
        }
    }
}
</script>

<style lang="scss" scoped>

</style>