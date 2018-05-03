import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import IndexPage from './routes/IndexPage';


function RouterConfig({ history,app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={dynamic({
          app,
          component: () => import('./routes/IndexPage'),
          models: () => [import('./models/index')],
        })} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
