const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
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

   plugins: [
      new WorkboxPlugin.GenerateSW({
         // these options encourage the ServiceWorkers to get in there fast
         // and not allow any straggling "old" SWs to hang around
         maximumFileSizeToCacheInBytes: 5000000,
         clientsClaim: true,
         skipWaiting: true,
      }),
      new dotenv(),
   ],
   //

   //
};
