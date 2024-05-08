/// <reference types="cypress" />

describe('Filter by category feature', () => {
    it("TC-004: BE | Filter products by phone category", () => {
      cy.request('POST', 'https://api.demoblaze.com/bycat', {cat:"phone"}).then(
        (response) => {
          expect(response.status).to.eq(200);
          expect(response.body.Items[0]).to.have.property('cat', 'phone');
          cy.log(JSON.stringify(response.body));
        }
      )
    });
    it("TC-005: BE | Filter products by notebook category", () => {
        cy.request('POST', 'https://api.demoblaze.com/bycat', {cat:"notebook"}).then(
          (response) => {
            expect(response.status).to.eq(200);
            expect(response.body.Items[0]).to.have.property('cat', 'notebook');
            cy.log(JSON.stringify(response.body));
          }
        )
      });
      it("TC-006: BE | Filter products by monitor category", () => {
        cy.request('POST', 'https://api.demoblaze.com/bycat', {cat:"monitor"}).then(
          (response) => {
            expect(response.status).to.eq(200);
            expect(response.body.Items[0]).to.have.property('cat', 'monitor');
            cy.log(JSON.stringify(response.body));
          }
        )
      });
  });