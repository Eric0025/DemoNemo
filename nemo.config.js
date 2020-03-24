const path = require('path');

module.exports = {
  plugins: {
    view: {
      module: 'nemo-view'
    }
  },
  output: {
    reports: path.resolve('test', 'report')
  },
  profiles: {
    base: {
      tests: path.resolve('test', '*test.js'),
      driver: {
        browser: 'chrome'
      },
      data: {
        baseUrl: 'https://jqueryui.com/'
      },
      mocha: {
        timeout: 180000,
        reporter: 'mochawesome',
        reporterOptions: {
          quiet: true
        }
      }
    }
  }
}
