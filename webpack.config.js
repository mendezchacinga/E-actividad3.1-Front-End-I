const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './layouts/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    //assetModuleFilename: 'images/[hash][ext][query]',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash][ext]'
        }
      }
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './layouts/AIS-index.html',
    }),
    new MiniCssExtractPlugin(),
  ],

};