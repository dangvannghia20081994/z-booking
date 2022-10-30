import User from '@/api/user'
export default ({ app, $axios }, inject) => {
  const factories = {
    user: User($axios)
  }
  inject('api', factories)
}
