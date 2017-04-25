const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  watch: true,
  watchOptions: {
    poll: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015'] },
        }],
      }
      /*,{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }*/
      ,{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{ loader: 'css-loader', query: { modules: true, sourceMaps: true }}]
        })
      }
    ],
  },
};
