module.exports = {
    path:'/vue',
    getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Vue'))
    })
  }
}