var path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/src/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2017']
                }
            },
            {
                test: /\.tag$/,
                loader: 'tag-loader',
                exclude: /node_modules/,
            }
        ]
    }
}