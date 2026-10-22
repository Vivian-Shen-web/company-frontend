import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import { message } from 'ant-design-vue'

export default class Http {
  axios
  private timeout = 5 * 1000 //5秒超时
  private isRepeat(s: string | undefined) {
    const url = s || ''
    if (this.preventRepeat[url]) {
      if (new Date().getTime() - this.preventRepeat[url] <= this.timeout) {
        return true
      }
    }
    this.preventRepeat[url] = new Date().getTime()
    return false
  }
  private preventRepeat: any = {}
  private repeatReturn<T>() {
    return new Promise<HttpResult<T>>((_, rej) => {
      message.warning({ content: '操作过快，请不要重复操作' })
      rej('重复调用')
    })
  }
  private clearRepeat = (s: string | undefined) => {
    this.preventRepeat[s || ''] = null
  }
  constructor() {
    const baseURL = import.meta.env.VITE_SERVER_PATH || '/api/'

    this.axios = axios.create({
      baseURL: baseURL,
      timeout: 90000 // request timeout
    })

    this.axios.interceptors.response.use(
      (response) => {
        this.clearRepeat(response.config.url)
        if (response.config.responseType === 'blob') {
          return response
        }
        const res = response.data
        if (res.code !== 200) {
          console.log('接口信息报错', res.msg)
          message.error({ content: res.msg })
          return Promise.reject(new Error(res.msg || 'Error'))
        } else {
          return res
        }
      },
      (error) => {
        this.clearRepeat(error.config.url)
        if (!error.response) {
          message.error({ content: '请求失败！' }).then(() => {
            //do nothing
          })
        } else if (error.response.status == 403) {
          message.error({ content: error.response?.data?.msg || '没有权限' }).then(() => {
            //do nothing
          })
        } else {
          message.error({ content: error.response?.data?.msg || '系统错误' })
        }
        return Promise.reject(error)
      }
    )
  }
  request<T>(config: AxiosRequestConfig) {
    if (
      config.method?.toLocaleLowerCase() == 'put' ||
      config.method?.toLocaleLowerCase() == 'post'
    ) {
      if (this.isRepeat(config.url)) {
        return this.repeatReturn<T>()
      }
    }
    return this.axios.request<any, AxiosResponse<T>>(config)
  }

  private getFileNameFromContentDisposition(contentDisposition: string) {
    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
    const matches = filenameRegex.exec(contentDisposition)
    return matches != null && matches[1] ? matches[1].replace(/['"]/g, '') : 'downloaded_file'
  }

  post<T>(url: string, data?: any | undefined, config?: AxiosRequestConfig<any> | undefined) {
    if (this.isRepeat(url)) {
      return this.repeatReturn<T>()
    }
    return this.axios.post<any, HttpResult<T>>(url, data, config)
  }
  put<T>(url: string, data?: any | undefined, config?: AxiosRequestConfig<any> | undefined) {
    if (this.isRepeat(url)) {
      return this.repeatReturn<T>()
    }
    return this.axios.put<any, HttpResult<T>>(url, data, config)
  }
  get<T>(url: string, config?: AxiosRequestConfig<any> | undefined) {
    return this.axios.get<any, HttpResult<T>>(url, config)
  }
  delete<T>(url: string, data?: any | undefined, config?: AxiosRequestConfig<any> | undefined) {
    return this.axios.delete<any, HttpResult<T>>(url, config)
  }
  download(url: string, params: any) {
    return this.axios
      .get(url, {
        params: params,
        responseType: 'blob' // 重点：设置 responseType 为 'blob'
      })
      .then((response: AxiosResponse) => {
        // 处理下载后的文件
        const blob = new Blob([response.data], { type: response.headers['content-type'] })
        const downloadUrl = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = downloadUrl
        a.download = this.getFileNameFromContentDisposition(response.headers['content-disposition'])
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(downloadUrl)
      })
      .catch((error: any) => {
        message.error('下载失败:', error)
      })
  }
}
