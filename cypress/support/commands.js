// import Ajv from 'ajv'
const Ajv = require("ajv")
//strict true dando erro...
const ajv = new Ajv({ allErrors: true, verbose: true, strict: false })

Cypress.Commands.add('validationSchema', (response, folderSchema, nameSchema) => {
  cy.fixture(`schema/${folderSchema}/${nameSchema}.json`).then(schema => {
    //schema que será usado para validação
    const validate = ajv.compile(schema)
    //console.log(validate)

    const valid = validate(response)
    //caso tenha dado algum erro
    if (!valid) {
      var errors = ''

      //tentativa com of mas é usado o in
      for (let each in validate.errors) {
        let err = validate.errors[each]

        //instancePath = em qual linha da resposta que obtive está o erro
        //err.message = o que era pra ter recebido (string, int, boolean, etc)
        //err.data = o tipo de dado que eu recebi
        errors += `\n${err.instancePath} ${err.message}, but receive ${typeof err.data}`
      }

      throw new Error('Contract validation error, please verify!' + errors)
      Cypress.runner.stop()
    }
    else {
      //caso não ocorra erro
      Cypress.log({
        //nome dado ao log
        name: 'validacaoDeContrato',
        // informa o nome do schema e da pasta onde o mesmo está localizado
        displayName: `The JSON schema '${nameSchema}.json' in the folder: ${folderSchema} -->  `,
        // mensagem de sucesso
        message: 'Successfully validated!!!'

      })
      //outra forma de exibir msg de sucesso
      // cy.log('Schema Validado com Sucesso')
    }
    //caso tenha dado tudo certo
    return true

  })
})