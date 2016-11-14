module.exports = {
    path:'zouxiumei',
    getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Zouxiumei'))
    })
  }
}