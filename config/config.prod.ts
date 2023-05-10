import { defineConfig } from '@umijs/max'

const CompressionWebpackPlugin = require('compression-webpack-plugin')

export default defineConfig({
  define: {
    APP_BASE_URL: 'http://124.222.245.162:9001',
  },
  codeSplitting: { jsStrategy: 'granularChunks' },
  chainWebpack: config => {
    config.plugin('compression-webpack-plugin').use(
      new CompressionWebpackPlugin({
        test: /\.(js|css)$/i,
        threshold: 3 * 1024,
      }),
    )
  },
})
