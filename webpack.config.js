var webpack = require('webpack');

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  plugins: [new webpack.ProvidePlugin({
    '$': 'jquery',
    'jquery': 'jquery'
  })],
  output: {
    path: "./app/temp/scripts",
    filename: "[name].js"
  },
  module: {
    loaders: [{
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /flickity/,
        loader: 'imports?define=>false&this=>window'
      }
    ]
  },
  devtool: 'eval-source-map'
}
