describe("students entry login and dashboard tests", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Navigate to add student form", () => {
    cy.login(Cypress.env("userName"), "password");
    cy.get("#mat-tab-label-0-1").click();
    cy.wait(2000);
    cy.get(".student-entry-form").should("be.visible");
  });

  it("should be able to fill the form", () => {
    cy.login(Cypress.env("userName"), "password");
    cy.get("#mat-tab-label-0-1").click();
    cy.wait(2000);
    cy.get(".student-entry-form").should("be.visible");
    cy.get("#mat-input-3").click().type("Prasanna Kumar");
    cy.get("#mat-input-4").click().type("India");
    cy.get("#mat-input-5").click().type("A.P");
    cy.get("#mat-input-6").type("Yes", { force: true });
    cy.get("#mat-input-7").type("yes", { force: true });
    cy.get("#mat-input-8").type("Btech");
    cy.get("#mat-input-9").type("Electrical");
    cy.get("#mat-input-10").click().type("12/11/2024");
    cy.get("#mat-input-11").click().type("India");
    cy.get("#mat-input-12").click().type("Gurgaon");
    cy.get("#mat-input-13").click().type("Deepak@jha");
    cy.get("#mat-input-15").type("Gurgaon", { force: true });
    cy.get("#mat-input-16").type("122100", { force: true });
  });

  it("check if calender opens", () => {
    cy.login(Cypress.env("userName"), "password");
    cy.get("#mat-tab-label-0-1").click();
    cy.wait(2000);
    cy.get(".student-entry-form").should("be.visible");
    cy.get("mat-datepicker-toggle").click();
    cy.get("mat-calendar").should("be.visible");
  });
});
