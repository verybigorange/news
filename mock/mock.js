import config from '../config'

// 使用 Mock
var Mock = require('mockjs')

const mock = (rurl='',template={})=>{
    rurl =config.baseUrl + rurl
    return Mock.mock(rurl,template)
}

export default mock