<template>
    <ul class="todo-main">
        <Item v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :index="index" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></Item>
    </ul>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Item from "./Item.vue"
export default defineComponent({
    name: "List",
    components: {
        Item
    },
    props: {
        todos: {
            type: Array,
            default: () => []
        },
        deleteTodo: {
            type: Function,
            required: true
        },
        updateTodo: {
            type: Function,
            required: true
        },
    },
    setup() {
        return {}
    }
})
</script>

<style lang='scss' scoped>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
}
.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>