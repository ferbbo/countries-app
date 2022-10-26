const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    open: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
      {
        test: /\.(sass|css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images/",
            useRelativePath: true,
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
