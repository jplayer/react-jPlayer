import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default {
  context: __dirname,
  entry: {
    'react-jPlayerExample': './src/app.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { importLoaders: 1 },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          }, {
            loader: 'less-loader',
          }],
        }),
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ExtractTextPlugin('[name].css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.styl'],
  },
};
