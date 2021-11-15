describe("Login, add goal and customize it", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:5000/api/goals/").as("getGoals");
  });

  it("should visit login page, and log in and check if we are redirected to profile page", () => {
    cy.visit("http://localhost:8080/Login");

    const goal = "Test Goal";
    const description =
      "This is test description. Testing if description text area works fine. Now we made some test goal so we can test whole process in app";
    const rangeValue = 10;
    const password = "abc123";

    cy.get("[data-test='loginUsername']").type("Andrzej");

    cy.get("[data-test='loginPassword']").type(password);

    cy.get("[data-test='loginLogin']").click();

    cy.url().should("include", "http://localhost:8080/profile");

    cy.get("[data-test='goalInputAdd']").type(goal);

    cy.get("[data-test='goalButtonAdd']").should("be.visible").click();

    cy.wait("@getGoals");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);

    cy.get("[data-test='goalModalButton']").last().contains(goal).click();

    cy.get("[data-test='goalModal']").contains(goal).should("be.visible");

    cy.get("[data-test='textArea']").type(description);

    cy.get("[placeholder='Set Deadline']").click();

    cy.get(".cell").contains("10").click();

    cy.get(".slider").invoke("val", rangeValue).trigger("input");

    cy.get(".rangeValue").should("contain", rangeValue);

    cy.get("[data-test='goalSave']").click();

    cy.reload();

    cy.get("[data-test='goalButtonAdd']").last().contains(goal).click();

    cy.get(".rangeValue").should("contain", rangeValue);

    cy.get("[data-test='textArea']").should("have.value", description);

    cy.get("[data-test='goalGoBack']").click();

    const goalToDelete = "Goal to Delete";
    cy.get("[data-test='goalInputAdd']").type(goalToDelete);

    cy.get("[data-test='goaButtonAdd']").should("be.visible").click();

    cy.wait("@getGoals");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);

    cy.get("[data-test='goalModalButton']").contains(goalToDelete).click();

    cy.get("[data-test='goalModal']")
      .contains(goalToDelete)
      .should("be.visible");

    cy.get(".bi-trash[type='button']").click();

    cy.reload();

    cy.get("[data-test='goalHolder']").should("contain", goal);

    cy.get("[data-test='goalHolder']").should("not.contain", goalToDelete);
  });

  it("Should visit About Organizing page via nav, and check if links works", () => {
    cy.get(".nav__link--toLeft").contains("About Organizer").click();
  });

  it("should visit 'Organize' via  navbar, focus on input to see if css for labels work, write something to see it display after typing something", () => {
    cy.get(".organize").contains("Organize").click();
    cy.get(".routines__addRoutineInput")
      .focus()
      .get(".routines__form__label__addRoutines")
      .should("have.css", "top", "-35.2px");

    cy.get(".routines__addRoutineInput")
      .type("Testing Button")
      .get(".addRoutine__button")
      .should("be.visible");
  });
});
