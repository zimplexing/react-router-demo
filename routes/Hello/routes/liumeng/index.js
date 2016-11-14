module.exports = {
    path:'liumeng',
    getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Liumeng'))
    })
  }
}