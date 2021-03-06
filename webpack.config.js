
var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: __dirname,
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
