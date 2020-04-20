const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');

module.exports = {
   entry: {
      main: './src/client/index.js',
   },
   //
   output: {
      libraryTarget: 'var',
      library: 'Client',
   },

   //
   devtool: 'source-map', //none
   //
   stats: 'verbose',
   //
   module: {
      rules: [
         {
            test: '/.js$/',
            exclude: /node_modules/,
            loader: 'babel-loader',
         },

         {
            test: '/.html$/',
            use: ['html-loader'],
         },

         {
            test: '/.(svg|png|jpg|gif)$/',
            use: {
               loader: 'file-loader',
               options: {
                  name: '[name].[hash].[ext]',
                  output: 'imgs',
               },
            },
         },
      ],
   },
   //

   plugins: [new dotenv()],
   //

   //
};
