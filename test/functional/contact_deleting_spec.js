describe('Contact Deleting', () => {
  beforeEach(() => {
    cy.exec('node ace db:seed')
  })

  it('deletes a contact', () => {
    cy.visit('/contacts')
    cy.contains('Remover').click()
    cy.url().should('include', 'contacts')
    cy.get('table').should('not.exist')
  })
})
