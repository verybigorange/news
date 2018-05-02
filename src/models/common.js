
export default {

    namespace: 'common',
  
    state: {
        isLoading:false
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      showLoad(state){
        return {...state,isLoading:true};
      }
    },
  
  };
  