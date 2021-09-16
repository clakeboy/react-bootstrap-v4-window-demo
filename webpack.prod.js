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
                use: [MiniCssExtractPlugin.loader,'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','less-loader'],
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        // splitChunks: {
        //     minSize: 50000,
        //     minChunks: 2,
        //     cacheGroups: {
        //         commonFunc: {
        //             filename:'common.js',
        //             test:/\.js(x?)$/,
        //             chunks: "initial"
        //         }
        //     }
        // },
        minimizer:[new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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