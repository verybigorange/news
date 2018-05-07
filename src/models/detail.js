
import * as indexHttp from '../services/indexPage'

export default {

    namespace: 'detail',
  
    state: {
        newsDetail:{}
    },
  
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        const { status,data } = yield call(indexHttp.getDetail,payload.id)
        if(status === 'T'){
            yield put({ type: 'refresh', payload:{
                newsDetail:data
            }});
        }
      },
    },
  
    reducers: {
      refresh(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  