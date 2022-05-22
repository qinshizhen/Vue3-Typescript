// 需求2: 封装发ajax请求的hook函数

import { ref } from 'vue'
import axios from 'axios'

/* 
使用axios发送异步ajax请求
*/
export default function useUrlLoader<T>(url: string) {

  const loading = ref(true)
  const errorMsg = ref(null)
  const result = ref<T | null>(null)

  axios.get(url)
    .then(response => {
      loading.value = false
      result.value = response.data
    })
    .catch(e => {
      loading.value = false
      errorMsg.value = e.message || '未知错误'
    })

  return {
    loading,
    errorMsg,
    result,
  }
}