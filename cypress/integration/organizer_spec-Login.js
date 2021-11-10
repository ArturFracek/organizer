describe("Login, add goal and customize it", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:5000/api/goals/").as("getGoals");
  });

  it("should login me, add goal and customize it", () => {
    cy.visit("http://localhost:8080/Login");

    const password = "abc123";

    cy.get("#username").type("Andrzej");

    cy.get("#password").type(password);

    cy.get("input[type='submit']").click();

    cy.get(".TimeStatistics__container__title")
      .contains("Time Statistics")
      .should("be.visible");

    const goal = "Test Goal";
    const description =
      "This is test description. Testing if description text area works fine. Now we made some test goal so we can test whole process in app";
    const rangeValue = 10;

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

    cy.get(".textArea[type='submit']").type(description);

    cy.get("[placeholder='Set Deadline']").click();

    cy.get(".cell").contains("10").click();

    cy.get(".slider").invoke("val", rangeValue).trigger("input");

    cy.get(".rangeValue").should("contain", rangeValue);

    cy.get(".goal__button").contains("Save").click();

    cy.reload();

    cy.get(".goal__showModalButton[type='button']")
      .last()
      .contains(goal)
      .click();

    cy.get(".rangeValue").should("contain", rangeValue);

    cy.get(".textArea").should("have.value", description);

    cy.get(".goal__button").contains("Go back").click();

    // Create new goal to delete it

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

    cy.get(".goals__goalsHolder").should("contain", goal);

    cy.get(".goals__goalsHolder").should("not.contain", goalToDelete);
  });
});
