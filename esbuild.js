const { build } = require ('esbuild')
const { dependencies } = require ('./package.json')

const shared = {
  entryPoints: ['./src/GuideClient.ts'],
  minify: true,
  bundle: true,
  sourcemap: true,
  external: Object.keys( dependencies )
}

build({
  ...shared,
  format: 'cjs',
  outfile: './dist/GuideClient.js',
  target: ['es6']
})

build({
  ...shared,
  format: 'esm',
  outfile: './dist/GuideClient.esm.js',
  target: ['es6']
})
