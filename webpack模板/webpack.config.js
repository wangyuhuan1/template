const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV == 'development'
const { VueLoaderPlugin } = require('vue-loader');
const config = {
    entry: path.join(__dirname, 'src/index.js'),          //入口 要打包的文件
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')           //出口  打包成功的文件名 目录
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "demo"
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.png|jpg|gif$/i,
                use: 'file-loader'
            }
        ]
    },
    mode: "development"
}
if (isDev) {
    config.devServer = {
        host: 'localhost',
        port: 8080,
        overlay: {
            errors: true
        },
        hot: true
    }
}
module.exports = config