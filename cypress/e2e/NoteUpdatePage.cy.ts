describe("NoteUpdatePage", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("h3").eq(0).click();
    cy.wait(2000);
    cy.contains("button", "Update").click();
  });

  it("renders NoteUpdateModal", () => {
    cy.get("input[name=title]").should("be.visible");
    cy.get("input[name=description]").should("be.visible");
    cy.contains("button", "Update").should("be.visible");
    cy.contains("a", "Cancel").should("be.visible");
    cy.wait(1000);
  });

  it("tests validation", () => {
    cy.get("input[name=title]").clear().should("have.value", "");
    cy.contains("button", "Update").click();
    cy.contains("Please fill the inputs").should("be.visible");
    cy.wait(1000);
  });

  it("tests note update feature", () => {
    cy.get("input[name=title]")
      .clear()
      .type("This is the updated title")
      .should("have.value", "This is the updated title");
    cy.get("input[name=description]")
      .clear()
      .type("This is the updated description")
      .should("have.value", "This is the updated description");
    cy.contains("button", "Update").click();
    cy.contains("Updated successfully").should("be.visible");
    cy.wait(1000);
    cy.url().should("include", "/");
  });

  it("tests navigation when click the 'Cancel' button", () => {
    cy.contains("a", "Cancel").click();
    cy.url().should("include", "/");
  });
});
