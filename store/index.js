// import { accessToken } from '~/config'
export const state = () => ({
  user: null,
  roles: [],
  permissions: []
})
export const getters = {
  user: state => state.user,
  roles: state => state.roles,
  permissions: state => state.permissions
}
export const mutations = {
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
  }
}
export const actions = {
  nuxtServerInit ({ commit }, { store, $cookies, $axios, $api, req }) {
    // const token = $cookies.get(accessToken)
    // if (token) {
    // const form = { accessToken: token }
    // const { data } = await $api.user.social_login(form)
    // console.log(data)
    // }
  }
}
