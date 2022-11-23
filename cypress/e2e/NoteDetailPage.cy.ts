describe("NoteDetailPage", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("h3").eq(0).click();
  });

  it("renders NoteDetailModal", () => {
    cy.get("h1").should("be.visible");
    cy.get("p").should("be.visible");
    cy.contains("button", "Update").should("be.visible");
    cy.contains("button", "Close").should("be.visible");
    cy.wait(1000);
  });

  it('tests navigation when click the "Update" button', () => {
    cy.contains("button", "Update").click();
    cy.url().should("include", "/edit");
  });

  it('tests navigation when click the "Close" button', () => {
    cy.contains("button", "Close").click();
    cy.url().should("include", "/");
  });
});
