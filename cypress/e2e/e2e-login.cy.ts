/// <reference types="cypress" />

describe("Login Page E2E Tests", () => {
  beforeEach(() => {
    // Navigate to the login page before each test
    cy.visit("http://localhost:4200/login");

    // cy.fixture('username').as('userData');
  });

  it("should test failed case of the login form", () => {
    cy.fixture("error-username").then((errorData) => {
      cy.get("mat-card form").should("be.visible");
      cy.get('input[formcontrolname="username"]').type(errorData.username);
      cy.get('input[formcontrolname="password"]').type(errorData.password);
      cy.get("mat-error").first().should("have.text", "Email is required");
    });
  });

  it("should display the login form", () => {
    cy.fixture("username").then((userData) => {
      cy.get("mat-card form").should("be.visible");
      cy.get('input[formcontrolname="username"]').type(userData.username);
      cy.get('input[formcontrolname="password"]').type(userData.password);
      cy.get("button").contains("Login").should("be.visible");
      cy.get("button").contains("Login").click();
      cy.url().should("include", "/dashboard");
    });
  });
});
