module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mercado-reddit/'
    : '/'
}
