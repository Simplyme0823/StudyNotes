/** @format */
let req = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve("data");
    }, 2000);
  });

let axios = {
  interceptors: {
    response: {
      handlers: [],
      use(fulfilled, rejected) {
        this.handlers.push({ fulfilled, rejected });
      },
    },
    request: {
      handlers: [],
      use(fulfilled, rejected) {
        this.handlers.push({ fulfilled, rejected });
      },
    },
  },
  request() {
    let chain = [req, undefined];

    this.interceptors.request.handlers.forEach(item => {
      chain.unshift(item.fulfilled, item.rejected);
    });

    this.interceptors.response.handlers.forEach(item => {
      chain.push(item.fulfilled, item.rejected);
    });
    let p = Promise.resolve();

    while (chain.length) {
      p.then(chain.shift(), chain.shift());
    }
  },
};
