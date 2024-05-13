
Cypress.Commands.add('getModel', (token) => {
  cy.api({
    method: 'GET',
    url: `${Cypress.env('url').pmais}/model`,
    headers: {
      accept: 'text/plain',
      Authorization: token
    }
  })
})