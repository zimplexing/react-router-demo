module.exports = {
    path:'zhangxin',
    getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Zhangxin'))
    })
  }
}