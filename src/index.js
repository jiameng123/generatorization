function genP(genratorFunction) {
    const it = genratorFunction();
    function next(ret) {
        if (ret.done) return Promise.resolve(ret.value);
        if (ret.value instanceof Promise) {
            return ret.value.then(onFulfilled, onReject);
        }
        return Promise.reject("Type Error" + String(ret.value));
    }

    function onFulfilled(res = undefined) {
        let ret;
        try {
            ret = it.next(res);
        } catch (error) {
            onReject(error);
        }
        next(ret);
    }

    function onReject(error) {
        let ret;
        try {
            ret = it.next(error);
        } catch (error) {
            Promise.reject(error);
        }
        next(ret);
    }

    return new Promise((resovle, reject) => {
        onFulfilled();
    });
}

module.exports = genP;
