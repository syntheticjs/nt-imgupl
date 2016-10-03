var path = require('path');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
module.exports = {
    context: path.join(__dirname, './'), // исходная директория
	entry: './src/nt-imgupl.js', // файл для сборки, если несколько - указываем hash (entry name => filename)
	output: {
		path: path.join(__dirname, 'dist'), // выходная директория
		publicPath: "/public",
		filename: 'nt-imgupl.js',
		library: 'nt-imgupl',
		libraryTarget: 'umd'
	},
	plugins: [
		//new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
	        { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
	        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
     		{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
	    ]
	},
    postcss: function () {
        return [autoprefixer, nested];
    },
	externals: { Synthetic: "synthetic" }
};