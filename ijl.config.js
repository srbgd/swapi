const pkg = require('./package.json');

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: '/static/swapi/1.0.0/'
    }
  },
  config: {
    'main.api.base.url': '/api',
  },
  apps: {
    swapi: { name: 'swapi', version: '1.0.0' }
  },
  navigations: {
    swapi: '/swapi'
  }
};

