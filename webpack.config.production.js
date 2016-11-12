var createConfig = require('./webpackConfigCreator');

module.exports = createConfig({
  minimize: true,
  debug: false,
});
