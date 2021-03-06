import {NavBar, Icon} from 'antd-mobile';
import TabComponent from '../../components/TabBottom';
import styles from './common.css';
import { withRouter } from 'dva/router';


function Common({history,children}) { 
    return (
        <div className={styles.main}>
            {/* 头部 */}
            <NavBar
            mode="light"
            icon={< Icon type = "left"  onClick={ ()=> history.goBack()}/>}
            rightContent={[< Icon key = "0" type = "search" style = {{ marginRight: '16px' }}/>, <Icon key="1" type="ellipsis" / >]}>新闻中心</NavBar>
    
    
            {/* 中间部分 */}
            <div  className={styles.center}>
                { children }                
            </div>
        
    
            {/* 底部 */}
            <TabComponent />
        </div>
    )
}

export default withRouter(Common)