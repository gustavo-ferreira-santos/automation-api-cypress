const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter')

/**
 * @type {Cypress.PluginConfig}
 */
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'stage'

      require('cypress-grep/src/plugin')(config)
      // para gerar relatorios do moca setar como
      // require('cypress-mochawesome-reporter/plugin')(off)

      allureWriter(on, config);

      installLogsPrinter(on, {
        printLogsToConsole: "always",
      });
      return getConfigurationByFile(file)
    },
    "viewportWidth": 1366,
    "viewportHeight": 768,
    "defaultCommandTimeout": 30000,
    "chromeWebSecurity": false,
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "configFile": "reporter-config.json"
    },
    "video": false,
    "screenshotsFolder": "images",
    "compilerOptions": {
      "allowJs": true,
      "baseUrl": "./",
      "types": ["@shelex/cypress-allure-plugin"],
      "noEmit": true
    }
  }
})