/// <reference types="@bahmutov/cy-api" />

describe("JSON PLACEHOLDER API Test", () => {
  it("JSON Place Holder users", () => {
    cy.api({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
    })
      .its("status")
      .should("eq", 200);
  });
});
