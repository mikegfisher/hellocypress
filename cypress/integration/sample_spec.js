describe('Home page loads', function() {
  it('Navigates to the homepage', function() {
    cy.visit('https://example.cypress.io')
  })
})
describe('Type link works', function() {
  it("clicking 'type' navigates to a new url", function() {
    // Visit the homepage
    cy.visit('https://example.cypress.io')
    // Find the 'type' hyperlink
    cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    // Enter an email address and validate that the input has the expected value
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
