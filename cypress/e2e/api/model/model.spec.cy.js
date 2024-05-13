import * as Model from '../../../fixtures/contract/model.contract'
const user = require('../../../fixtures/payload/sso/token')


describe('Testes dos endpoints de Model', () => {

  // let UserToken
  let UserToken

  beforeEach(() => {
    cy.getUserToken(user.getUserToken).then((respUserToken) => {
      return UserToken = respUserToken.body.accessToken
    })
  })
  
  it('GET - Model', () => {
    cy.getModel(`Bearer ${UserToken}`).then((respgetModel) => {
      return Model.getModelSchema.validateAsync(respgetModel.body)
    })
  })
})