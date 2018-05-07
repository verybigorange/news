import React, { PureComponent } from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import getQuery from '../../utils/getQuery'
import { connect } from 'dva'
import styles from './index.css';
import Head from '../../components/Head'

 class NewsDetail extends PureComponent {
    static propTypes = {

    }

    componentDidMount(){
        const { id } = getQuery(this.props.location.search);
        this.props.dispatch({
            type:'detail/fetch',
            payload:{
                id
            }
        })
    }

    render() {
        const { url,title,content,date } = this.props.newsDetail;
       
        return (
            <div>
                <Head title="新闻详情"/>
                <div className={styles.container}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.date}>{date}</p>
                    <img src={url} alt="图片未加载成功"/>
                    <p className={styles.content}>
                        {content}
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({detail}) => ({
    newsDetail:detail.newsDetail
})

export default connect(mapStateToProps)(NewsDetail);