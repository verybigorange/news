import React from 'react';
import PropTypes from 'prop-types'

function NewsItem({
    title,
    url,
    date,
    id,
    introduction
}) {
    return (
        <div>
            <img src={url} width='100' height='100' />
            <div>
                <p>{title}</p>
                <p>{introduction}</p>
                <p>{date}</p>
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

export default NewsItem;