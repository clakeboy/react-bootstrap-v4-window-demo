import webpack from 'webpack';
import merge from 'webpack-merge';
let cfg = require('./webpack.common').default;

export default merge(cfg,{
    entry: {
        //主文件
        app : [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client?reload=true',
            './src/app.js'
        ]
    },
    //插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            }
        ]
    },
    // optimization: {
    //     splitChunks: {
    //         minSize: 30000,
    //         minChunks: 1,
    //         cacheGroups: {
    //             commons: {
    //                 name: "common",
    //                 chunks: "initial"
    //             }
    //         }
    //     },
    //     minimize:true,
    //     runtimeChunk: {
    //         name: 'manifest'
    //     }
    // },
    mode: 'development',
    devtool: 'eval-source-map',
});