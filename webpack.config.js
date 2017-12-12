const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'app.html',
  filename: 'app.html',
  inject: 'body'
})
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve('__dirname + "/public"'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: ['style-loader'],
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader', options: {modules: true, importLoaders: 1}},
            {loader: 'postcss-loader'}
          ]
        }),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: ['style-loader'],
          use: [
            {loader: 'css-loader'}
          ]
        }),
        include: /node_modules/
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: ['style-loader'],
          use: [
            {loader: 'css-loader'},
            {loader: 'postcss-loader'},
            {loader: 'sass-loader'}
          ]
        })
      }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './public', // 本地服务器在哪个目录搭建页面
    historyApiFallback: true, // 当我们搭建spa应用时非常有用，它使用的是HTML5 History Api，任意的跳转或404响应可以指向 index.html 页面；
    inline: true, // 用来支持dev-server自动刷新的配置，webpack有两种模式支持自动刷新，一种是iframe模式，一种是inline模式；
    hot: true, // 启动webpack热模块替换特性
    port: 8082
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin({filename: 'styles.css', disable: false, allChunks: true})
  ]
}
