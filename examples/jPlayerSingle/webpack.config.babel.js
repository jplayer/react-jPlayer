import exampleConfig from '../example.config';

export default {
  ...exampleConfig,
  context: __dirname,
  entry: {
    jPlayerSingle: './src/index.js',
  },
};
