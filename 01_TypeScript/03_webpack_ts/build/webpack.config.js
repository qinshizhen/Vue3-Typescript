const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}

module.exports = {
    mode: isProd ? 'production' : 'development', // 模式
    entry: {
        // 主入口目录
        app: './src/main.ts' 
    },

    output: {
        path: resolve('dist'),  // 打包后的文件放在dist目录下
        filename: '[name].[contenthash:8].js' // 文件已 app.8位的哈希值.js 的格式命名
    },

    module: {
        rules: [{
            // 用 ts-loader 对 src 下的ts文件进行操作
            test: /\.tsx?$/,
            use: 'ts-loader',
            include: [resolve('src')]
        }]
    },

    plugins: [
        new CleanWebpackPlugin({}),  // 清掉dist目录下以前打包的文件

        new HtmlWebpackPlugin({ // 针对 public下的 index.html 进行打包
            template: './public/index.html'
        })
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js']  // 数组内填入什么后缀，引入该后缀时可以文件名可以不带后缀
    },

    devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map', // 代码错误提示信息 

    devServer: {
        host: 'localhost', // 主机名
        stats: 'errors-only', // 打包日志输出输出错误信息
        port: 8081,
        open: true
    },
}