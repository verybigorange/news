import React,{ PureComponent } from 'react';  
import { connect } from 'dva';
import NewsItem from './NewsItem'

class IndexPage extends PureComponent{  

  componentDidMount(){
    this.props.dispatch({type:'indexPage/getNews'})
  }

  render(){
    console.log(this.props)
    const { newsList } = this.props;
    return (
      <div> 
            {
              newsList.map(( item,key ) => (
                <NewsItem {...item} key={key}></NewsItem>
              ))
            }
            <p style={{textAlign:'center'}}>没有更多内容啦...</p>   
      </div>
    );
  }
}

IndexPage.propTypes = {

};

export default connect(({ indexPage })=>({
  newsList:indexPage.newsList,
}))(IndexPage);
