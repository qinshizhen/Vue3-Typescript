<template>
    <li>
        <label for="">
            <input type="checkbox" v-model="isComplete" />
            <span>{{ myProp.title }}</span>
        </label>
        <button class="btn btn-danger" @click="delTodo()">删除</button>
    </li>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
// 引入接口
import { Todo } from '../types/todo'
export default defineComponent({
    name: "Item",
    components: {},
    props: {
        todo: Object as () => Todo ,// 函数返回的是 Todo 类型
        updateTodo: {
            type: Function,
            required: true
        },
        deleteTodo: {
            type: Function,
            required: true
        },
        index: {
            type: Number,
        }
    },
    setup(props) {
        const myProp = computed(() => {
            return props.todo
        })
        const delTodo = () => {
            if (window.confirm('确定要删除嘛？')) {
                props.deleteTodo(props.index)
            }
        }

        // 计算属性操作 -- change 状态
        const isComplete = computed({
            get() {
                return props.todo && props.todo.isCompleted
            },
            set(val) {
                props.updateTodo(props.todo, val)
            }
        })
        return {
            myProp,
            delTodo,
            // 计算属性操作
            isComplete
        }
    }
})
</script>

<style lang='scss' scoped>
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li label {
    float: left;
    cursor: pointer;
}
li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}
li button {
    float: right;
    display: none;
    margin-top: 3px;
}
li:before {
    content: inherit;
}
li:last-child {
    border-bottom: none;
}
li:hover {
    color: green;
    background-color: pink;
    button {
        display: inline-block;
    }
}
</style>