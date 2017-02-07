var webpack = require('webpack')
var path = require('path')
var debug = process.env.NODE_ENV !== "production";

const sassLoaders = [
  'css-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry:  __dirname + "/src/react-emoji-password-input.js",
  output: {
    path: __dirname + "/dist",
    filename: "react-emoji-password-input.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true })
  ],
};
