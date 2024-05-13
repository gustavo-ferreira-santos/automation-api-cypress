
Cypress.Commands.add('getAssesmentApplicationFormat', (token) => {
  cy.api({
    method: 'GET',
    url: `${Cypress.env('url').pmais}/assessment/application-format`,
    headers: {
      accept: 'text/plain',
      Authorization: token
    }
  })
})