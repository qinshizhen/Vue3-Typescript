<template>
  <!-- <h2>toRefs 的使用</h2>
  <h3>姓名: {{ state.name }}</h3>
  <h3>年龄: {{ state.age }}</h3>

  <hr />
  <h3>姓名: {{ name }}</h3>
  <h3>年龄: {{ age }}</h3> -->

  <h2>App</h2>
  <h3>foo: {{foo}}</h3>
  <h3>bar: {{bar}}</h3>
  <h3>foo2: {{foo2}}</h3>
  <h3>bar2: {{bar2}}</h3>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

/*
toRefs:
  将响应式对象中所有属性包装为ref对象, 并返回包含这些ref对象的普通对象
  应用: 当从合成函数返回响应式对象时，toRefs 非常有用，
      这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
  问题: 
      reactive 对象取出的所有属性值都是非响应式的
  解决: 
      利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性
*/

// export default defineComponent({
//   name: "App",
//   setup() {
//     const state = reactive({
//       name: "孙悟空",
//       age: 10,
//     });

//     const state2 = toRefs(state);
//     const { name, age } = toRefs(state);
//     // 定时器，更新数据（如果数据变化了，界面也会随之变化，肯定是响应式数据）
//     setTimeout(() => {
//       state.name += "++";
//       state.age += 10;
//       // state2.name.value += '--'
//       name.value += '123'
//       // state2.age.value += 100
//     }, 2000);

//     return {
//       state,
//       // ...state, // 不是响应式的数据 ----> {name: .., age: ..}
//       // ...state2 // toRefs 返回来的对象
//     };
//   },
// });

export default {

  setup () {

    const state = reactive({
      foo: 'a',
      bar: 'b',
    })

    const stateAsRefs = toRefs(state)

    setTimeout(() => {
      state.foo += '++'
      state.bar += '++'
    }, 2000);

    const {foo2, bar2} = useReatureX()

    return {
      // ...state,
      ...stateAsRefs,
      foo2, 
      bar2
    }
  },
}

function useReatureX() {
  const state = reactive({
    foo2: 'a',
    bar2: 'b',
  })

  setTimeout(() => {
    state.foo2 += '++'
    state.bar2 += '++'
  }, 2000);

  return toRefs(state)
}
</script>