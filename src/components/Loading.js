import { Icon } from 'antd-mobile'
import { connect } from 'dva'

const styles = {
    position:'fixed',
    left:0,
    top:0,
    height:'100%',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    zIndex:999
}

function Loading({ isShow }){
    const ele = isShow?(
        <div style={styles}>
             <Icon type='loading' size='lg'></Icon>
        </div>
    ):(<div></div>)
    return ele
}

export default connect(({loading})=>({
    isShow:loading.global
}))(Loading)