import dva from 'dva';
import './index.css';
import '../mock/index';
import 'antd-mobile/dist/antd-mobile.css'; 
import createLoading from 'dva-loading';
import { Toast } from 'antd-mobile';
// import createHistory from 'history/createBrowserHistory'
import 'babel-polyfill'

// 1. Initialize
const app = dva({
    ...createLoading({
        effects:true
    }),
    // history:createHistory(),
    onError(error){
        Toast.fail(error,1)
    }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/common').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app