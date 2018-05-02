import config from '../config'

// 使用 Mock
var Mock = require('mockjs')

const mock = (rurl='',rtype={})=>{
    rurl =config.baseUrl + rurl
    return Mock.mock(rurl,rtype)
}

export default mock