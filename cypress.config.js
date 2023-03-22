const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  chromeWebSecurity: false,
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  viewportWidth: 1280,
  browser: 'chrome',
  viewportHeight: 800,


  e2e: {
    baseUrl: 'http://10.45.8.34/sys/en/neoclassic/login/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },

  env: {
    environment: 'workflow',
    credentials: {
        username: 'MUCAMUZAFFAR',
        password: 'Fmb@1234'
    }
}


});

