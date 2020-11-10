const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../public"),
  },
  devServer: {
    open: true,
    port: 3000,
  },

  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sass|css|scss)$/,
        exclude:/node_modules/,
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title:"Countries App"
    }),
  ],
};
