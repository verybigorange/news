import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Video extends Component {
  static propTypes = {
    prop: PropTypes.string
  }

  render() {
    return (
        <div>
            Video
        </div>
    )
  }
}
