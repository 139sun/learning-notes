// 封装的axios的公用方法 

import axios from "axios";
import qs from "qs";
axios.defaults.baseURL = "http://59.110.138.169/api/ajax/user";
axios.defaults.timeout = 5000;
// 请求拦截器
axios.interceptors.request.use(function (config) {
    if(config.method == "post"){
        config.data = qs.stringify(config.data);
    }
    return config;
}, function (error) {
    // 对请求失败做处理
    return Promise.reject(error);
});
//响应拦截器
axios.interceptors.response.use(function (config) {
    return config;
}, function (error) {
    // 对请求失败做处理
    return Promise.reject(error);
});
export default axios;