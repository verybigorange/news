import React from 'react';
import PropTypes from 'prop-types'
import styles from './IndexPage.css'
import { withRouter } from 'dva/router'

function NewsItem({
    title,
    url,
    date,
    id,
    introduction,
    history
}) {
    return (
        <div className={styles.newsItemBox} onClick={() => {history.push(`/detail?id=${id}`)}}>
                <div className={styles.itemImg}>
                    <img src={url}  alt="图片未加载成功"/>    
                </div>
            
                <div className={styles.right}>
                    <p className={styles.title} >{title}</p>
                    <p className={styles.introduction}>{introduction}</p>
                    <p className={styles.date}>{date}</p>
                </div>
        </div>
    )
}

NewsItem.propTypes = {
    title:PropTypes.string,
    url:PropTypes.string,
    date:PropTypes.string,
    id:PropTypes.number.isRequired,
    introduction:PropTypes.string
}

export default withRouter(NewsItem);