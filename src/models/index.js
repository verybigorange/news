
import * as indexHttp from '../services/indexPage'

export default {

    namespace: 'indexPage',
  
    state: {
        newsList:[]
    },
  
    subscriptions: {
    
    },
  
    effects: {
      *getNews({ payload }, { call, put }) {  // eslint-disable-line
        const data = yield call(indexHttp.getNews);
        yield put({ type: 'news',payload:{
            newsList:data
        }});
      },
    },
  
    reducers: {
      news(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  