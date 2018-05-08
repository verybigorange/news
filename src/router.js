import React from 'react'
import { Router, Route, Switch,Redirect } from 'dva/router'
import dynamic from 'dva/dynamic'
import Loading from './components/Loading'
import Common from './routes/common'

const routes = [
  {
    path: '/news',
    component: () => import('./routes/index'),
    models: () => [import ('./models/index')],
    name:'新闻'
  },
  // {
  //   path: '/detail',
  //   component: () => import('./routes/detail'),
  //   models: () => [import ('./models/detail')],
  //   name:'新闻详情'
  // },
  {
    path: '/video',
    component: () => import('./routes/video'),
    models: () => [import ('./models/video')],
    name:'小视频'
  },
  {
    path: '/music',
    component: () => import('./routes/music'),
    models: () => [import ('./models/music')],
    name:'音乐'
  },
  {
    path: '/user',
    component: () => import('./routes/user'),
    models: () => [import ('./models/user')],
    name:'用户'
  },
  // {
  //   path: '/example',
  //   component: () => import('./components/Example'),
  //   models: () => [ import('./models/example') ],
  //   name:'例子'
  // }
]

function RouterConfig({history,app}) {
  return (
      <div style={{height:'100%',background:'#fff'}}>
          <Router history={history}>
                <Switch>
                  <Common>
                      <Route exact path="/" render={() => (<Redirect to="/news" />)} />
                      {
                        routes.map(({ path,...dynamics}, key) => (
                              <Route exact path={path} key={key} component={dynamic({
                                  app,
                                  ...dynamics
                                })}
                              />
                        ))
                      }
                      <Route path="/detail" exact component={ dynamic(
                          {
                            app,...{
                            component: () => import('./routes/detail'),
                            models: ()=> [import('./models/detail')]
                          }
                      }) }/>
                  </Common>
                </Switch>
          </Router>
         <Loading/>
       </div>
  );
}

export default RouterConfig;
