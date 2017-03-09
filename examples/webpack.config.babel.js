import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const debug = process.env.NODE_ENV !== 'production';

export default {
  context: __dirname,
  entry: {
    'react-jPlayerExample': './src/app.jsx',
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
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract('style-loader',
          'css-loader?importLoaders=1' +
          '!postcss-loader' +
          '!less-loader'),
      },
      {
        test: /\.(woff2?|eot|ttf|svg)(\?[\s\S]+)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(jpg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  postcss: () => [autoprefixer],
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
  },
};
