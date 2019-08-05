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
        inline: true,
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
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
};