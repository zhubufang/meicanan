
import { service } from './request'
import qs from 'qs'


// 用户登入
export function login(data) {
    return service({
        url: "/login",
        method: "post",
        data:qs.stringify(data)
    })
}

// 获取用户信息
export function getInfo(token) {
    return service({
        url:'/user/getUserInfo',
        method:'get',  
        params:{
            token:token
        }    
    })
}

// 登出
export function loginOut(token) {
    return service({
        url:'/logout',
        method:'get',
        params:{
            token
        }
    })
}