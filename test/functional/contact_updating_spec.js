describe('Contact Updating', () => {
  beforeEach(() => {
    cy.exec('node ace db:seed')
  })

  afterEach(() => {
    cy.exec('node ace migration:rollback')
    cy.exec('node ace migration:run')
  })

  it('updates basic contact info', () => {
    cy.visit('/contacts')
    cy.contains('Editar').click()
    cy.url().should('include', '/contacts/1/edit')
    cy.get('input[name="email"]').type('soft@makers.rocks')
    cy.get('form').submit()
    cy.url().should('include', '/contacts')
    cy.contains('soft@makers.rocks')
  })

  it('updates a contact photo', () => {
    // NOTE: this test can be done by using cypress-file-upload package
  })
})
