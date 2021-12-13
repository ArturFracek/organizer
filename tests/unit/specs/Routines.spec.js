import { mount } from "@vue/test-utils";
import Routines from "../../../client/src/components/Routines.vue";

describe("Routines", () => {
  it("see if input adding works", () => {
    let wrapper = mount(Routines);

    const inputText = wrapper.get('[data-test="routinesInputAdd"]');
    inputText.setValue("newRoutine1");

    console.log(wrapper.find('input[type="text"]'));

    expect(wrapper.find('input[type="text"]').element.value).toBe(
      "newRoutine1"
    );
  });
});
