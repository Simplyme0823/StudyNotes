/** @format */

class MyPerformance {
  static timing = window.performance && window.performance.timing;
  static fpt = 0;
  static init() {
    window.addEventListener("load", () => {
      // 上报指标
      if (!this.timing) {
        console.warn("当前浏览器不支持performance API");
        return;
      }

      // TODO 上报时间指标
      // netType
    });
  }

  //重定向耗時
  static getRedirectTiming() {
    return this.timing.redirectEnd - this.timing.redirectStart;
  }

  // DNS解析
  static getDnsTiming() {
    return this.timing.domainLookupEnd - this.timing.domainLookupStart;
  }

  // tcp连接耗时
  static getTcpTiming() {
    return this.timing.connectEnd - this.timing.connectStart;
  }

  // 首字节
  static getTimeOfFirstByte() {
    return this.timing.responseStart - this.timing.navigationStart;
  }

  // request请求耗时
  static getReqTime() {
    return this.timing.responseEnd - this.timing.responseStart;
  }

  // 纯dom解析 不包含外部资源加载与执行
  static getParsePureDomTime() {
    return this.timing.domInteractive - this.timing.domLoading;
  }

  // 页面资源的加载耗时
  static getDomContentLoadTime() {
    return this.timing.domComplete - this.timing.domInteractive;
  }

  // 页面加载总耗时
  static getLoadTime() {
    return this.timing.loadEventStart - this.timing.navigationStart;
  }

  // 白屏时间
  static getFirstPaintTime() {
    return Math.round(
      (window.performance.getEntriesByName &&
        window.performance.getEntriesByName("first-paint") &&
        window.performance.getEntriesByName("first-paint")[0] &&
        window.performance.getEntriesByName("first-paint")[0].startTime) ||
        this.fpt,
    );
  }

  // 方法在
  static record(VueRouter) {
    const setFPT = () => {
      if (window.performance && window.performance.now) {
        this.fpt = window.performance.now();
      }
    };
    return {
      // 混入到根组件
      // 根组件created的时候触发下面的函数
      created: () => {
        if (router) {
          router.onReady(() => {
            setFPT();
          });
        } else {
          setFPT();
        }
      },
    };
  }

  static getTimings() {
    if (!this.timing) {
      console.warn("不支持");
      return {};
    }
    return {};
  }
}
