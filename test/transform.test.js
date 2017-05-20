const test = require('ava')
const transform = require('../lib/transform')

test('parses front matter', t => {
  const input = {
    contents: '---\nworks: true\n---\nHello'
  }

  const expected = {
    contents: 'Hello',
    metadata: {
      works: true
    }
  }

  t.deepEqual(transform(input), expected)
})
