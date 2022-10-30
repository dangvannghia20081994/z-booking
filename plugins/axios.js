import { accessToken } from '~/config'
export default function ({ $axios, $cookies, store }, inject) {
  const token = $cookies.get(accessToken)
  if (token) {
    $axios.setToken(token, 'Bearer')
  }
  $axios.onRequest((config) => {
    // console.warn(config.url)
  })
  $axios.onResponse((response) => {
    return response
  })
  $axios.onError((error) => {
    console.error(error)
  })
}
