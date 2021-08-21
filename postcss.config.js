module.exports = ctx => {
  return {
    map: {
        inline: false,
        annotation: true,
        sourcesContent: true
      },
    plugins: {
      autoprefixer: {
        cascade: false
      },
      // TODO: need some testing
      // rtlcss: ctx.env === 'RTL' ? {} : false
    }
  }
}
