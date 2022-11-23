describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders successfully", () => {
    cy.get("ul")
      .should("be.visible")
      .within(() => {
        cy.contains("a", "Todo App").should("be.visible");
        cy.contains("a", "About").should("be.visible");
        cy.contains("a", "Home").should("be.visible");
      });

    cy.contains("a", "Take Note").should("be.visible");
  });

  it('tests navigation when click "Take Note" button', () => {
    cy.wait(1000);
    cy.contains("a", "Take Note").click();
    cy.wait(1000);
    cy.url().should("include", "/notes/new");
  });

  it("tests navigation when click NoteCard", () => {
    cy.wait(1000);
    cy.get("h3").eq(0).click();
    cy.wait(1000);
    cy.url().should("include", "/notes/");
  });
});
