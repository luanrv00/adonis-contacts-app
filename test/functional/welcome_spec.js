describe('Welcome page', () => {
  it('has_a_link_to_contacts_list', () => {
    cy.visit('/')
    cy.contains('Ver lista de contatos')
  })
})
