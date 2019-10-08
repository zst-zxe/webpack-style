const path = require('path');
//导入在内存中生成html页面的插件
//1. 自动根据指定的页面生成一个对应的内存页面
//2. 自动导入生成的bundle.js
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {//配置dev-server
        open:true,//自动打开浏览器
        port:3000,//配置端口号
        contentBase:'./src',//默认打开路径
        hot:true//热重载
    },
    plugins: [//所有的插件都在这里声明创建
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),//指定模板页面，内存会根据指定的模板页面生成相应的页面
            filename:'index.html',//指定内存生成页面的名称

        })
    ],
    module:{//所有的加载器（loader）都在这里配置
        rules:[
            {
                test: /\.css$/,//test 与以.css结尾的文件匹配，匹配成功的话就使用（use）相应的加载器
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]

    },

};
