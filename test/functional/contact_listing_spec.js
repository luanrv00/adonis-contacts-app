describe('Contact Listing', () => {
  it('displays an info message when any countact added', () => {
    cy.visit('/contacts')
    cy.contains('Nenhum contato foi adicionado ainda.')
  })
})
