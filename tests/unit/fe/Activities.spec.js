/* eslint-disable no-undef */
import { shallowMount, mount, createLocalVue } from "@vue/test-utils"; //test-utils
import Vuex from "vuex";
import _cloneDeep from "lodash/cloneDeep";
import Activities from "@/components/Activities.vue";
import activitiesModule from "@/store/modules/activities";

//Creating new Vue class so the global Vue Class won't get polluted
//It's scoped Vue constructor
const localVue = createLocalVue();
localVue.use(Vuex);

document.body.setAttribute("data-app", true);

describe("Activities", () => {
  let state;
  let actions;
  let store;
  //Given state for each test
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
      //jest.fn() tells those actions to do nothing, as we are
      //not interested in what those do - vuex got its own tests
      fetchAllActivities: jest.fn(),
      updateActivity: jest.fn(),
      deleteActivity: jest.fn(),
      createActivity: jest.fn(),
    };
    //Mocking store with mocked values
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
    //See fetching was not called before mount
    expect(actions.fetchAllActivities).not.toHaveBeenCalled();
    const wrapper = mount(Activities, {
      localVue,
      store,
    });
    //See if action was called on mount
    expect(actions.fetchAllActivities).toHaveBeenCalledTimes(1);
  });
  it("renders activities titles", () => {
    const wrapper = mount(Activities, {
      localVue,
      store,
    });
    //Finds all elements that should have a dynamic title
    //and gather those titles from the store.state -> it also means
    //that getters works
    let titles = wrapper
      .findAll("[data-test='activityShowModal']")
      .wrappers.map((a) => a.text());

    //See if array of titles is equal to existing titles
    expect(titles).toEqual(["A", "B"]);
  });
  it("creates activity on input trigger", async () => {
    const wrapper = mount(Activities, {
      localVue,
      store,
    });
    //Finds main input of activities component
    const activityInput = wrapper.find('[data-test="activityInputAdd"]');
    //See if create vuex action was not called before any action/input/submit
    expect(actions.createActivity).not.toHaveBeenCalled();
    //Setting value of input
    await activityInput.setValue("C");
    //See input text is clear(we sat value, but the input should be clear)
    expect(activityInput.text()).toBe("");
    //Trigger one of activation methods of this input
    await activityInput.trigger("keyup.enter");
    //See if action of creating have been called one time
    expect(actions.createActivity).toHaveBeenCalledTimes(1);
    //See if the value is transferred correctly
    expect(actions.createActivity).toHaveBeenLastCalledWith(
      expect.any(Object),
      { title: "C" }
    );
  });
  it("updates activity on action-update", async () => {
    const wrapper = mount(Activities, {
      localVue,
      store,
    });
    //See if update vuex action was not called before any action/input/submit
    expect(actions.updateActivity).not.toHaveBeenCalled();
    //Calls a vuex action of updating activity with given values
    await wrapper.vm.updateActivity({ title: "D", description: "test" });
    //See if action was called properly
    expect(actions.updateActivity).toHaveBeenCalledTimes(1);
    //See if action was called with correct values
    expect(actions.updateActivity).toHaveBeenLastCalledWith(
      expect.any(Object),
      { title: "D", description: "test" }
    );
  });
  it("properly uses delete action", async () => {
    const wrapper = mount(Activities, {
      localVue,
      store,
    });
    //See if delete vuex action was not called before any action/input/submit
    expect(actions.deleteActivity).not.toHaveBeenCalled();
    //Calls delete action with given value
    await wrapper.vm.deleteActivity({ id: "123456abcd" });
    //See if delete action was called correctly ( once )
    expect(actions.deleteActivity).toHaveBeenCalledTimes(1);
    //See if action was called with transferred values
    expect(actions.deleteActivity).toHaveBeenLastCalledWith(
      expect.any(Object),
      { id: "123456abcd" }
    );
  });
});
