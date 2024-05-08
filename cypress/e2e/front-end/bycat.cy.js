/// <reference types="cypress" />

describe('Filter by category feature', () => {

    beforeEach(() => {
        cy.visit('/')
      })

    it('TC-009: FE | Filter by phones', () => {
        cy.contains('Phones').click();
        cy.get('#tbodyid').should('be.visible');
        cy.screenshot();
    })
    it('TC-010: FE | Filter by laptops', () => {
        cy.contains('Laptops').click();
        cy.get('#tbodyid').should('be.visible');
        cy.screenshot();
    })
    it('TC-011: FE | Filter by monitors', () => {
        cy.contains('Monitors').click();
        cy.get('#tbodyid').should('be.visible');
        cy.screenshot();
    })
});