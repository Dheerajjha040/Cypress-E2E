const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for mocha reporting 
  e2e: {
    baseUrl: 'https://dafz--uat.sandbox.my.site.com/dafzcustomer/s/', // url being used in the command.js file before 
    setupNodeEvents(on, config) {
      // implement node event listeners here 
      require('cypress-mochawesome-reporter/plugin')(on); // for mochareporting 
    },
  },
  env: {
        URL: "https://dafz--uat.sandbox.my.site.com/dafzcustomer/s/"
  }


  
});
