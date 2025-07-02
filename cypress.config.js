const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
        URL: "https://dafz--uat.sandbox.my.site.com/dafzcustomer/s/login/?ec=302&startURL=%2Fdafzcustomer%2Fs%2F"
  }
});
