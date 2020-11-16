const path = require('path')
const externals = require('./externals')

const isProd = process.env.NODE_ENV !== 'development'
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: !isProd,
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack: config => {
    // SVG 配置
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .end()

    config.when(isProd, config => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 1,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  },
  devServer: {
    proxy: {
      '/mock-service': {
        changeOrigin: true,
        target: 'http://127.0.0.1:4000'
      }
    }
  },
  pluginOptions: {
    externals: isProd ? externals : {},
    lintStyleOnBuild: true
  },
  productionSourceMap: false
}
