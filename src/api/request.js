import axios from 'axios'
import router from '@/router'

//http://yan.nat100.top
//http://192.168.31.87:8080
//http://192.168.31.34:8081
//http://47.97.255.55:9999
//http://284m99645t.wicp.vip/
//http://192.168.31.100:8080
const host = 'http://284m99645t.wicp.vip'


// 创建axios实例
export const service = axios.create({
    baseURL: host,
    timeout: 5000,
})

//请求拦截
service.interceptors.request.use((config) => {
    return config
}, error => {
    Promise.reject(error)
})

//响应拦截
service.interceptors.response.use((response) => {
    const res = response.data
    if (res.code !== 0) {
        Message({
            message: res.msg,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(res.msg || 'Error')
    } else {
        return response.data
    }
}, error => { // 这里是返回状态码不为200时候的错误处理
    console.log(error) // for debug
    return Promise.reject(error)
})