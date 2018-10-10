import webpack from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
let cfg = require('./webpack.common').default;

export default merge(cfg,{
    entry: {
        //主文件
        app : './src/app.js'
    },
    //插件项
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            minSize: 30000,
            minChunks: 2,
            cacheGroups: {
                commons: {
                    test:/\.js(x?)$/,
                    chunks: "initial",
                    filename: 'common.js',
                }
            }
        },
        minimize:true,
    },
    mode: 'production',
    externals: {
        "jquery": "jQuery",
        "react": "React",
        "react-dom": "ReactDOM",
        "zepto": "Zepto",
        "marked":"Marked",
        "moment":"moment",
        "@clake/react-bootstrap4":"ReactBootstrapV4",
        "@clake/react-bootstrap4-window":"ReactBootstrapV4Window"
    }
});