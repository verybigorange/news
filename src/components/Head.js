import {NavBar, Icon} from 'antd-mobile';
import { withRouter } from 'dva/router';
import PropTypes from 'prop-types';

function Head({history,title}) { 
    return (
        <div style={{borderBottom:'1px solid #eee'}}>
            {/* 头部 */}
            <NavBar
                mode="light"
                icon={< Icon type = "left"  onClick={ ()=> history.goBack()}/>}>
                {title}
            </NavBar>
        </div>
    )
}

Head.propTypes = {
    title:PropTypes.string.isRequired
}

export default withRouter(Head)