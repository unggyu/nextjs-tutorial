const debug = process.env.NODE_ENV !== 'production'
const name = 'nextjs-tutorial'

module.exports = {
  'process.env.BACKEND_URL': '' // !debug ? `/${name}` : '',
}