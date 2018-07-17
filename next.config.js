module.exports = {
  assetPrefix: isProduction ? '/timeline' : '',
  exportPathMap: function () {
    return {
      '/': {page: '/'}
    }
  }
}
