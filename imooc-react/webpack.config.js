var path = require('path');

module.exports = {
	entry: "./app/router.js",
	output: {
		path: path.resolve(__dirname, './build/'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.html$/,
			loader: 'html-loader'
		}, {
 test: /\.css$/,
        loader: 'style-loader!css-loader'
		}, {
			test: /\.(js|jsx)$/,
			loader: "babel-loader",
			exclude: /node_modules/,
			include: path.resolve(__dirname, 'app'),
			query: {
				presets: ["react", "es2015","stage-0"]
			}
		}]
	}
}