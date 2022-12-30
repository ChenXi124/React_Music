//网络请求方法
import axios from "axios";
import base from './base.js'
const api = {
    // 轮播
 getBanner(){
     return axios.get(base.banner)
 }

}
export  default  api