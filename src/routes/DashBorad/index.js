import React from 'react'
import { Switch,Route,Redirect,withRouter } from 'dva/router'
import dynamic from 'dva/dynamic'
import Common from './common'
import app from '../../index'

const routes = [
    {
      path: '/news',
      component: () => import('../news'),
      models: () => [import ('../../models/news')],
      name:'新闻'
    },
    {
      path: '/video',
      component: () => import('../video'),
      models: () => [import ('../../models/video')],
      name:'小视频'
    },
    {
      path: '/music',
      component: () => import('../music'),
      models: () => [import ('../../models/music')],
      name:'音乐'
    },
    {
      path: '/user',
      component: () => import('../user'),
      models: () => [import ('../../models/user')],
      name:'用户'
    }
]

function DashBorad({ app,match }) { 
    return (
        <Common>
            <Switch>
                {
                    routes.map(({ path,...dynamics}, key) => (
                        <Route exact path={match.path+path} key={key} component={dynamic({
                            app,
                            ...dynamics
                        })}
                        />
                    ))
                }
                 <Redirect to={`${match.path}/news`} />
            </Switch>
           
        </Common>
    )
 }

 export default withRouter(DashBorad);