const path = require('path');

module.exports = {
    mode: 'development',
    entry: './demo.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
};