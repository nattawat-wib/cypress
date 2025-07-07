// Define the login command
Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('body').should('be.visible')
    cy.get('input#Username').type('888888')
    cy.get('input[name="Password"]').type('P@ss1234')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/DASHBOARD')
})

export { }