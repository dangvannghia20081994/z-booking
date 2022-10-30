export default $axios => ({
  list (params) {
    // $axios.setBaseURL(process.env.NUXT_ENV_BASE_PRODUCT)
    return $axios.get(process.env.NUXT_ENV_BASE_PRODUCT + '/qa', { params })
  },
  social_login (data) {
    return $axios.post('/social_login', data)
  },
  me (token_ = '') {
    return $axios.get('/me?token=' + token_)
  }
})
