const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg|png)(\?.*)?$/i;
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  // productionSourceMap: process.env.VUE_APP_SOURCEMAP === 'true',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: true,
  configureWebpack: (config) => {
    const alias = {
      '@plugins': path.join(__dirname, 'src/plugins'),
      '@resource': path.join(__dirname, 'src/resource'),
    };
    Object.assign(config.resolve.alias, alias);
  },
  transpileDependencies: ['@coreui/utils'],
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8088,
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
  chainWebpack: (config) => {
    if (isProduction) {
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
    }
  },
};
