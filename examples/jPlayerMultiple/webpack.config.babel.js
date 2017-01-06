import exampleConfig from '../example.config';

export default {
  ...exampleConfig,
  context: __dirname,
  entry: {
    jPlayerMultiple: './src/index.js',
  },
};
