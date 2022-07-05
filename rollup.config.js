import esbuild from 'rollup-plugin-esbuild'
import clear from 'rollup-plugin-clear'
import dts from 'rollup-plugin-dts'

const main = require('./package.json').main.replace(/\.js$/, '')

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id),
})

const config = [
  bundle({
    plugins: [
      esbuild(), 
      clear({
        targets: ['dist']
      })
    ],
    output: [
      {
        file: `${main}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${main}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${main}.d.ts`,
      format: 'es',
    },
  })
]

export default config
