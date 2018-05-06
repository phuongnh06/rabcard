const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	mode: 'development',
	entry: './js/app.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}]
	},
	plugins: [
		new VueLoaderPlugin()
	]
}