/// <reference types = "cypress" />

describe("Login", () => {
    var email = 'ssjunipero+rayfferautoadmin1@gmail.com';
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    
  it("should login succesfully", () => {
    cy.intercept("GET", "/qorta-shared-dependencies/importmap.json").as(
      "Dependency");
    cy.visit("/login");
    cy.wait("@Dependency");
    cy.get("#idp-discovery-username").should("be.visible").type(email);
    cy.get("#idp-discovery-submit").should("be.visible").click();
    cy.get("#okta-signin-password").should("be.visible").type("G0F0rBr0ke!");
    cy.get("#okta-signin-submit").should("be.visible").click();
    //cy.pause();
    cy.get("#people-table-title__text", { timeout: 50000 }).should("be.visible");
    cy.location("pathname").should("equal", "/people");
    cy.get('#user-name-label').should('be.visible').contains(email);
  });

  it("should fail, wrong username", () => {
    cy.visit("/login");
    cy.get("#idp-discovery-username").should("be.visible").type("wrongemail");
    cy.get("#idp-discovery-submit").should("be.visible").click();
    cy.get("#okta-signin-password").should("be.visible").type("G0F0rBr0ke!");
    cy.get("#okta-signin-submit").should("be.visible").click();
    cy.get('p').should('be.visible').contains("Unable to sign in")
  })

  it("should fail, wrong password", () => {
    cy.visit("/login");
    cy.get("#idp-discovery-username").should("be.visible").type(email);
    cy.get("#idp-discovery-submit").should("be.visible").click();
    cy.get("#okta-signin-password").should("be.visible").type("wrongpassword");
    cy.get("#okta-signin-submit").should("be.visible").click();
    cy.get('p').should('be.visible').contains("Unable to sign in")
  })

  it("Required field, Username", () => {
    cy.visit("/login");
    cy.get("#idp-discovery-submit").should("be.visible").click();
    cy.get('.okta-form-infobox-error > p').should('be.visible').contains("We found some errors. Please review the form and make corrections.")
    cy.get('#input-container-error6').should('be.visible').contains("This field cannot be left blank")
  })

  it("Required field, Password", () => {
    cy.visit("/login");
    cy.get("#idp-discovery-username").should("be.visible").type(email);
    cy.get("#idp-discovery-submit").should("be.visible").click();

    cy.get("#okta-signin-submit").should("be.visible").click();
    cy.get('.okta-form-infobox-error > p').should('be.visible').contains("We found some errors. Please review the form and make corrections.")
    cy.get('#input-container-error13').should('be.visible').contains("Please enter a password")
    
  })

});



