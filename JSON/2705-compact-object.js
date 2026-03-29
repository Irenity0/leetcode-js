/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj
            .filter(item => Boolean(item))
            .map(item => compactObject(item));
    } 
    else if (typeof obj === "object" && obj !== null) {
        let res = {};
        for (let key in obj) {
            if (Boolean(obj[key])) {
                res[key] = compactObject(obj[key]);
            }
        }
        return res;
    }
    return obj;
};