import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import BabiliPlugin from 'babili-webpack-plugin';
import autoprefixer from 'autoprefixer';

export default {
  context: __dirname,
  target: 'node',
  externals: {
    classames: 'classNames',
    'lodash.includes': '_.includes',
    'lodash.merge': '_.merge',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-motion': 'ReactMotion',
    'react-redux': 'ReactRedux',
    recompose: 'Recompose',
    redux: 'Redux',
    screenfull: 'screenfull',
  },
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
    libraryTarget: 'var',
    library: 'ReactJPlayer',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
