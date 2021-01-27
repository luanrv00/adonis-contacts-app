describe('Welcome page', () => {
  it('has a link to contacts list', () => {
    cy.visit('/')
    cy.contains('Ver lista de contatos')
  })

  it('has a link to contact form', () => {
    cy.visit('/')
    cy.contains('Adicionar novo contato')
    cy.get('.add').click()
    cy.url().should('include', '/contacts/create')
  })
})
