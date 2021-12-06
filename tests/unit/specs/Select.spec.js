import { mount, createLocalVue } from "@vue/test-utils"; //test-utils
import Select from "@/components/Select.vue";

describe("should add activity, see if it appears and if input is cleared after submit", () => {
  it("add activity", () => {
    const wrapper = mount(Select);

    wrapper
      .get("[data-test='customSelectButton']")
      .trigger('click')

    expect(wrapper.findAll("[data-test='customSelectButton']")).toBe();
  });
});