import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './app'

const routes = [
  {
    path: '/example',
    component: () => import ('./components/Example'),
    models: () => [import ('./models/index')]
  }
]

function RouterConfig({history, app}) {
  return (
        <App>
            <Router history={history}>
            <Switch>
              <Route path="/" exact component={dynamic({
                  app,
                  component: () => import ('./routes/index'),
                  models: () => [import ('./models/index')]
                })}
              /> 

              {
                routes.map(({ path,...dynamics}, key) => (
                    <Route  path={path} key={key} component={dynamic({
                        app,
                        ...dynamics
                      })}
                    />
                ))
              }
            </Switch>
          </Router>
        </App>
  );
}

export default RouterConfig;
