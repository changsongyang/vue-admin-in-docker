'use strict'

import axios from 'axios'
import vc from 'vue-cookie'
import ele from 'element-ui'
import { baseUrl } from '../config/axios'
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  // console.log(response)
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  ele.Message('网络异常')
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  // if (res.status === -404) {
  //   alert(res.msg);
  // }
  // if (res.data && (res.data.status != 20)) {
  //   ele.Message(res.data.message, { duration: 1000 })
  // }
  return res
}

export default {
  post(url, data) {
    const token = vc.get('userInfo') ? JSON.parse(vc.get('userInfo')).token : ''
    if (!data) {
      data = { token: token }
    } else {
      data.token = token
    }
    return axios({
      method: 'post',
      baseURL: baseUrl,
      url,
      data: data,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
