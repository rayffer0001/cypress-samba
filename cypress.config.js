const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //screenshotOnRunFailure: true,
  //videoOnRunFailure: true,
  //defaultCommandTimeout: 10000,
  //pageLoadTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    baseUrl: "https://test.sambasafety.io",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    }
    // specPattern: [
    //   "cypress/e2e/loginElements.cy.js",
    //   "cypress/e2e/login.cy.js",
    //   "cypress/e2e/pageNavigation.cy.js",
    //   "cypress/e2e/createDriver.cy.js",
    // ]
  },
});




