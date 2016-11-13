import React from 'react';
import {render} from 'react-dom';
import {
  Router,
  broswerHistory } from 'react-router';


const rootRoute = {
    childRoutes:[{
      path:'/',
      component: require('./components/App'),
      // childRoutes:[
      //   require('./routes/Home'),
      //   require('./routes/Dodo'),
      //   require('./routes/React'),
      //   require('./routes/Hello'),
      //   require('./routes/Vue'),
      //   require('./routes/Redux')
      // ]
    }]
}

render((<Router
        history={broswerHistory}
        routes = {rootRoute}
      />),document.getElementById('app'));
