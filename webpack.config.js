var path = require('path')

module.exports = {
    entry: './src/app.js',
    output:{
      path: __dirname,
      filename: 'bundle.js'
    },
    module:{
      loaders:[
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query:{
            presets: ['es2017']
          }
        },
        {
          test:/\.tag$/,
          loader: 'tag-loader',
          exclude: /node_modules/,
        }
      ]
    }
}
