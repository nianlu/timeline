module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/timeline' : '',
  exportPathMap: function () {
    return {
      '/': {page: '/'}
    }
  }
}
