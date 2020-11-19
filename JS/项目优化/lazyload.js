/** @format */

function offset(dom) {
  let parent = dom.offsetParent;
  let offsetLeft = dom.offsetLeft;
  let offsetTop = dom.offsetTop;
  while (parent !== null) {
    offsetLeft += parent.offsetLeft;
    offsetTop += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return {
    offsetLeft,
    offsetTop,
  };
}
const winHeight = document.documentElement.clientHeight;
function lazyLoad(selector) {
  const imgArray = document.getElementsByClassName(selector);

  imgArray.forEach(img => {
    const loaded = img.getAttribute("data-loaded");
    if (loaded) return;

    if (offset(img).offsetTop <= winHeight) {
      const newImg = new Image();
      newImg.src = img.getAttribute("data-src");
      newImg.onload = function () {
        img.src = newImg.src;
      };
    }
  });
}

function debounce(options) {
  const { fn, cb, immidate = false, delay = 0 } = options;
  if (!fn) {
    throw new Error("fn is not defined");
  }

  let timer;

  function handler(context, args) {
    const res = fn.apply(context, args);
    if (cb) {
      cb(res);
    }
  }

  function Fn() {
    if (timer) {
      clearTimeout(timer); // timer = 1
    }

    if (immidate) {
      let callNow = !timer;
      if (callNow) handler(this, arguments);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    } else {
      timer = setTimeout(() => {
        handler(this, arguments);
      }, delay);
    }
  }
  Fn.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };
  return Fn;
}

window.addEventListener("scroll", debounce({ fn: lazyLoad, delay: 50 }));
