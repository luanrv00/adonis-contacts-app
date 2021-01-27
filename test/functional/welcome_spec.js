describe('Welcome page', () => {
  it('has a link to contacts list', () => {
    cy.visit('/')
    cy.contains('Ver lista de contatos')
  })
})
