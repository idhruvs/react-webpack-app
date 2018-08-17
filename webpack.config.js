const path = require('path');
module.exports = {
    mode: 'development',
    devServer: {
        contentBase: './src',
        publicPath: '/output'
    },
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
};