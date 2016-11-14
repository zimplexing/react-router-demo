import React from 'react';
import {render} from 'react-dom';
import {
  Router,
  Route,
  browserHistory } from 'react-router';

import App from './components/App';
import Hello from './routes/Hello/components/Hello';
import Zhangxin from './routes/Hello/routes/zhangxin/components/Zhangxin';
import Liumeng from './routes/Hello/routes/liumeng/components/Liumeng';
import Zouxiumei from './routes/Hello/routes/zouxiumei/components/Zouxiumei';
import Redux from './routes/Redux/components/Redux';
import Todo from './routes/Todo/components/Todo';
import Vue from './routes/Vue/components/Vue';


render((<Router history={browserHistory} >
      <Route path="/" component={App} >
        <Route path="/hello" component={Hello} >
          <Route path="/hello/zhangxin" component={Zhangxin} />
          <Route path="/hello/liumeng" component={Liumeng} />
          <Route path="/hello/zouxiumei" component={Zouxiumei} />
        </Route>
        <Route path="/redux" component={Redux} />
        <Route path="/todo" component={Todo} />
        <Route path="/vue" component={Vue} />
      </Route>
  </Router>),document.getElementById('app'));
