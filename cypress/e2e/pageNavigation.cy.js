/// <reference types = "cypress" />

describe("page navigation", () => {

  before(() => {
    cy.login();
  })

  it("should navigate between pages", () => {

    cy.get("a").contains("Alerts").click();
    cy.location("pathname").should("equal","/alerts");

    cy.get("a").contains("People").click();
    cy.location("pathname").should("equal","/people");

    cy.get("a").contains("Reports").click();
    cy.location("pathname").should("equal","/reports");

    cy.go("back");
    cy.location("pathname").should("equal","/people");
  });

  


});
