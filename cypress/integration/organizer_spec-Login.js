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

    cy.get("[data-test='goalModalButton']").last().contains(goal).click();

    cy.get(".rangeValue").should("contain", rangeValue);

    cy.get("[data-test='textArea']").should("have.value", description);

    cy.get("[data-test='goalGoBack']").click();

    const goalToDelete = "Goal to Delete";
    cy.get("[data-test='goalInputAdd']").type(goalToDelete);

    cy.get("[data-test='goalButtonAdd']").should("be.visible").click();

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
    cy.visit("http://localhost:8080/About");

    cy.url().should("include", "http://localhost:8080/About");

    cy.get("[data-test='aboutOrganizingUpperSection']").should(
      "contain",
      "In the Organizer, you create your activities"
    );

    cy.get("[data-test='aboutOrganizingLowerSection']").should(
      "contain",
      "The importance of structurizing time"
    );

    cy.get("a").each(($a) => {
      const message = $a.text();
      expect($a, message).to.have.attr("href").not.contain("undefined");
    });
  });

  it.only("should visit 'Organize', and add few activities, then customize them and check if saving to database properly", () => {
    cy.visit("http://localhost:8080/Organize");

    const activity1 = "TEST Running";
    const description1 = "111This is first test activity111";
    const rangeValue1 = 1;
    const activity2 = "TEST Swimming";
    const activity3 = "TEST Chess";

    cy.get("[data-test='activityInputAdd']")
      .focus()
      .get('[data-test="activityLabel"]')
      .should("have.css", "top", "-35.2px");

    cy.get("[data-test='activityInputAdd']")
      .type(activity1)
      .get('[data-test="activityButtonAdd"]')
      .should("be.visible")
      .click();

    cy.wait(200).get('[data-test="activityShowModal"]')
      .last()
      .contains(activity1)
      .should("be.visible")
      .click();

    ////
    cy.get("[data-test='activityModalTitle']").should("have.value", activity1);

    cy.get("[data-test='textArea']").type(description1);

    cy.get(".slider").invoke("val", rangeValue1).trigger("input");

    cy.get(".rangeValue").should("contain", rangeValue1);

    cy.get("[data-test='activitySave']").click();

    cy.reload();
  });
});
