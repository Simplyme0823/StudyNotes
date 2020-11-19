/** @format */

const offset = require("./offsetTop");

// imgs DOM

function lazyLoad(className) {
  const winHeight = document.documentElement.clientHeight;
  const imgsArray = document.getElementsByName(className);
  Array.from(imgsArray).forEach(img => {
    // 优化,用data-Loaded标记已经加载的图片
    if (img.getAttribute("data-Loaded")) return;
    // 第一种方法：利用offset来获取图片的位置
    if (offset(img).top <= winHeight) {
      const newImg = new Image();
      newImg.src = img.getAttribute("data-orign");
      newImg.onload = function () {
        img.src = newImg.src;
        img.setAttribute("data-Loaded", "true");
      };
    }
    // 第二种方法：getClientBoundClient
    const { bottom } = img.getBoundingClientRect();
    if (bottom <= winHeight) {
    }

    // 第三种方法
    const observer = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.intersectionRatio <= 0) return;
        // 开始加载图片
        const img = item.target;
        const newImg = new Image();
        newImg.src = img.getAttribute("data-orign");
        newImg.onload = function () {
          img.src = newImg.src;
          img.setAttribute("data-Loaded", "true");
        };
        // 终止观察
        observer.unobserve(img);
      });
    });

    imgsArray.forEach(item => {
      observer.observe(item);
    });
  });
}

lazyLoad();

window.addEventListener("scroll", lazyLoad);
