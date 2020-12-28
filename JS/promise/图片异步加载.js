/** @format */

function asyncDownload(url) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      resolve(img);
    };
    img.onerror = err => {
      reject(err);
    };
    // 添加之后会下载， 注意回调写前面
    img.src = url;
  });
}
