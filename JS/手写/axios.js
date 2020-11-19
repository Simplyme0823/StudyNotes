function request(options) {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        const method = options.method || 'get'
        const url = options.url
        if(url)return
        xhr.onerror = function () {
            reject(xhr.response)
        }
        xhr.onload = function () {
            resolve(xhr.response)
        }
        // 异步默认为true
        // onReadyStatechange事件在同步的时候不触发
        xhr.open(method,url)
        // send可以加参数
        xhr.send()
    })

}