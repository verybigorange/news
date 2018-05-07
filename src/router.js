import React from 'react'
import { Router, Route, Switch,Redirect } from 'dva/router'
import dynamic from 'dva/dynamic'
import Loading from './components/Loading'

const routes = [
  {
      path: '/news',
      component: () => import('./routes/index'),
      models: () => [import ('./models/index')],
      name:'新闻页',
      children:[
        {
          path: '/detail',
          component: () => import('./routes/detail'),
          models: () => [import ('./models/detail')],
          name:'新闻详情页'
        }
      ]
  },
  {
      path: '/example',
      component: () => import('./components/Example'),
      models: () => [ import('./models/example') ],
      name:'例子'
  }
]

function getRoute(app,routeList) {
  return  routeList.map(({ children,path,...dynamics}, key) => (
    <Route exact path={path} key={key} component={dynamic({
        app,
        ...dynamics
      })}
    >
      {children && getRoute(app,children)}
    </Route>
  ))
}

function RouterConfig({history,app}) {
  return (
      <div style={{height:'100%',background:'#fff'}}>
          <Router history={history}>
                <Switch>
                  <Route exact path="/" render={() => (<Redirect to="/news" />)} />
                  {
                    getRoute(app,routes)
                  }
                </Switch>
          </Router>
         <Loading/>
       </div>
  );
}

export default RouterConfig;
