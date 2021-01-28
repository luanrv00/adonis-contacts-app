describe('Contact Listing', () => {
  beforeEach(() => {
    // clear database after each test
    cy.exec('node ace migration:rollback')
    cy.exec('node ace migration:run')
  })

  it('displays an info message when any contact added', () => {
    cy.visit('/contacts')
    cy.contains('Nenhum contato foi adicionado ainda.')
  })

  it('displays a list of contacts', () => {
    cy.exec('node ace db:seed')
    cy.visit('/contacts')
    cy.get('table').should('exist')
  })

  it('displays a button to edit a contact', () => {
    cy.exec('node ace db:seed')
    cy.visit('/contacts')
    cy.contains('Editar').should('exist')
  })
})
