/// <reference types="cypress" />

describe('Cart feature', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#cartur').click();
  })

  it('TC-007: FE | Add new product to cart', () => {
    cy.get('.success > :nth-child(1) > img').should('be.visible')
    cy.screenshot();
  })
  it('TC-008: FE | Delete product from the cart', () => {
    cy.get('.success > :nth-child(4) > a').click();
    cy.get('.success > :nth-child(1) > img').should('not.exist');
    cy.screenshot();
  })
});