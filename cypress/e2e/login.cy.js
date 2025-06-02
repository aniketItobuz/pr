describe("Login with different user", () => {
  it("login with standard_user", () => {
    cy.fixture("users").then((data) => {
      cy.visit("https://www.saucedemo.com/");
      cy.get('[data-test="username"]').type(data.username);
      cy.get('[data-test="password"]').type(data.password);
      cy.get('[data-test="login-button"]').click();
    });
  });
});
