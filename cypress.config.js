const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://sitdev.dyndns.org:9185",
    
    // Hide XHR requests from command log
    requestTimeout: 10000,
    responseTimeout: 30000,
    
    // Filter out API requests from Command Log
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});
