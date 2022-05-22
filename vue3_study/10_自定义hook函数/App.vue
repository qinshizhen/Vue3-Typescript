<template>
  <h2>自定义hook函数</h2>
  <h2>x: {{ x }}, y: {{ y }}</h2>
  <hr />

  <h3 v-if="loading">正在加载中...</h3>
  <h3 v-else-if="errorMsg">错误信息: {{ errorMsg }}</h3>
  <ul v-else>
    <!-- /data/address.json -->
    <!-- <li>{{ result.id }}</li>
    <li>{{ result.address }}</li>
    <li>{{ result.distance }}</li> -->

    <!-- /data/products.json -->
    <template v-for="item in result" :key="item.id">
      <li>{{ item.id }}</li>
      <li>{{ item.title }}</li>
      <li>{{ item.price }}</li>
    </template>
  </ul>
</template>

<script lang="ts">
/**
 * 
    使用Vue3的组合API封装的可复用的功能函数
    自定义hook的作用类似于vue2中的mixin技术
    自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂
 */
// import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { defineComponent, watch } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";

// 地址数据接口
// interface AddressResult {
//   id: number;
//   name: string;
//   distance: string;
// }

// 产品数据接口
interface ProductResult {
  id: string;
  title: string;
  price: number;
}

export default defineComponent({
  name: "App",
  // 需求1: 收集用户鼠标点击的页面坐标
  setup() {
    // // 初始化坐标数据
    // const x = ref(-1);
    // const y = ref(-1);

    // // 用于收集点击事件坐标的函数
    // const updatePosition = (e: MouseEvent) => {
    //   x.value = e.pageX;
    //   y.value = e.pageY;
    // };

    // // 页面已经加载完毕了，再进行点击的操作
    // // 页面加载完毕的生命周期
    // // 挂载后绑定点击监听
    // onMounted(() => {
    //   document.addEventListener("click", updatePosition);
    // });
    // // 卸载前解绑点击监听
    // onUnmounted(() => {
    //   document.removeEventListener("click", updatePosition);
    // });

    // return {
    //   x,
    //   y,
    // };

    const { x, y } = useMousePosition();

    // const { loading, errorMsg, result } = useRequest<AddressResult>("/data/address.json");
    const { loading, errorMsg, result } = useRequest<ProductResult[]>("/data/products.json");

    // 监视
    watch(result, () => {
      if (result.value) {
        console.log(result.value.length); // 有提示
      }
    });

    return {
      x,
      y,
      loading,
      errorMsg,
      result,
    };
  },
});
</script>