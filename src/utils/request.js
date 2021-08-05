/**
* 基于axios封装的请求模块
*/
import axios from 'axios'

// 创建一个axios 实例 ， 说白了就是复制了一个axios
// 我们请求的
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'

})

// 导出请求方法
export default request
