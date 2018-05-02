import React, { Component } from 'react'
import styles from './index.css';
import { Icon } from 'antd-mobile';
import { connect } from 'dva';

const Loading = ({isLoading})=>(
    isLoading?(
        <div className={styles.container}>
            <Icon type="loading" size="lg"></Icon>
            <p style={{marginLeft:'10px'}}>加载中...</p>
         </div>
    ):(<div></div>)
)

export default connect(({common})=>({
    isLoading:common.isLoading
}))(Loading);