const debug = process.env.NODE_ENV !== 'production'
const name = 'nextjs-tutorial'

module.exports = {
    assetPrefix: !debug ? `/${name}/` : '',
}