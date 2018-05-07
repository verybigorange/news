import http from '../utils/request';
import config from '../../config'

export function getNews() {
    return http({
      method:'get',
      url:config.api.news
    })
}

export function getDetail(id){
  return http({
    method:'post',
    url:config.api.newsDetail,
    data:{
      id
    }
  })
}
