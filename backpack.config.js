module.exports = {
  // ES6をNode.jsで利用できるようにbackpackを導入
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.js'
    return config
  }
}
