const path = require('path');
const externals = require('./externals');
const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg|png)(\?.*)?$/i;
const StyleLintPlugin = require('stylelint-webpack-plugin');

const isProd = process.env.NODE_ENV !== 'development';
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  lintOnSave: true,
  configureWebpack: (config) => {
    (config.devtool = 'source-map'),
      config.plugins.push(
        new StyleLintPlugin({
          files: ['src/**/*.{html,css,scss,sass,less}'],
          failOnError: false,
          cache: true,
          fix: true,
        }),
      );
  },
  chainWebpack: (config) => {
    // SVG 配置
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .end();

    config.when(isProd, (config) => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial',
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 1,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk('single');
    });

    config.when(isProd, (config) => {
      config.plugin('compressionPlugin').use(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        }),
      );
    });
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    historyApiFallback: {
      rewrites: [
        {
          from: /\.*$/,
          to: '/',
        },
      ],
    },
    proxy: {
      '/mock-service': {
        changeOrigin: true,
        target: 'http://127.0.0.1:4000',
      },
      '/api': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
  pluginOptions: {
    externals: isProd ? externals : {},
    lintStyleOnBuild: true,
  },
  productionSourceMap: false,
};
