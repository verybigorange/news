import { TabBar } from 'antd-mobile';
import React from 'react';
import { withRouter } from 'dva/router'

class TabBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'news',
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(pageText) {
    // console.log(pageText)
  }

  tabRouter(url){
    // 不能重复点击
    if(this.state.selectedTab === url) return
    this.props.history.push(`/dashborad/${url}`)
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { width:'100%' } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="新闻"
            key="news"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'news'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'news',
              });
              this.tabRouter('news')
            }}
            data-seed="logId"
          >

          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="小视频"
            key="xsp"
            badge={'new'}
            selected={this.state.selectedTab === 'video'}
            onPress={() => {
              this.setState({
                selectedTab: 'video',
              });
              this.tabRouter('video')
            }}
            data-seed="logId1"
          >

          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="音乐"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'music'}
            onPress={() => {
              this.setState({
                selectedTab: 'music',
              });
              this.tabRouter('music')
            }}
          >

          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'user'}
            onPress={() => {
              this.setState({
                selectedTab: 'user',
              });
              this.tabRouter('user')
            }}
          >

          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(TabBottom)
