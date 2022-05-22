<template>
  <h2>Child 组件</h2>
  <h3>msg: {{ msg }}</h3>
  <!-- <h3>count: {{ count }}</h3> -->
  <button @click="emitXXX">修改父级组件的值</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'child',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  /**
   * setup 细节问题
   */
  
  /**
   * setup执行的时机
   *  - setup 是在beforeCreate 生命周期回调之前就执行了，而且就执行一次
   *  - 由此可以推断出： setup 在执行的时候，当前的组件还没有创建出来，也就意味着： 组件实例对象 this 根本就不能用
   *  - this 是 undefined， 说明就不能通过 this 再去调用 data、 computed、 methods、 props 中的相关内容了
   *  - 其实所有的 composition API 相关回调函数中也都不可以
   */

  // 数据初始化的生命周期回调
  // beforeCreate() {
  //   console.log('beforeCreate执行了')
  // },
  // setup () {
  //   console.log("setup 执行了", this)
  // }

  /**
   * setup的返回值
   *  - 一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
   *  - 返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
   *  - 返回对象中的方法会与methods中的方法合并成功组件对象的方法
   *  - 如果有重名, setup优先
   * 注意:
   *  - 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
   *  - setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据
   */

  // setup() {
  //   const showMsg = () => {
  //     console.log('setup -> showMsg');
  //   }
  //   return {
  //     showMsg
  //   }
  // },
  // data() {
  //   return {
  //     count: 10
  //   }
  // },
  // mounted() {
  //   console.log(this)
  // },
  // methods: {
  //   // showMsg() { // Duplicated key 'showMsg'
  //   //   console.log('methods -> showMsg')
  //   // },
  //   showMsg2() {
  //     console.log('methods -> showMsg2')
  //   }
  // },

  /**
   * setup的参数
   *  - setup(props, context) / setup(props, {attrs, slots, emit})
   *  - props: 包含props配置声明且传入了的所有属性的对象
   *  - attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
   *  - slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
   *  - emit: 用来分发自定义事件的函数, 相当于 this.$emit
   */
  setup(props, context) {
    console.log(props, context);
    // props, 是一个对象，里面有父级组件向子级组件传递的数据，并且是在子级组件中使用props接收到的所有的属性
    // console.log(props.msg);

    console.log(context.attrs.msg2);

    const emitXXX = () => {
      context.emit('xxx', 'xxxx')
    }
    return {
      emitXXX
    }
  }

  // setup(props, {attrs, slots, emit}) {
    
  // }



})
</script>

<style lang="scss" scoped>

</style>