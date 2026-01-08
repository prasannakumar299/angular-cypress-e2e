describe("Login in the app and move to the dashboard", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Dashboard should be visible in the app", () => {
    cy.login(Cypress.env("userName"), "password");
    cy.get("#mat-tab-label-0-2").click();
    cy.wait(2000);
    cy.get("#mat-input-18").type("Prasanna Kumar");
    cy.get("#mat-input-19").type("prasanna@kumar");
    cy.get("#mat-input-20").type("This is a test message");
  });
});
