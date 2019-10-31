describe("click on a day", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("click on a day", () => {
    cy.get("#startDate").click({
      force: true
    });
    cy.contains("td", 15).click({
      force: true
    });
  });
});
