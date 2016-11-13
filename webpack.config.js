var webpack = require('webpack');
var path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: path.resolve(__dirname,'index.js'),
    ventor: ['react','react-dom']
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    publicPath: path.resolve(__dirname, 'assets'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /.(js|jsx)$/,
        loader: 'babel',
        exclude: 'node_modules',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:['ventor'],
      minChunks:Infinity
    })
  ]
}
