const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: ['./src/index.js', './src/create_table.js'],
  },

  mode: 'development',

  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.js$/, use: ['babel-loader'] }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'public'), 
  },

  plugins: [new MiniCssExtractPlugin()],
  
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },
}