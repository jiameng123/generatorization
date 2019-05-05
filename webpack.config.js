const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: "index.js",
        libraryTarget: "commonjs2",
        globalObject: "this"
    }
};
