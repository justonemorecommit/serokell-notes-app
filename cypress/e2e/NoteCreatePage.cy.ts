describe("NoteCreatePage", () => {
  beforeEach(() => {
    cy.visit("/notes/new");
  });

  it("renders all components", () => {
    cy.get("input[name=title]").should("be.visible");
    cy.get("input[name=description]").should("be.visible");
    cy.contains("button", "Create").should("be.visible");
    cy.contains("a", "Cancel").should("be.visible");
  });

  it("tests validation", () => {
    cy.get("input[name=title]")
      .type("This is the title for validation")
      .should("have.value", "This is the title for validation");
    cy.contains("button", "Create").click();
    cy.contains("Please fill the inputs").should("be.visible");
  });

  it("tests note create feature", () => {
    cy.get("input[name=title]")
      .type("This is the title for create test")
      .should("have.value", "This is the title for create test");
    cy.get("input[name=description]")
      .type("This is the description for create test")
      .should("have.value", "This is the description for create test");
    cy.contains("button", "Create").click();
    cy.contains("Created a new note successfully").should("be.visible");
    cy.url().should("include", "/");
  });

  it("tests navigation when click the 'Cancel' button", () => {
    cy.contains("a", "Cancel").click();
    cy.url().should("include", "/");
  });
});
