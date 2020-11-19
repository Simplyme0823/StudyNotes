/** @format */

function ajax(options) {
  const { url, success, error, method } = options;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    //https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
    if (xhr.readyState == 4 && xhr.status > 200 && xhr.status < 300) {
      return success(xhr.response);
    }
    return error(xhr);
  };
  xhr.open(method, url, true);
  xhr.send();
}

// axios精髓
function cancel(executor) {
  let resolve_;
  this.promise = new Promise((resolve, reject) => {
    resolve_ = resolve;
  });

  executor(function c() {
    resolve_();
  });
}

function ajaxPromise(options) {
  const { url, method, data, params } = options;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status > 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
    xhr.onerror = function () {
      reject(xhr.response);
    };
    if (params) {
      const paramsString = Object.keys(params).reduce((prev, cur) => {
        prev += `${cur}=${params[cur]}`;
      }, "");
      url += "?" + paramsString;
    }
    xhr.open(method, url, true);
    if (method.toUpperCase() !== "GET") {
      xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
      xhr.send(data);
    } else {
      xhr.send();
    }
  });
}
