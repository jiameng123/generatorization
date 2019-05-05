# generatorization

将 promise 转化为 generator

## example

```
    var { genP } = require("generatorization");

    genP(function*() {
        const a = yiled Promise.resolve(123);
        console.log(a);
    })

```
