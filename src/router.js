import React from 'react'
import { Router, Route, Switch,Redirect } from 'dva/router'
import Loading from './components/Loading'
import DashBorad from './routes/DashBorad'
import dynamic from 'dva/dynamic';

function RouterConfig({history,app}) {
  return (
      <div style={{height:'100%',background:'#fff'}}>
          <Router history={history}>
                <Switch>
                      <Route exact path="/" render={() => (<Redirect to="/dashborad" />)} />
                      <Route  path="/dashborad" render={() => (<DashBorad app={app} />)} />
                      <Route  path="/news/detail" component={ dynamic({
                        app,
                        name:'新闻详情',
                        component: () => import('./routes/detail'),
                        models: () => [import('./models/detail')]
                      }) }/>
                </Switch>
          </Router>
         <Loading/>
      </div>
  );
}

export default RouterConfig;
