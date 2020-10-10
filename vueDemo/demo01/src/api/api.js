// src/api/api.js
import axios from 'axios'

// 允许跨域携带cookie
// axios.defaults.withCredentials = true;

export const list = () => {
    return axios.request({
        method: 'get',
        url: 'http://192.168.3.31:8031/user/list'
    })
}

/** 
export const start = () => {
    return axios.request({
        method: 'get',
        url: 'http://xxxxx.xxx/api/start'
    })
}

export const getDisassemble = (funName = 'main') => {
    return axios.request({
        method: 'post',
        url: 'http://xxxxx.xxx/api/disassemble',
        data: {
            funName
        }
    })
}
*/