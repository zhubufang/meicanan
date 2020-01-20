const path = require('path')

// 引入压缩插件
const CompressionPlugin = require('compression-webpack-plugin')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				'import': []
			}
		}
	},
	devServer: {
		disableHostCheck: true,
	},
	productionSourceMap: true,
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
			// 为生产环境修改配置...
			config.mode = 'production'
			return {
				plugins: [new CompressionPlugin({
					test: /\.js$|\.html$|\.css/, //匹配文件名
					threshold: 10240, //对超过10k的数据进行压缩
					deleteOriginalAssets: true //是否删除原文件
				})]
			}
		} else {
			config.devtool = 'eval-source-map'
		}
	},
	chainWebpack(config) {
		config.resolve.alias
			.set('components', resolve('src/components'))
			.set('common', resolve('src/common'))
			.set('assets', resolve('src/assets'))
		/* 添加分析工具*/
		if (process.env.NODE_ENV === 'production') {
			if (process.env.npm_config_report) {
				config
					.plugin('webpack-bundle-analyzer')
					.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
					.end();
				config.plugins.delete('prefetch')
			}
		}
	},
	pluginOptions: {
		'cube-ui': {
			postCompile: true,
			theme: false
		}
	}
}
