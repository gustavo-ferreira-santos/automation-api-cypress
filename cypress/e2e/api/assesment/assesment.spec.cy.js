import * as AssesmentApplicationFormat from '../../../fixtures/contract/assesment_application_format.contract'
const user = require('../../../fixtures/payload/sso/token')

describe('Testes dos endpoints de Assesment', () => {

  // let UserToken
  let UserToken

  beforeEach(() => {
    cy.getUserToken(user.getUserToken).then((respUserToken) => {
      return UserToken = respUserToken.body.accessToken
    })
  })

  it('GET - Assesment Application-Format', () => {
    cy.getAssesmentApplicationFormat(`Bearer ${UserToken}`).then((respgetAssesmentApplicationFormat) => {
      return AssesmentApplicationFormat.getAssesmentApplicationFormatSchema.validateAsync(respgetAssesmentApplicationFormat.body)
    })
  })
})