const { defineConfig } = require("cypress");

module.exports = defineConfig({
    baseUrl: 'http://10.45.8.34/sys/en/neoclassic/login/login',
    chromeWebSecurity: false,
    watchForFileChanges: false,

    env: {
        environment: 'workflow',
        credentials: {
            username: 'MUCAMUZAFFAR',
            password: 'Fmb@1234'
        }
    },

    e2e: {
        setupNodeEvents(on, config) {
          // implement node event listeners here
          
        },
      },
})