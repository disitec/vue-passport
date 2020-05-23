const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    axios: 'axios'
  },
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/Login.vue'),
    output: {
      filename: 'vue-passport.js',
      libraryTarget: 'umd',
      library: 'vue-passport',
      umdNamedDefine: true
    }
  })
];
