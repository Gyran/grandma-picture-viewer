var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var SplitByPathPlugin = require('webpack-split-by-path');

function makeConfig(options) {
  var entry = {
    'client': './src/client/index.js'
  };

  var outputFolder = '/public/build';
  var buildPath = __dirname + outputFolder;

  var output = {
    filename: '[name].js',
    publicPath: `${ outputFolder }/`,
  };
  output.path = buildPath;

  /** Plugins **/
  var plugins = [];
  plugins.push(new webpack.DefinePlugin({
    '__SERVER__': false,
    '__CLIENT__': true
  }));
  plugins.push(new webpack.DefinePlugin({
    '__DEBUG__': !!options.debug,
  }));

  // make sure all imports are Case Sensitive
  plugins.push(new CaseSensitivePathsPlugin());

  // this plugin is only active if webpack is running in watch mode
  // https://github.com/Va1/browser-sync-webpack-plugin#usage
  plugins.push(new BrowserSyncPlugin({
    host: 'localhost',
    port: 3003,
    proxy: 'localhost:3000',
    open: false
  }));

  plugins.push(new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  }));

  if (options.minimize) {
    plugins.push(new webpack.NoErrorsPlugin());
    plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }));
  }

  plugins.push(new SplitByPathPlugin([
    // Put everything that is loaded from node_modules
    // in a separate chunk
    {
      name: 'vendor',
      path: path.join(__dirname, 'node_modules')
    },
    {
      name: 'assets',
      path: path.join(__dirname, 'assets')
    }
  ], { manifest: 'app-manifest' }));

  /** /Plugins **/

  /** Loaders **/
  var loaders = [];
  loaders.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  });
  /** /Loaders **/

  /** Pre Loaders **/
  var preLoaders = [];

  preLoaders.push({
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url-loader?limit=8192',
  });
  /** /Pre Loaders **/

  var module = {
    loaders: loaders,
    preLoaders: preLoaders,
  };

  var resolve = {
    extensions: ['', '.js', '.json'],
    root: path.resolve(__dirname),
  };

  var externals = {
    'config': 'config'
  }

  return {
    entry: entry,
    output: output,
    plugins: plugins,
    module: module,
    resolve: resolve,
    externals: externals,
  };
}

module.exports = makeConfig;
