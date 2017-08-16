const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'js/bundle.[chunkhash].js'
  },
  module:{
    rules: [
       {
        test: /\.js$/, exclude: path.resolve(__dirname, "node_modules"), loader: "babel-loader" ,include: path.resolve(__dirname, "src")
        // query: {
        //   presets: ['latest']
        // }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          {
            loader: 'postcss-loader'
            // ,options: {
            //   plugins: (loader)=> [
            //   require("autoprefixer")(),
            //   require("postcss-import")()
            //   ]
            // }
          }
        ]
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      }
     ]
  }
  ,
  plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true,
  })]
}