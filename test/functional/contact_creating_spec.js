describe('Contact Creating', () => {
  it('Add a new contact', () => {
    cy.visit('/contacts/create')
    cy.get('input[name="first_name"]').type('Soft')
    cy.get('input[name="last_name"]').type('Makers')
    cy.get('form').submit()
    cy.url().should('include', '/contacts')
    cy.contains('Soft Makers')
  })
})
