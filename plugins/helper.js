const helper = {
  getOtherQuery (query) {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== 'redirect') {
        acc[cur] = query[cur]
      }
      return acc
    }, {})
  },
  convertTimeToDayArr (seconds) {
    const d = Math.floor(seconds / (3600 * 24))
    const h = Math.floor((seconds % (3600 * 24)) / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor(seconds % 60)
    return [d, h, m, s]
  },
  validateEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  },
  validPhone (phone) {
    phone = phone.toString()
    phone = phone.replace(/[^0-9]/g, '')
    // Viettel: 09, 03
    // MobiFone: 09, 07
    // VinaPhone: 09, 08
    // Vietnamobile và Gmobile: 09, 05
    const vnfRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g
    return vnfRegex.test(phone)
  }
}
export default ({ app }, inject) => {
  inject('helper', helper)
}
