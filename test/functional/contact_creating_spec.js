describe('Contact Creating', () => {
  beforeEach(() => {
    cy.exec('node ace migration:rollback')
    cy.exec('node ace migration:run')
  })

  it('add a new contact', () => {
    cy.visit('/contacts/create')
    cy.get('input[name="first_name"]').type('Soft')
    cy.get('input[name="last_name"]').type('Makers')
    cy.get('input[name="email"]').type('soft@makers.mail')
    cy.get('form').submit()
    cy.url().should('include', '/contacts')
    cy.contains('Soft Makers')
  })

  it('requires contact info', () => {
    cy.visit('/contacts/create')
    cy.get('form').submit()
    cy.url().should('include', '/contacts/create')
    cy.contains('Por favor, preencha os campos obrigatórios.')
  })
})
