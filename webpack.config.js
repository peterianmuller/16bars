const path = require('path');


module.exports = {
	entry: "./app.js",
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: 'bundle.js'
	},
	module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'env']
        }
    }]	
  }
}