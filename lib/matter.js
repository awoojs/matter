var grayMatter = require('gray-matter')

function defaultFilter () { return true }

function transformMatter (file, options) {
  const frontMatter = grayMatter(file.contents, options)

  return Object.assign(file, {contents: frontMatter.content}, frontMatter)
}

function matter (options = {}) {
  const filter = options.filter || defaultFilter

  return files => {
    return files.map(file => {
      return filter(file, files, options)
        ? transformMatter(file, options)
        : file
    })
  }
}

module.exports = matter
