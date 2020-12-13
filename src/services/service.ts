import http from '../http-common'

class Service {
  getPosts () {
    return http.get('/posts')
  }

  getComments (postId: string) {
    return http.get(`posts/${postId}/comments`)
  }
}
export default new Service()
