/* eslint-disable no-undef */
import { shallowMount, mount, createLocalVue } from "@vue/test-utils"; //test-utils
import Vuex from "vuex";
import _cloneDeep from "lodash/cloneDeep";
import Goals from "@/components/Goals.vue";
import goalsModule from "@/store/modules/goals";

const localVue = createLocalVue();
localVue.use(Vuex);

document.body.setAttribute("data-app", true);

describe("Goals", () => {
  let state;
  let actions;
  let store;

  beforeEach(() => {
    state = {
      // eslint-disable-next-line no-undef
      goals: [
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
      fetchAllGoals: jest.fn(),
      updateGoal: jest.fn(),
      deleteGoal: jest.fn(),
      createGoal: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        goals: {
          namespaced: true,
          getters: goalsModule.getters,
          state,
          actions,
        },
      },
    });
  });

  it("fetches goals on mounted", () => {
    expect(actions.fetchAllGoals).not.toHaveBeenCalled();
    const wrapper = mount(Goals, {
      localVue,
      store,
    });
    expect(actions.fetchAllGoals).toHaveBeenCalledTimes(1);
  });
  it("renders goals titles", () => {
    const wrapper = mount(Goals, {
      localVue,
      store,
    });
    let titles = wrapper
      .findAll("[data-test='goalModalButton']")
      .wrappers.map((a) => a.text());
    expect(titles).toEqual(["A", "B"]);
  });
  it("creates goal on input trigger", async () => {
    const wrapper = mount(Goals, {
      localVue,
      store,
    });

    const goalInput = wrapper.find('[data-test="goalInputAdd"]');

    expect(actions.createGoal).not.toHaveBeenCalled();

    await goalInput.setValue("C");
    expect(goalInput.text()).toBe("");

    await goalInput.trigger("keyup.enter");

    expect(actions.createGoal).toHaveBeenCalledTimes(1);
    expect(actions.createGoal).toHaveBeenLastCalledWith(expect.any(Object), {
      title: "C",
    });
  });
  it("updates goal on action-update", async () => {
    const wrapper = mount(Goals, {
      localVue,
      store,
    });

    expect(actions.updateGoal).not.toHaveBeenCalled();

    await wrapper.vm.updateGoal({ title: "D", description: "test" });

    await wrapper.vm.$nextTick();
    expect(actions.updateGoal).toHaveBeenCalledTimes(1);
    expect(actions.updateGoal).toHaveBeenLastCalledWith(expect.any(Object), {
      title: "D",
      description: "test",
    });
  });
  it("properly uses delete action", async () => {
    const wrapper = mount(Goals, {
      localVue,
      store,
    });

    expect(actions.deleteGoal).not.toHaveBeenCalled();

    await wrapper.vm.deleteGoal({ id: "123456abcd" });

    await wrapper.vm.$nextTick();

    expect(actions.deleteGoal).toHaveBeenCalledTimes(1);
    expect(actions.deleteGoal).toHaveBeenLastCalledWith(expect.any(Object), {
      id: "123456abcd",
    });
  });
});
