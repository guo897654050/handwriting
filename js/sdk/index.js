// url: https://juejin.cn/post/7085679511290773534
class SDK {
  // 区分不用业务线所需要的id
  constructor(id) {
    this.productId = id;
  }

  // 发送
  send(baseUrl, query = {}) {
    query.productId = this.productId;
    let queryStr = Object.entries(query).map((key, value) => `${key}=${value}`).join('&');
    // 优先使用浏览器支持sendBeacon
    const img = new Image();
    img.src = `${baseUrl}?${queryStr}`
  }


  event(key, val = {}) {
    let eventUrl = 'https://demo';
    this.send(eventUrl, { event: { [key]: val } })
  }

  pv() {
    this.send('pv')
  }

  // 页面首次渲染时间：fp: domloading-navigationStart
  // dom加载完成: DCL: domContentLoadedEventEnd - navigationStart
  // 图片等外联资源加载完毕:load: loadEventEnd - navigationStart;
  // 全部信息上报自己处理
  initPerformance() {
    let performanceUrl = 'https://demo';
    this.send(performanceUrl, window.performance.PerformanceTiming)
  }

  error(err, msg = {}) {
    const errorUrl = 'http://error/';
    const { message, stack } = err;
    this.send(errorUrl, { message, stack, ...msg })
  }

  ininError() {
    // 冒泡
    window.addEventListener('error', (e) => {
      this.error(e)
    })
    // promise错误
    window.addEventListener('unhandledRejection', (e) => {
      this.error(new Error(e.reason), { type: 'unhandledRejection' })
    })
  }
}