/**
 * Created by CLAKE on 2016/8/9.
 */
export default {
    //页面入口文件配置
    mode: 'production',
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
        chunkFilename:`./view/[name].[chunkhash:8].js`
    },
    module: {
        rules: [
            { test: /\.woff[2]?$/, use: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,  use: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot$/,  use: "file-loader" },
            { test: /\.svg$/,  use: "url-loader?limit=10000&mimetype=image/svg+xml" },
            {
                test: /\.jsx$/,
                use: {loader:'babel-loader',query:{presets:['es2015', 'stage-0', 'react']}},
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: {loader:'babel-loader',query:{presets:['es2015', 'stage-0', 'react']}},
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: 'url-loader?limit=10000&name=img/[hash:8].[name].[ext]'
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: [ '.js', '.json', '.less', '.jsx']
    },
    node: {
        fs: 'empty'
    },
    externals: {
        "jquery": "jQuery",
        "react": "React",
        "react-dom": "ReactDOM",
        "zepto": "Zepto",
        "marked":"Marked",
        "moment":"moment"
    }
};