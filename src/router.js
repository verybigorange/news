import React from 'react'
import { Router, Route, Switch,Redirect } from 'dva/router'
import dynamic from 'dva/dynamic'
import Loading from './components/Loading'
import DashBorad from './routes/DashBorad'


function RouterConfig({history,app}) {
  return (
      <div style={{height:'100%',background:'#fff'}}>
          <Router history={history}>
                <Switch>
                      <Route exact path="/" render={() => (<Redirect to="/dashborad" />)} />
                      <Route  path="/dashborad" render={() => (<DashBorad app={app}  />)} />
                </Switch>
          </Router>
         <Loading/>
      </div>
  );
}

export default RouterConfig;
