import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  treeshake: true,
  plugins: [
    resolve({
      exportConditions: ['development']
    })
  ]
};
