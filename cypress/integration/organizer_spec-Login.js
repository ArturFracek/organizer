describe("Login, add goal and customize it", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:5000/api/goals/").as("getGoals");
  });

  it("should visit login page, and log in and check if we are redirected to profile page", () => {
    cy.visit("http://localhost:8080/Login");

    const password = "abc123";

    cy.get("#username").type("Andrzej");

    cy.get("#password").type(password);

    cy.get("input[type='submit']").click();

    cy.get(".TimeStatistics__container__title")
      .contains("Time Statistics")
      .should("be.visible");
  });

  const goal = "Test Goal";
  const description =
    "This is test description. Testing if description text area works fine. Now we made some test goal so we can test whole process in app";
  const rangeValue = 10;
  it("should check if popup button works for adding goals and add goal, then see if it works and get in to modal", () => {
    cy.get(".goals__andGoal__input").type(goal);

    cy.get(".goals__addGoal__button[type='button']")
      .should("be.visible")
      .click();

    cy.wait("@getGoals");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);

    cy.get(".goal__showModalButton[type='button']")
      .last()
      .contains(goal)
      .click();

    cy.get(".goal__modal").contains(goal).should("be.visible");
  });

  it("should add description in modal, set deadline, change priority, check if it works and save changes", () => {
    cy.get(".textArea[type='submit']").type(description);

    cy.get("[placeholder='Set Deadline']").click();

    cy.get(".cell").contains("10").click();

    cy.get(".slider").invoke("val", rangeValue).trigger("input");

    cy.get(".rangeValue").should("contain", rangeValue);

    cy.get(".goal__button").contains("Save").click();
  });

  it("Reload the page, check if data was saved properly to database in modal and leave modal", () => {
    cy.reload();
    const password = "abc123";

    cy.get("#username").type("Andrzej");

    cy.get("#password").type(password);

    cy.get("input[type='submit']").click();

    cy.get(".goal__showModalButton[type='button']")
      .last()
      .contains(goal)
      .click();

    cy.get(".rangeValue").should("contain", rangeValue);

    cy.get(".textArea").should("have.value", description);

    cy.get(".goal__button").contains("Go back").click();
  });

  it("should make a goal and delete it, then after reload see if it was deleted properly and first goal is also strill visible", () => {
    const goalToDelete = "Goal to Delete";
    cy.get(".goals__andGoal__input").type(goalToDelete);

    cy.get(".goals__addGoal__button[type='button']")
      .should("be.visible")
      .click();

    cy.wait("@getGoals");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);

    cy.get(".goal__showModalButton[type='button']")
      .contains(goalToDelete)
      .click();

    cy.get(".goal__modal").contains(goalToDelete).should("be.visible");

    cy.get(".bi-trash[type='button']").click();

    cy.reload();
    const password = "abc123";

    cy.get("#username").type("Andrzej");

    cy.get("#password").type(password);

    cy.get("input[type='submit']").click();

    cy.get(".goals__goalsHolder").should("contain", goal);

    cy.get(".goals__goalsHolder").should("not.contain", goalToDelete);
  });

  it("Should visit About Organizing page via nav, and check if links works", () => {
    cy.get(".nav__link--toLeft").contains("About Organizer").click();
  });

  it("should visit 'Organize' via  navbar, focus on input to see if css for labels work, write something to see it display after typing something", () => {
    cy.get(".organize").contains("Organize").click();

    cy.wait(200);

    cy.get(".routines__addRoutineInput")
      .focus()
      .get(".routines__form__label__addRoutines")
      .should("have.css", "top", "-75px || -35.2px");

    cy.get(".routines__addRoutineInput")
      .type("Testing Button")
      .get(".addRoutine__button")
      .should("be.visible");
  });
});
