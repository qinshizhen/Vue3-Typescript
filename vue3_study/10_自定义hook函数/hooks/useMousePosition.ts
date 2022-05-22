import { onMounted, onUnmounted, ref } from "vue";
export default function () {
  // 初始化坐标数据
  const x = ref(-1);
  const y = ref(-1);

  // 用于收集点击事件坐标的函数
  const updatePosition = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  // 页面已经加载完毕了，再进行点击的操作
  // 页面加载完毕的生命周期
  // 挂载后绑定点击监听
  onMounted(() => {
    document.addEventListener("click", updatePosition);
  });
  // 卸载前解绑点击监听
  onUnmounted(() => {
    document.removeEventListener("click", updatePosition);
  });

  return {
    x,
    y,
  };
}