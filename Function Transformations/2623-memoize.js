/**
 * @param {Function} fn
 * @return {Function}
 */
const memoize = func => {
  const cache = new Map();
  return (...args) => {
    let strKey = args.join(',');

    if (!cache.has(strKey)) {
      cache.set(strKey, func(...args)); 
    }

    return cache.get(strKey);
  }
}
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */