const transform = require('./transform')
const defaultFilter = require('./filter')

function plugin (options = {}) {
  const filter = options.filter || defaultFilter

  return files => {
    return files.map(file => {
      return filter(file, files, options)
        ? transform(file, options)
        : file
    })
  }
}

module.exports = plugin
