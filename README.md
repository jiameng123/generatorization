# generatorization

将 promise 转化为 generator

## example

```
    npm install gen-promise

    or

    yarn add gen-promise

    var genP  = require("gen-promise");

    genP(function*() {
        const a = yiled Promise.resolve(123);
        console.log(a);
    })

```
