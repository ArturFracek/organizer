/* eslint-disable no-undef */
import { shallowMount, mount, createLocalVue } from "@vue/test-utils"; //test-utils
import Vuex from "vuex";
import _cloneDeep from "lodash/cloneDeep";
import Routines from "@/components/Routines.vue";
import routinesModule from "../../../client/src/store/modules/routines";
import routines from "../../../client/src/store/modules/routines";

const localVue = createLocalVue();
localVue.use(Vuex);

document.body.setAttribute("data-app", true);

describe("Routines", () => {
  let state;
  let actions;
  let store;

  beforeEach(() => {
    state = {
      // eslint-disable-next-line no-undef
      routines: [
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
      fetchAllRoutines: jest.fn(),
      updateRoutine: jest.fn(),
      deleteRoutine: jest.fn(),
      createRoutine: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        routines: {
          namespaced: true,
          getters: routinesModule.getters,
          state,
          actions,
        },
      },
    });
  });

  it("fetches Routines on mounted", () => {
    expect(actions.fetchAllRoutines).not.toHaveBeenCalled();
    const wrapper = mount(Routines, {
      localVue,
      store,
    });
    expect(actions.fetchAllRoutines).toHaveBeenCalledTimes(1);
  });
  it("renders Routines titles", () => {
    const wrapper = mount(Routines, {
      localVue,
      store,
    });
    let titles = wrapper
      .findAll("[data-test='routineShowModal']")
      .wrappers.map((a) => a.text());
    expect(titles).toEqual(["A", "B"]);

  });
  it("creates routine on input trigger", async () => {
    const wrapper = mount(Routines, {
      localVue,
      store,
    });

    const routineInput = wrapper.find('[data-test="routinesInputAdd"]');

    expect(actions.createRoutine).not.toHaveBeenCalled();

    await routineInput.setValue("C");
    expect(routineInput.text()).toBe("");

    await routineInput.trigger("keyup.enter");

    expect(actions.createRoutine).toHaveBeenCalledTimes(1);
    expect(actions.createRoutine).toHaveBeenLastCalledWith(expect.any(Object), {
      title: "C",
    });
  });
  it("updates routine on action-update", async () => {
    const wrapper = mount(Routines, {
      localVue,
      store,
    });

    expect(actions.updateRoutine).not.toHaveBeenCalled();

    await wrapper.vm.updateRoutine({
      title: "D",
      description: "test",
      priority: 9,
    });

    await wrapper.vm.$nextTick();
    expect(actions.updateRoutine).toHaveBeenCalledTimes(1);
    expect(actions.updateRoutine).toHaveBeenLastCalledWith(expect.any(Object), {
      title: "D",
      description: "test",
      priority: 9,
    });
  });
  it("properly uses delete action", async () => {
    const wrapper = mount(Routines, {
      localVue,
      store,
    });

    expect(actions.deleteRoutine).not.toHaveBeenCalled();

    await wrapper.vm.deleteRoutine({ id: "123456abcd" });

    await wrapper.vm.$nextTick();

    expect(actions.deleteRoutine).toHaveBeenCalledTimes(1);
    expect(actions.deleteRoutine).toHaveBeenLastCalledWith(expect.any(Object), {
      id: "123456abcd",
    });
  });
});
