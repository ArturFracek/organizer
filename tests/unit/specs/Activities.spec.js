import { mount, createLocalVue } from "@vue/test-utils"; //test-utils
import Vuex from "vuex";
import Activities from "@/components/Activities.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("should add activity, see if it appears and if input is cleared after submit", () => {
  it("add activity", () => {
    const store = new Vuex.Store({});
    const wrapper = mount(Activities, {
      mocks: {},
    });

    wrapper
      .get('[data-test="activityInputAdd"]')
      .setValue("Activity1")
      .trigger("submit");

    expect(wrapper.findAll("[data-test=activityShowModal]")).toHaveLength(1);
  });
});