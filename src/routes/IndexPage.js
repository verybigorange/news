import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { NavBar, Icon } from 'antd-mobile';
import TabComponent from '../components/TabBottom'
import NewsItem from './NewsItem'


function IndexPage({ history,dispatch }) {
  return (
    <div className={styles.index}>
          {/* 头部 */}
         <NavBar
            mode="light"
            icon={<Icon type="left" onClick={() => history.goBack()} />}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
              <Icon key="1" type="ellipsis" />,
             ]}
         >新闻中心</NavBar>

          {/* 中间内容部分 */}
          <section className={styles.content}>
              <NewsItem title="test" id={123}></NewsItem>
          </section>

          {/* 底部 */}
         <TabComponent />
          
    </div>
  );
}

IndexPage.propTypes = {

};

export default connect(({ indexPage })=>({
  newsList:indexPage.newsList
}))(IndexPage);
