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

  it("should visit 'Organize', and add few activities, then customize them and check if saving to database properly", () => {
    cy.visit("http://localhost:8080/Organize");

    const activity1 = "TEST Running";
    const description1 = "111This is first test activity111";
    const rangeValue1 = 1;
    const activity2 = "TEST Swimming";
    const description2 = "222 Describing second activity222";
    const rangeValue2 = 2;
    const activity3 = "TEST Chess";
    const description3 = "3333          33333";
    const rangeValue3 = 3;
    //Create and customize first Activity
    cy.get("[data-test='activityInputAdd']")
      .focus()
      .get('[data-test="activityLabel"]')
      .should("have.css", "top", "-35.2px");

    cy.get("[data-test='activityInputAdd']")
      .type(activity1)
      .get('[data-test="activityButtonAdd"]')
      .should("be.visible")
      .click();

    cy.wait(200)
      .get('[data-test="activityShowModal"]')
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
    //Create and customize second Activity
    cy.get("[data-test='activityInputAdd']")
      .focus()
      .get('[data-test="activityLabel"]')
      .should("have.css", "top", "-35.2px");

    cy.get("[data-test='activityInputAdd']")
      .type(activity2)
      .get('[data-test="activityButtonAdd"]')
      .should("be.visible")
      .click();

    cy.wait(200)
      .get('[data-test="activityShowModal"]')
      .last()
      .contains(activity2)
      .should("be.visible")
      .click();

    ////
    cy.get("[data-test='activityModalTitle']").should("have.value", activity2);

    cy.get("[data-test='textArea']").type(description2);

    cy.get(".slider").invoke("val", rangeValue2).trigger("input");

    cy.get(".rangeValue").should("contain", rangeValue2);

    cy.get("[data-test='activitySave']").click();

    //Create and customize third Activity
    cy.get("[data-test='activityInputAdd']")
      .focus()
      .get('[data-test="activityLabel"]')
      .should("have.css", "top", "-35.2px");

    cy.get("[data-test='activityInputAdd']")
      .type(activity3)
      .get('[data-test="activityButtonAdd"]')
      .should("be.visible")
      .click();

    cy.wait(200)
      .get('[data-test="activityShowModal"]')
      .last()
      .contains(activity3)
      .should("be.visible")
      .click();

    cy.get("[data-test='activityModalTitle']").should("have.value", activity3);

    cy.get("[data-test='textArea']").type(description3);

    cy.get(".slider").invoke("val", rangeValue3).trigger("input");

    cy.get(".rangeValue").should("contain", rangeValue3);

    cy.get("[data-test='activitySave']").click();

    cy.reload();

    //Check if saved to database properly and delete
    cy.get('[data-test="activitiesSection"]')
      .should("contain", activity3)
      .should("contain", activity2)
      .should("contain", activity1);
    //Checking third activity and deleting
    cy.get('[data-test="activityShowModal"]').contains(activity3).click();

    cy.get(".rangeValue").should("contain", rangeValue3);
    cy.get("[data-test='textArea']").should("have.value", description3);
    cy.get('[data-test="activityModalTitle"]')
      .click()
      .clear()
      .type("Will be deleted now");
    cy.get('[data-test="activityModalTitle"]').should(
      "have.value",
      "Will be deleted now"
    );
    cy.get('[data-test="activityDelete"]').click();

    //checking second and deleting
    cy.get('[data-test="activityShowModal"]').contains(activity2).click();

    cy.get(".rangeValue").should("contain", rangeValue2);
    cy.get("[data-test='textArea']").should("have.value", description2);
    cy.get('[data-test="activityModalTitle"]')
      .click()
      .clear()
      .type("Will be deleted now");
    cy.get('[data-test="activityModalTitle"]').should(
      "have.value",
      "Will be deleted now"
    );
    cy.get('[data-test="activityDelete"]').click();

    //checking first and deleting
    cy.get('[data-test="activityShowModal"]').contains(activity1).click();

    cy.get(".rangeValue").should("contain", rangeValue1);
    cy.get("[data-test='textArea']").should("have.value", description1);
    cy.get('[data-test="activityModalTitle"]')
      .click()
      .clear()
      .type("Will be deleted now");
    cy.get('[data-test="activityModalTitle"]').should(
      "have.value",
      "Will be deleted now"
    );
    cy.get('[data-test="activityDelete"]').click();

    //reload and see if deleted

    cy.reload();

    cy.get('[data-test="activitiesSection"]')
      .should("not.contain", activity3)
      .should("not.contain", activity2)
      .should("not.contain", activity1);
  });

  it("Should visit organazie, create a routine, create two activities, save them, add them to routine and customize it. Thensave a routine and check TimeNet", () => {
    cy.visit("http://localhost:8080/Organize");

    const activity1 = "TEST Running";
    const activity2 = "TEST Swimming";

    //Create and customize first Activity

    cy.get("[data-test='activityInputAdd']")
      .type(activity1)
      .get('[data-test="activityButtonAdd"]')
      .should("be.visible")
      .click();

    cy.wait(200)
      .get('[data-test="activityShowModal"]')
      .last()
      .contains(activity1)
      .should("be.visible");
    //Create and customize second Activity

    cy.get("[data-test='activityInputAdd']")
      .type(activity2)
      .get('[data-test="activityButtonAdd"]')
      .should("be.visible")
      .click();

    cy.wait(200)
      .get('[data-test="activityShowModal"]')
      .last()
      .contains(activity2)
      .should("be.visible");

    //create test routine
    const testRoutine = "Test Routine";
    const description = "This is Routine that we are testing now";
    const rangeValue = 8;

    cy.get('[data-test="routinesInputAdd"]')
      .type(testRoutine)
      .get('[data-test="routinesButtonAdd"]')
      .should("be.visible")
      .click();

    cy.wait(200);

    cy.get('[data-test="routineShowModal"]').contains(testRoutine).click();

    cy.get("[data-test='routineModalTitle']").should("have.value", testRoutine);

    cy.get("[data-test='textArea']").type(description);

    cy.get(".slider").invoke("val", rangeValue).trigger("input");

    cy.get(".rangeValue").should("contain", rangeValue);

    cy.get('[data-test="routineOccurencActivityAdd"]').click();

    cy.get('[data-test="routineOccurencActivityAdd"]').click();
    //select first activity name for occurence
    cy.get('[data-test="activityNameOccurence"]')
      .children()
      .first()
      .select(activity1);
    //select first day for occurence
    cy.get('[data-test="activityDayOccurence"]')
      .children()
      .first()
      .select("Tuesday");
    //start hour of first activity -> set 07:15 a.m
    cy.get('[data-test="timerPickerStart"]')
      .children()
      .get(".hours>li[data-key='07']")
      .first()
      .click({ force: true })
      .get(".minutes>li[data-key='15']")
      .first()
      .click({ force: true });

    cy.get(".routine__modal__type").click();

    //end hour of first activity -> set 15:45
    cy.get('[data-test="timerPickerEnd"]')
      .children()
      .get(".hours>li[data-key='15']")
      .eq(1)
      .click({ force: true })
      .get(".minutes>li[data-key='45']")
      .eq(1)
      .click({ force: true });

    cy.get(".routine__modal__type").click();

    // second activity occurence setting - Name first
    cy.get('[data-test="activityNameOccurence"]')
      .children()
      .last()
      .select(activity2);
    //select first day for occurence
    cy.get('[data-test="activityDayOccurence"]')
      .children()
      .last()
      .select("Friday");
    //starting hour of second activity -> set 08:30
    cy.get('[data-test="timerPickerStart"]')
      .children()
      .get(".hours>li[data-key='08']")
      .eq(2)
      .click({ force: true })
      .get(".minutes>li[data-key='30']")
      .eq(2)
      .click({ force: true });

    cy.get(".routine__modal__type").click();

    //end hour of second activity -> set 12:15
    cy.get('[data-test="timerPickerEnd"]')
      .children()
      .get(".hours>li[data-key='12']")
      .eq(3)
      .click({ force: true })
      .get(".minutes>li[data-key='15']")
      .eq(3)
      .click({ force: true });
    cy.get(".routine__modal__type").click();

    //activate and save routine
    cy.get('[data-test="activateRoutineButton"]').click();

    cy.get('[data-test="activateRoutineButton"]').should(
      "have.class",
      "routine__isActive"
    );

    cy.wait(200);

    cy.get("[data-test='routineSave']").click();

    //reaload and see if routine saved properly
    cy.reload();

    cy.get('[data-test="routinesHolder"]').should("contain", testRoutine);

    cy.get('[data-test="routineShowModal"]').contains(testRoutine).click();

    cy.get("[data-test='textArea']").should("have.value", description);

    cy.get(".rangeValue").should("contain", rangeValue);

    cy.get('[data-test="routineGoBack"]').click();
  });

  it.only("should see if TIMENET displaying activities properly and if timer works as supposed - as stoper", () => {
    cy.visit("http://localhost:8080/Organize");

    const activity1 = "TEST Running";
    const activity2 = "TEST Swimming";

    //See if activity1 is in ordered cells in timeNet and if it is not in any others.
    cy.get('[data-test="Tuesday-7-15"]').should("contain", activity1);
    cy.get('[data-test="Tuesday-15-30"]').should("contain", activity1);

    cy.get('[data-test="Tuesday-7-0"]').should("not.contain", activity1);
    cy.get('[data-test="Tuesday-15-45"]').should("not.contain", activity1);

    //See if activity1 is in ordered cells in timeNet and if it is not in any others.
    cy.get('[data-test="Friday-8-30"]').should("contain", activity2);
    cy.get('[data-test="Friday-12-0"]').should("contain", activity2);

    cy.get('[data-test="Friday-8-15"]').should("not.contain", activity2);
    cy.get('[data-test="Friday-12-15"]').should("not.contain", activity2);
  });
});
