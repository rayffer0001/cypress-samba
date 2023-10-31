// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



import 'cypress-file-upload';


//Random Name
const randomNames = 'FirstName'
let randomNumber = Math.floor((Math.random() * 1000) + 1);
const randomName = randomNames + randomNumber;

//Random LastName
const randomLast = 'LastName'
let randomNumber2 = Math.floor((Math.random() * 1000) + 1);
const randomlastName = randomLast + randomNumber2;


Cypress.Commands.add('login', () => {

    var email = 'ssjunipero+rayfferautoadmin1@gmail.com';

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

    cy.intercept("GET", "/qorta-shared-dependencies/importmap.json").as(
      "Dependency");
    cy.visit("/login");
    cy.wait("@Dependency");
    cy.get("#idp-discovery-username", { timeout: 80000 }).should("be.visible").type(email);
    cy.get("#idp-discovery-submit").should("be.visible").click();
    cy.get("#okta-signin-password").should("be.visible").type("G0F0rBr0ke!");
    cy.get("#okta-signin-submit").should("be.visible").click();
    //cy.pause();
    cy.get("#people-table-title__text", { timeout: 50000 }).should("be.visible");
    cy.location("pathname").should("equal", "/people");
    cy.get('#user-name-label').should('be.visible').contains(email);
});

Cypress.Commands.add('add', () => {
  cy.get('#person-first-name', { timeout: 30000 } ).should('be.visible').type(randomName)
  cy.get('#person-last-name').should('be.visible').type(randomlastName)
  cy.get(':nth-child(4) > .v-input__icon > .v-icon').should('be.visible').click()
  cy.get('.v-list-item__title').contains('auto group').should('be.visible').click()
});