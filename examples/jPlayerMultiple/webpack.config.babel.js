import exampleConfig from '../example.config';

module.exports = {
  ...exampleConfig,
  context: __dirname,
  entry: {
    jPlayerMultiple: './src/index.js',
  },
};
