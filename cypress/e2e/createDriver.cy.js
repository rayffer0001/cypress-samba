/// <reference types = "cypress" />

let randomNumber = Math.floor((Math.random() * 10000000) + 1);

describe('create driver', { testIsolation: false }, () => {//Importantisimo

  
  before(() => {
    cy.clearLocalStorage()// Importantisimo
    cy.login();
  })

  it('should open the Add New Person modal', () => {
    //cy.get('.pr-0 > [data-v-318f5236=""] > :nth-child(1) > .normal-btn-primary', { timeout: 30000 }).should('be.visible').click();
    cy.get('.v-btn__content > div > :nth-child(2)', { timeout: 30000 }).should('be.visible').click();
    cy.get('.form-dialog').contains('Add New Person').should('be.visible')
    //cy.pause()
  })

  it('should verify First Name field, and type a name', () => {
    cy.get('#person-first-name', { timeout: 30000 } ).should('be.visible').type('driverone')
  })

  it('should verify Last Name field, and type a Last name', () => {
    cy.get('#person-last-name').should('be.visible').type('drivertwo')
  })

  it('should verify Group field, and select a group', () => {
    cy.get(':nth-child(4) > .v-input__icon > .v-icon').should('be.visible').click()
    cy.get('.v-list-item__title').contains('auto group').should('be.visible').click()
  })

  context('when clicking on cancel button', () => {
    before(() => {
        cy.clearLocalStorage();
        cy.login();
        //cy.get('.pr-0 > [data-v-318f5236=""] > :nth-child(1) > .normal-btn-primary', { timeout: 30000 }).should('be.visible').click();
        cy.get('.v-btn__content > div > :nth-child(2)', { timeout: 30000 }).should('be.visible').click();
        cy.add();
      })

    it('should click on cancel button', () => {
      cy.get('.v-btn__content').contains('Cancel').should('be.visible').click()
      cy.location("pathname").should("equal","/people");
    })

    //after(() => {
      //cy.get('.pr-0 > [data-v-318f5236=""] > :nth-child(1) > .normal-btn-primary', { timeout: 30000 }).should('be.visible').click();
    //});
  });

  context('when clicking on Save and close button', () => {
    before(() => {
      cy.clearLocalStorage();
      cy.login();
      //cy.get('.pr-0 > [data-v-318f5236=""] > :nth-child(1) > .normal-btn-primary', { timeout: 30000 }).should('be.visible').click();
      cy.get('.v-btn__content > div > :nth-child(2)', { timeout: 30000 }).should('be.visible').click();
      cy.add();
    })

    it('should Create a driver without license', () => {
      cy.get('[data-cy="add_person_save_button"] > .v-btn__content').should('be.visible').contains('Save and Close').click();
      cy.get('.success-snack-bar > .v-snack__wrapper > .v-snack__content > div').should('be.visible')
      //Create assertion to validate 
    })
  })

    context('when clicking on Save and Add License button', () => {
      before(() => {
        cy.clearLocalStorage();
        cy.login();
        //cy.get('.pr-0 > [data-v-318f5236=""] > :nth-child(1) > .normal-btn-primary', { timeout: 30000 }).should('be.visible').click();
        cy.get('.v-btn__content > div > :nth-child(2)', { timeout: 30000 }).should('be.visible').click();
        cy.add();
      })

      it('should open Add License modal', () => {
        cy.get('[data-cy="add_person_save_and_continue_button"] > .v-btn__content').should('be.visible').contains('Save and Add License').click();
        cy.get('.v-dialog__content--active > .v-dialog > .form-dialog').should('be.visible')
        //cy.get('.v-dialog__content--active > .v-dialog > .form-dialog > .v-card__title > h3').should('be.visible').contains('Add License')
      })

      it('should verify the License State field and select a Licese state', () => {
        cy.get('#person-driver-license-state').should('be.visible').click()
        cy.get('.v-list-item__title').contains('US-AL').should('be.visible').click();
      })

      it('should verify the License # field and type a license #', () => {
        cy.get('#person-driver-license-number').should('be.visible').type(randomNumber)
      })

      it('should Create a driver with License button', () => {
        cy.get('.v-dialog__content--active > .v-dialog > .form-dialog > .v-card__text > :nth-child(1) > .container > :nth-child(2) > :nth-child(2) > [data-cy="add_person_save_button"]').should('be.visible').contains('Save').click()
        cy.get('.success-snack-bar > .v-snack__wrapper > .v-snack__content').should('be.visible')
        
      })



    })
    


})
