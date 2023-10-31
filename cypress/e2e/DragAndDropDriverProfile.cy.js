/// <reference types = "cypress" />

describe('Drag and drop a file', { testIsolation: false }, () => {

  
    before(() => {
      cy.clearLocalStorage()
      cy.login();
    })
  
    it('should upload a file for a driver', () => {
        cy.get('.search__submit > .material-icons').should('be.visible').type('UPLOAD FILE')
        cy.get(':nth-child(5) > a').should('be.visible').contains('upload file').click()
        cy.get('.v-slide-group__content .v-tab:nth-of-type(4)').scrollIntoView().should('be.visible')
        cy.get('.v-slide-group__content .v-tab:nth-of-type(4)').click()
        cy.get(':nth-child(1) > .upload--drag-drop__selector').scrollIntoView().should('be.visible')
        cy.get("cypress/fixtures/sample.pdf").drag('[style=""] > .upload--drag-drop__selector');
        //cy.get('.upload--drag-drop__selector').selectFile("cypress/fixtures/sample.pdf");
        //cy.get('[style=""] > .upload--drag-drop__selector').selectFile("cypress/fixtures/sample.pdf",{
        //    action: 'dragDrop'
        //});
        cy.get('#uploadFileWithConfirmation').click()
        cy.get('.person-details__attachments__name').should('be.visible').contains('sample.pdf')
        
        //cy.get('.upload--btn__label').attachFile('your-file.txt', { fixturePath: 'path/to/fixtures' });
    
    })

})