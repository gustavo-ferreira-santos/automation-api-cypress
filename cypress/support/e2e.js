import './commands'
// importando todos os arquivos .js dentro da pasta requests
// const reqapi = require.context('./requests/api', false, /\.js$/);
// const reqsso = require.context('./requests/sso', false, /\.js$/);
// reqapi.keys().forEach(reqapi);
// reqsso.keys().forEach(reqsso);
import './requests/sso/user'
import './requests/api/assesment'
import './requests/api/model'
import 'cypress-mochawesome-reporter/register'
require('cypress-grep')()
require('cypress-terminal-report/src/installLogsCollector')()
require('cypress-plugin-api')
require('@shelex/cypress-allure-plugin');