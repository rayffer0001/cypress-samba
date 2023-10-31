/// <reference types = "cypress" />

describe('Login Page Elements', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  it('should have the Qorta logo', () => {
    cy.get('.auth-org-logo').should('have.length', 1);
  })

  it('should have the welcoming message', () => {
    cy.get('h2').contains('Welcome to SambaSafety')
  })

  it('should have a username input text', () => {
    cy.get('#idp-discovery-username').should('have.length', 1);
  })

  it('should have a rememberme checkbox', () => {
    cy.get('.custom-checkbox').contains('Remember me');
  })

  it('should have a next button', () => {
    cy.get('#idp-discovery-submit').should('have.length', 1);
  })

  it('should have a need signing in?', () => {
    cy.get('.auth-footer').contains('Need help signing in?');
  })
})
