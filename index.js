import React from 'react';
import {render} from 'react-dom';
import {
  Router,
  browserHistory } from 'react-router';


const rootRoute = {
    childRoutes:[{
      path:'/',
      component: require('./components/App'),
      childRoutes:[
        require('./routes/Todo'),
        require('./routes/Hello'),
        require('./routes/Vue'),
        require('./routes/Redux')
      ]
    }]
}

render((<Router
        history={browserHistory}
        routes = {rootRoute}
      />),document.getElementById('app'));
