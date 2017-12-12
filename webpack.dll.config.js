const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      'react',
      'react-dom',
      //其他库
    ],
  },
  output: {
    path: './build',
    filename: '[name].js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: './manifest.json',
      name: '[name]_library',
    })
  ]
};