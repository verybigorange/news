


import mock from './mock'
import config from '../config'
import Mock from 'mockjs';

const Random = Mock.Random;

const test = mock(config.api.test,{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})

const news = mock(config.api.news,{
    'status':'T',
    'data': [{
        'id':1,
        'title|1':Random.ctitle(5, 20),
        'introduction':Random.csentence(20,50),
        'url':Random.image('110x110','#ffcc33', '#FFF'),
        'date':Random.date('yyyy-MM-dd'),
    },{
        'id':2,
        'title|1':Random.ctitle(5, 20),
        'introduction':Random.csentence(20,50),
        'url':Random.image('110x110','#ffcc33', '#FFF'),
        'date':Random.date('yyyy-MM-dd'),
    },{
        'id':3,
        'title|1':Random.ctitle(5, 20),
        'introduction':Random.csentence(20,50),
        'url':Random.image('110x110','#ffcc33', '#FFF'),
        'date':Random.date('yyyy-MM-dd'),
    },{
        'id':4,
        'title|1':Random.ctitle(5, 20),
        'introduction':Random.csentence(20,50),
        'url':Random.image('110x110','#ffcc33', '#FFF'),
        'date':Random.date('yyyy-MM-dd'),
    },{
        'id':5,
        'title|1':Random.ctitle(5, 20),
        'introduction':Random.csentence(20,50),
        'url':Random.image('110x110','#ffcc33', '#FFF'),
        'date':Random.date('yyyy-MM-dd'),
    },{
        'id':6,
        'title|1':Random.ctitle(5, 20),
        'introduction':Random.csentence(20,50),
        'url':Random.image('110x110','#ffcc33', '#FFF'),
        'date':Random.date('yyyy-MM-dd'),
    },{
        'id':7,
        'title|1':Random.ctitle(5, 20),
        'introduction':Random.csentence(20,50),
        'url':Random.image('110x110','#ffcc33', '#FFF'),
        'date':Random.date('yyyy-MM-dd'),
    },{
        'id':8,
        'title|1':Random.ctitle(5, 20),
        'introduction':Random.csentence(20,50),
        'url':Random.image('110x110','#ffcc33', '#FFF'),
        'date':Random.date('yyyy-MM-dd'),
    },{
        'id':9,
        'title|1':Random.ctitle(5, 20),
        'introduction':Random.csentence(20,50),
        'url':Random.image('110x110','#ffcc33', '#FFF'),
        'date':Random.date('yyyy-MM-dd'),
    },{
        'id':10,
        'title|1':Random.ctitle(5, 20),
        'introduction':Random.csentence(20,50),
        'url':Random.image('110x110','#ffcc33', '#FFF'),
        'date':Random.date('yyyy-MM-dd'),
    },]
})

export default {
    test,
    news
}