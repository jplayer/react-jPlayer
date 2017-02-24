import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import BabiliPlugin from 'babili-webpack-plugin';
import autoprefixer from 'autoprefixer';
import nodeExternals from 'webpack-node-externals';

export default {
  context: __dirname,
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    'js/jPlayer.js': './src/index.js',
    'js/jPlayer.min.js': './src/index.js',
    'css/jPlayer.css': './src/less/jPlayer.less',
    'css/jPlayer.min.css': './src/less/jPlayer.less',
    'css/skins/sleek.css': './src/less/skins/sleek.less',
    'css/skins/sleek.min.css': './src/less/skins/sleek.less',
  },
  output: {
    path: './dist/',
    filename: '[name]',
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
        test: /\.less$/,
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
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name]'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
    }),
    new BabiliPlugin({}, {
      test: /\.min\.js$/,
    }),
  ],
  postcss: () => [autoprefixer],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
