import {  Toast } from 'cube-ui'

//校验手机号
export function checkMobile(params) {
    var reg = /^1[34578]\d{9}$/;
    let isTrue = reg.test(params)
    if (!isTrue) {
       alert('输入正确的手机号码')
        return false
    } else {
        return true
    }


}