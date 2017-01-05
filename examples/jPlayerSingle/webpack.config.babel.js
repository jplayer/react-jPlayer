import exampleConfig from '../example.config';

module.exports = {
  ...exampleConfig,
  context: __dirname,
  entry: {
    jPlayerSingle: './src/index.js',
  },
};
