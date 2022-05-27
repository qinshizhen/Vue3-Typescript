<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <Header :addTodo="addTodo"></Header>
            <list :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></list>
            <Footer :todos="todos" :checkAll="checkAll" :clearAllCompleteTodos="clearAllCompleteTodos"></Footer>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
// 引入接口
import { Todo } from './types/todo'
import { saveTodos, readTodos } from './utils/localStorageUtils'

export default defineComponent({
    name: "",
    components: {
        Header,
        List,
        Footer
    },
    setup() {
        // 定义数组数据
        // const state = reactive<{todos: Todo []}>({
        //     todos: [
        //         { id: 1, title: '宝马', isCompleted: false },
        //         { id: 2, title: '奔驰', isCompleted: true },
        //         { id: 3, title: '奥迪', isCompleted: false },
        //     ]
        // })
        const state = reactive<{todos: Todo []}>({
            todos: [],
        })
        // 界面加载完毕后果了一会再读取数据
        onMounted(() => {
            setTimeout(()=> {
                state.todos = readTodos();
            }, 1000)
        })


        // 添加数据的方法
        const addTodo = (todo: Todo) => {
            state.todos.unshift(todo)
        }
        // 删除数据的方法
        const deleteTodo = (index: number) => {
            state.todos.splice(index, 1)
        }
        // 修改Ttodo的 isCompleted 属性的状态
        const updateTodo = (todo: Todo, isCompleted: boolean) => {
            todo.isCompleted = isCompleted
            console.log(todo);
            
        }
        // 全选 or 全不选
        const checkAll = (isCompleted: boolean) => {
            state.todos.forEach((todo) => {
                todo.isCompleted = isCompleted
            })
        }
        // 清楚已完成任务
        const clearAllCompleteTodos = () => {
            state.todos = state.todos.filter(todo => !todo.isCompleted)
        }

        // 监视操作：如果todos数组的数据变化了，直接存储到浏览器的缓存中
        // watch(() => state.todos, value => {
        //     localStorage.setItem('todos_key', JSON.stringify(value))
        // }, {
        //     deep: true
        // })

        // watch(() => state.todos, value => {
        //     saveTodos(value)
        // }, {
        //     deep: true
        // })

        watch(() => state.todos, saveTodos, { deep: true })

        return {
            ...toRefs(state),
            addTodo,
            deleteTodo,
            updateTodo,
            checkAll,
            clearAllCompleteTodos
        }
    }
})
</script>

<style lang='scss' scoped>
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>