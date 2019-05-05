const genP = require("../lib");
const assert = require("assert");

function aa(a, b) {
    return new Promise(res => {
        setTimeout(() => {
            res(a + b);
        }, 3000);
    });
}

function bb(a, b) {
    return new Promise(res => {
        setTimeout(() => {
            res(a + b);
        }, 2000);
    });
}

describe("generator", function() {
    it("promise", function() {
        genP(function*() {
            const a = yield aa("a", "b");
            assert(a == "ab");
            const b = yield bb("c", "C");
            assert(b == "cC");
        }).catch(err => {
            console.log(err);
        });
    });

    it("promise2", function() {
        genP(function*() {
            const a = yield Promise.resolve(123);
            assert(a === 123);
        });
    });
});
