describe('Contact Listing', () => {
  beforeEach(() => {
    // clear database after each test
    cy.exec('node ace migration:rollback')
    cy.exec('node ace migration:run')
  })

  it('displays an info message when any countact added', () => {
    cy.visit('/contacts')
    cy.contains('Nenhum contato foi adicionado ainda.')
  })
})
