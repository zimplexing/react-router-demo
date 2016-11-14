module.exports = {
    path:'/redux',
    getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Redux'))
    })
  }
}