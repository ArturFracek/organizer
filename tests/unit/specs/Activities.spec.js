import { shallowMount, mount, createLocalVue } from "@vue/test-utils"; //test-utils
import Vuex from "vuex";
import _cloneDeep from "lodash/cloneDeep";
import Activities from "@/components/Activities.vue";
import activitiesModule from "../../../client/src/store/modules/activities";
import activities from "../../../client/src/store/modules/activities";

const localVue = createLocalVue();
localVue.use(Vuex);

document.body.setAttribute("data-app", true);

describe("Activities", () => {
  let state;
  let actions;
  let store;

  beforeEach(() => {
    state = {
      // eslint-disable-next-line no-undef
      activities: [
        {
          id: 1,
          title: "A",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "B",
          createdAt: new Date(),
        },
      ],
    };
    actions = {
      fetchAllActivities: jest.fn(),
      updateActivity: jest.fn(),
      removeActivity: jest.fn(),
      createActivity: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        activities: {
          namespaced: true,
          getters: activitiesModule.getters,
          state,
          actions,
        },
      },
    });
  });

  it("fetches activities on mounted", () => {
    expect(actions.fetchAllActivities).not.toHaveBeenCalled();
    const wrapper = mount(Activities, {
      localVue,
      store,
    });
    expect(actions.fetchAllActivities).toHaveBeenCalledTimes(1);
  });
  it("renders activities titles", () => {
    const wrapper = mount(Activities, {
      localVue,
      store,
    });
    let titles = wrapper
      .findAll("[data-test='activityShowModal']")
      .wrappers.map((a) => a.text());
    expect(titles).toEqual(["A", "B"]);
    // expect(actions.fetchAllActivities).toHaveBeenCalledTimes(1);
  });
  it("creates activity on input trigger", async () => {
    expect(actions.createActivity).not.toHaveBeenCalled();
    const wrapper = mount(Activities, {
      localVue,
      store,
    });

    const activityInput = wrapper.find('[data-test="activityInputAdd"]');

    await activityInput.setValue("C");
    await activityInput.trigger('$emit')
    console.log(
      wrapper
        .findAll("[data-test='activityShowModal']")
        .wrappers.map((a) => a.text())
    );
    expect(actions.createActivity).toHaveBeenCalledTimes(1);
  });
});

// const localVue = createLocalVue();
// const url = "http://localhost:3000/api/activities";
// let wrapper;
// const error = {
//   response: {
//     data: {
//       error: "Try again",
//     },
//   },
// };
// const mockRouter = {
//   push: jest.fn(),
// };
// const mockStore = {
//   dispatch: jest.fn(),
//   getters: {
//     activities: {
//       title: "Activity1",
//       priority: 5,
//       createdAt: new Date(),
//       duration: 0,
//       createdBy: "testid123",
//     },
//   },
// };

// document.body.setAttribute("data-app", true);
// jest.mock("axios");
// jest.spyOn(Object.getPrototypeOf(window.localStorage), "clear");

// beforeEach(() => {
//   wrapper = mount(Activities, {
//     localVue,
//     mocks: {
//       $router: mockRouter,
//       $store: mockStore,
//     },
//     data() {
//       return {
//         deleteError: "",
//         deleteUserModal: false,
//       };
//     },
//   });
// });

// afterEach(() => {
//   jest.resetAllMocks();
//   wrapper.destroy();
// });

// describe("test", () => {
//   it.only("test", () => {

//     wrapper
//       .get('[data-test="activityInputAdd"]')
//       .setValue("Activity1")
//       .trigger("submit");

//     expect(wrapper.findAll("[data-test=activityShowModal]")).toHaveLength(1);
//   });
// });
