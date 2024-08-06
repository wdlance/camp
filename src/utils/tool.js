/**
 * 节流
 * @param {Function} func 要执行的回调函数
 * @param {Number} duration 延时的时间
 */
export function throttle(fn, delay = 500) {
  let timer = null;
  let startTime = Date.now();

  return function () {
    const curTime = Date.now();
    const remaining = delay - (curTime - startTime);

    clearTimeout(timer);

    if (remaining <= 0) {
      fn.apply(this, arguments);
      startTime = Date.now();
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        startTime = Date.now();
      }, remaining);
    }
  };
}
