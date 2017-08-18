const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')

module.exports = {
  entry: {
    print: './src/print.js',
    app: [ './src/app.js'],
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
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
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader',
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {loader: 'url-loader', options: {limit: 1000, name: 'images/[name]-[hash:5].[ext]'}},
          {loader: 'image-webpack-loader'}
        ]
      },
      {
        test: /\.ttc$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name]-[hash:5].[ext]'
        },
        include: path.resolve(__dirname, "src")
      }
      // {
      //   test: /\.html$/,
      //   loader: 'html-loader',
      //   include: path.resolve(__dirname, "src")
      // }
     ]
  }
  ,
  plugins: [
  // new webpack.optimize.UglifyJsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    // template: require('html-webpack-template'),
    // inject: true,
    // appMountIds: ["app"],
    // appMountId: "app",
    // baseHref: 'localhost',
    // devServer: ' http://localhost:3000',
    // lang: 'zh-cn',
    // links: [
    // 'https://fonts.googleapis.com/css?family=Roboto',
    //     {
    //       href: '/apple-touch-icon.png',
    //       rel: '<%=htmlWebpackPlugin.files.webpackManifest%>',
    //       sizes: '180x180'
    //     },
    //     {
    //       href: '/favicon-32x32.png',
    //       rel: 'icon',
    //       sizes: '32x32',
    //       type: 'image/png'
    //     }
    // ],
    // meta: [
    // {name: 'keywords', content: 'webpack demo'},
    // {name: 'description', content: 'a webpack demo'}
    // ],
    // mobile: true,
    // inlineManifestWebpackName: 'webpackManifest',
    // title: "webpack demo",
    // scripts: [
    //   '<%=htmlWebpackPlugin.files.webpackManifest%>'
    // ]
    })
  ]
}