module.export = {
  'process.env.BACKEND_URL': process.env.NODE_ENV === 'production' ? '/timeline' : ''
}
