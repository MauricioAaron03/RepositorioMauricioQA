/// <reference types="cypress" />

describe('Cart feature', () => {
  it("TC-001: BE | Add new product to cart", () => {
    cy.request('POST', 'https://api.demoblaze.com/addtocart', {
      id: "f61321e9-3068-60aa-8287-e96e2c65a514",
      cookie: "user=c623342d-ba3b-4e96-ef3d-3c9b890cf941",
      prod_id: 1,
      flag: false
    }).then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    )
  });

  it("TC-002: BE | Delete product from the cart", () => {
    cy.request('POST', 'https://api.demoblaze.com/deletecart', {
      cookie: "user=c623342d-ba3b-4e96-ef3d-3c9b890cf941"
    }).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.eq("Item deleted.");
        cy.log(JSON.stringify(response.body));
      }
    )
  });
});
