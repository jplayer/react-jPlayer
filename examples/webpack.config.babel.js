import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const debug = process.env.NODE_ENV !== 'production';

export default {
  context: __dirname,
  entry: {
    jPlayerExample: './src/app.jsx',
  },
  devtool: debug ? 'inline-sourcemap' : null,
  output: {
    path: './dist/',
    publicPath: '/dist/',
    filename: '[name].bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-class-properties', 'transform-decorators-legacy'],
        },
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract('style-loader',
          'css-loader?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' +
          '!postcss-loader' +
          '!less-loader'),
      },
      {
        test: /\.(woff2?|eot|ttf|svg)(\?[\s\S]+)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(mp3|jpg|webm)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  postcss: () => [autoprefixer],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
