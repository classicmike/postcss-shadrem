const postcss = require('postcss');
const plugin = require('./');
const {expect, test} = require('@jest/globals');

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined });
  expect(result.css).toBe(output);
  expect(result.warnings().length).toBe(0);
}

test('replaces rem values with the --shad-rem unit calculation', async () => {
  await run('a{ font-size: 1.25rem }', 'a{ font-size: calc(1.25 * var(--shadrem)) }', {});
});
