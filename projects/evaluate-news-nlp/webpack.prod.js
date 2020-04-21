const path = require('path');
const common = require('./webpack.common');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

//*****************************************************

module.exports = merge(common, {
   mode: 'production',
   //
   output: {
      filename: '[name].[contentHash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   //
   optimization: {
      minimizer: [
         new OptimizeCssAssetsPlugin(),
         new TerserPlugin({
            //   exclude: '/dist/service-worker.js',
         }),
         new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html',
            minify: {
               removeAttributeQuotes: true,
               collapseWhitespace: true,
               removeComments: true,
            },
         }),
      ],
   },
   //
   plugins: [
      new WorkboxPlugin.GenerateSW({
         swDest: './dist/service-worker.js',
      }),

      new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
      new CleanWebpackPlugin(),
   ],
   //
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: [
               { loader: MiniCssExtractPlugin.loader }, //3. Extract Css into file
               'css-loader', //2. Turns css into commonjs
               'sass-loader', //1. Turns sass into css
            ],
         },
      ],
   },
});
