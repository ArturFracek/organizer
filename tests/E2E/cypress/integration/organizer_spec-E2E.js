describe("Login, add goal and customize it", () => {
  it("should allow people to sign up", () => {
    cy.visit("http://localhost:9090/Register");

    cy.get("#email").type("test@email.com");

    const password = "abc123";

    cy.get("#name").type("Gołota");

    cy.get("#username").type("Andrzej", { force: true });

    cy.get("#password").type(password);

    cy.get("#confirm_password").type(password, { force: true });

    cy.get("input[type='submit']").click();
  });

  it("should visit login page, and log in and check if we are redirected to profile page", () => {
    cy.visit("http://localhost:9090/Login");

    const goal = "Test Goal";
    const description =
      "This is test description. Testing if description text area works fine. Now we made some test goal so we can test whole process in app";
    const rangeValue = 10;
    const password = "abc123";

    cy.get("[data-test='loginUsername']").type("Andrzej");

    cy.get("[data-test='loginPassword']").type(password);

    cy.get("[data-test='loginLogin']").click();

    cy.url().should("include", "http://localhost:9090/profile");

    cy.get("[data-test='goalInputAdd']").type(goal);

    cy.get("[data-test='goalButtonAdd']").should("be.visible").click();

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

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);

    cy.get("[data-test='goalModalButton']").contains(goalToDelete).click();

    cy.get("[data-test='goalModal']")
      .contains(goalToDelete)
      .should("be.visible");

    cy.get(".bi-trash[type='button']").click();

    cy.reload();

    cy.get("[data-test='goalsHolder']").should("contain", goal);

    cy.get("[data-test='goalsHolder']").should("not.contain", goalToDelete);
  });

  it("Should visit About Organizing page via nav, and check if links works", () => {
    cy.visit("http://localhost:9090/");

    cy.url().should("include", "http://localhost:9090/");

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
    const activity1 = "TEST Running";
    const description1 = "111This is first test activity111";
    const rangeValue1 = 1;
    const activity2 = "TEST Swimming";
    const description2 = "222 Describing second activity222";
    const rangeValue2 = 2;
    const activity3 = "TEST Chess";
    const description3 = "3333          33333";
    const rangeValue3 = 3;
    const password = "abc123";

    cy.visit("http://localhost:9090/Login");

    cy.get("[data-test='loginUsername']").type("Andrzej");

    cy.get("[data-test='loginPassword']").type(password);

    cy.get("[data-test='loginLogin']").click();

    cy.get("[data-test='organize']").click();

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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);

    cy.get('[data-test="activityShowModal"]')
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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);
    cy.get('[data-test="activityShowModal"]')
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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);
    cy.get('[data-test="activityShowModal"]')
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
    cy.visit("http://localhost:9090/Organize");

    const activity1 = "TEST Running";
    const activity2 = "TEST Swimming";
    const password = "abc123";

    cy.visit("http://localhost:9090/Login");

    cy.get("[data-test='loginUsername']").type("Andrzej");

    cy.get("[data-test='loginPassword']").type(password);

    cy.get("[data-test='loginLogin']").click();

    cy.get("[data-test='organize']").click();

    //Create and customize first Activity

    cy.get("[data-test='activityInputAdd']")
      .type(activity1)
      .get('[data-test="activityButtonAdd"]')
      .should("be.visible")
      .click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);
    cy.get('[data-test="activityShowModal"]')
      .last()
      .contains(activity1)
      .should("be.visible");
    //Create and customize second Activity

    cy.get("[data-test='activityInputAdd']")
      .type(activity2)
      .get('[data-test="activityButtonAdd"]')
      .should("be.visible")
      .click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);
    cy.get('[data-test="activityShowModal"]')
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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
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

  it("Should see if TIMENET displaying activities properly and if timer works as supposed - as stoper", () => {
    cy.visit("http://localhost:9090/Organize");

    const activity1 = "TEST Running";
    const activity2 = "TEST Swimming";
    const password = "abc123";

    cy.visit("http://localhost:9090/Login");

    cy.get("[data-test='loginUsername']").type("Andrzej");

    cy.get("[data-test='loginPassword']").type(password);

    cy.get("[data-test='loginLogin']").click();

    cy.get("[data-test='organize']").click();

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

    //trigger timer button for activity1 and stop
    cy.get('[data-test="netTimeDisplay"]').should(
      "contain",
      "Select Activity Below"
    );

    cy.get('[data-test="Tuesday-7-15"]').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.get('[data-test="netTimeDisplay"]').should(
      "have.class",
      "net__activityTimeDisplayActive"
    );

    cy.get('[data-test="Tuesday-7-15"]').click();

    cy.get('[data-test="netTimeDisplay"]').should(
      "not.have.class",
      "net__activityTimeDisplayActive"
    );

    //toggle timer for activity2 and stop
    cy.get('[data-test="netTimeDisplay"]').should(
      "contain",
      "Select Activity Below"
    );

    cy.get('[data-test="Friday-8-30"]').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.get('[data-test="netTimeDisplay"]').should(
      "have.class",
      "net__activityTimeDisplayActive"
    );

    cy.get('[data-test="Friday-8-30"]').click();

    cy.get('[data-test="netTimeDisplay"]').should(
      "not.have.class",
      "net__activityTimeDisplayActive"
    );
  });

  it("Should visit profile and see if values are correct for each activity in Time Statistics", () => {
    cy.visit("http://localhost:9090/Profile");

    const password = "abc123";
    const activity1 = "TEST Running";
    const activity2 = "TEST Swimming";

    cy.get("[data-test='loginUsername']").type("Andrzej");

    cy.get("[data-test='loginPassword']").type(password);

    cy.get("[data-test='loginLogin']").click();

    cy.get('[data-test="activityTitleTimeStatistic"]')
      .first()
      .should("contain", activity1);

    cy.get('[data-test="activityTitleTimeStatistic"]')
      .last()
      .should("contain", activity2);

    cy.get('[data-test="activityDuration"]').first().should("be.visible");

    cy.get('[data-test="activityDuration"]').last().should("be.visible");
  });

  it("Should clear everything that was made during the tests and see if deleteting works as supossed", () => {
    cy.visit("http://localhost:9090/Profile");

    const password = "abc123";
    const activity1 = "TEST Running";
    const activity2 = "TEST Swimming";
    const testRoutine = "Test Routine";

    cy.get("[data-test='loginUsername']").type("Andrzej");

    cy.get("[data-test='loginPassword']").type(password);

    cy.get("[data-test='loginLogin']").click();

    cy.get('[data-test="goalModalButton"]').contains("Test Goal").click();

    cy.get(".bi-trash[type='button']").click();

    cy.reload();

    cy.get("[data-test='goalsHolder']").should("not.contain", "Test Goal");

    cy.visit("http://localhost:9090/Organize");

    cy.get('[data-test="activityShowModal"]').contains(activity1).click();

    cy.get(".bi-trash[type='button']").click();

    cy.get('[data-test="activityShowModal"]').contains(activity2).click();

    cy.get(".bi-trash[type='button']").click();

    cy.get('[data-test="routineShowModal"]').contains(testRoutine).click();

    cy.get(".bi-trash[type='button']").click();

    cy.reload();

    cy.get("[data-test='activitiesSection']").should("not.contain", activity1);

    cy.get("[data-test='activitiesSection']").should("not.contain", activity2);

    cy.get("[data-test='routinesHolder']").should("not.contain", testRoutine);
  });
});
