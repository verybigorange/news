import React from 'react';
import PropTypes from 'prop-types'

function NewsItem({
    title,
    url,
    date,
    id,
}) {
    return (
        <div>
            {title}
            {id}
        </div>
    )
}

NewsItem.propTypes = {
    title:PropTypes.string,
    url:PropTypes.string,
    date:PropTypes.string,
    id:PropTypes.number.isRequired
}

export default NewsItem;