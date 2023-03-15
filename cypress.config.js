const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reportDir: 'cypress/reports',
  e2e: {
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    chromeWebSecurityArgs: "--disable-extensions",
    defaultCommandTimeout: 100000,
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/Plugin')(on);
      // implement node event listeners here
    },
  },
});
