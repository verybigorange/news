import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import IndexPage from './routes/IndexPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={dynamic({
          component: () => import('./routes/IndexPage'),
          models: () => [import('./models/index')],
        })} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
