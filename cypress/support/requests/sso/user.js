
Cypress.Commands.add('getUserToken', (payload) => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('url').sso}/api/tokens`,
    headers: {
      accept: 'text/plain',
      'application-id': 1,
      'x-api-key': 'f7fcb9d8-qcwl-8377-chn4-48ebf978c56f',
      'Content-Type': 'application/json'
    },
    body: payload
  })
})