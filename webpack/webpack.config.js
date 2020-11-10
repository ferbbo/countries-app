const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMiniExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')
module.exports={
    entry:{app:'./src/index.js'},
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'../public')
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.(css|sass|scss)$/,
                exclude: /node_modules/,
                use:[CssMiniExtractPlugin.loader,'css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            title:'Countries App'
        }),
        new CssMiniExtractPlugin({
            filename:'[name].[contenthash].css'
        })
    ],
    optimization:{
        minimize: true,
        minimizer:[
            new CssMiniExtractPlugin()
        ]
    }
    
}