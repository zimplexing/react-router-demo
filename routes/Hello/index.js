module.exports = {
    path:'hello',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
          cb(null, [
            require('./routes/zhangxin'),
            require('./routes/liumeng'),
            require('./routes/zouxiumei')
          ])
        })
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/Hello'))
        })
    }
}