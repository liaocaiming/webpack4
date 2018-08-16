const path = require('path');

module.exports = {
    port: 9000,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true,
    hot: true
}