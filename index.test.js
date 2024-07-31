const postcss = require('postcss')
const { equal } = require('node:assert')
const { test } = require('node:test')

const plugin = require('./')

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  equal(result.css, output)
  equal(result.warnings().length, 0)
}

/* Write tests here */

test('replaces rems values with the --shad-rem unit calculation', async () => {
  await run('a{ font-size: 1.25rem }', 'a{ font-size: calc(1.25 * var(--shadrem)) }', { })
});
