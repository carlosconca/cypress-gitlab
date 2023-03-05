const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})
