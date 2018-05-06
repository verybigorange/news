import React from 'react'
import {Router, Route, Switch} from 'dva/router'
import dynamic from 'dva/dynamic'
import Loading from './components/Loading'

const routes = [
  {
      path: '/news',
      component: () => import('./routes/index'),
      models: () => [import ('./models/index')],
      name:'新闻页'
  },
  {
      path: '/example',
      component: () => import('./components/Example'),
      models: () => [ import('./models/example') ],
      name:'例子'
  }
]

function RouterConfig({history,app}) {
  return (
      <div style={{height:'100%'}}>
          <Router history={history}>
                <Switch>
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
         <Loading/>
       </div>
  );
}

export default RouterConfig;
