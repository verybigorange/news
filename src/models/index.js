
import * as indexHttp from '../services/indexPage'

export default {

    namespace: 'indexPage',
  
    state: {
        newsList:[]
    },
  
    effects: {
      *getNews({ payload }, { call, put }) {  // eslint-disable-line
        const { data,status } = yield call(indexHttp.getNews);
        if(status === 'T'){
          yield put({ type: 'news',payload:{
            newsList:data
          }});
        }
      },
    },
  
    reducers: {
      news(state, action) {
        return { ...state, ...action.payload };
      },
    },

    subscriptions:{ 
      // watchEntryIndexPage({ dispatch, history }){ 
      //   history.listen(({ pathname }) => {
      //     if(pathname === '/'){
      //       dispatch({
      //         type:'getNews'
      //       })
      //     }
      //   })
      // }
    }
  
  };
  