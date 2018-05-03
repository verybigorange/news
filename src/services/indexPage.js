import http from '../utils/request';

export function getNews() {
    return http({
      method:'get',
      url:'news'
    })
}

