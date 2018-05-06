import React,{ PureComponent } from 'react';  
import { connect } from 'dva';
import NewsItem from './NewsItem'
import Common from '../common'

class IndexPage extends PureComponent{  

  componentDidMount(){
    this.props.dispatch({type:'indexPage/getNews'})
  }

  render(){
    const { newsList } = this.props;
    return (
      <Common> 
            {
              newsList.map(( item,key ) => (
                <NewsItem {...item} key={key}></NewsItem>
              ))
            }
            <p style={{textAlign:'center'}}>没有更多内容啦...</p>  
      </Common>
           
    );
  }
}

IndexPage.propTypes = {

};

export default connect(({ indexPage })=>({
  newsList:indexPage.newsList
}))(IndexPage);
