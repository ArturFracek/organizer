describe("Registration", () => {
  it("should allow people to sign up", () => {
    cy.visit("http://localhost:8080/Register");

    cy.get("#email").type("test@email.com");

    const password = "abc123";

    cy.get("#name").type("Gołota");

    cy.get("#username").type("Andrzej", {force: true});

    cy.get("#password").type(password);

    cy.get("#confirm_password").type(password, {force: true});

    cy.get("input[type='submit']").click()


  });
});
