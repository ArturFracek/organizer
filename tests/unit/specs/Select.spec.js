import { mount } from "@vue/test-utils";
import Select from "@/components/Select.vue";

const options = [
  { label: "Label-A", key: "key-A", altKey: "alt-A" },
  { label: "Label-B", key: "key-B", altKey: "alt-B" },
  { label: "Label-C", key: "key-C", altKey: "alt-C" },
];

describe("Select", () => {
  it("renders available options based on optionLabelKey props", () => {
    let wrapper = mount(Select, {
      propsData: {
        options,
        optionLabelKey: "label",
      },
    });
    let renderedTexts = wrapper.findAll("option").wrappers.map((w) => w.text());
    expect(renderedTexts).toEqual(options.map((o) => o.label));

    wrapper = mount(Select, {
      propsData: {
        options,
        optionLabelKey: "altKey",
      },
    });
    renderedTexts = wrapper.findAll("option").wrappers.map((w) => w.text());
    expect(renderedTexts).toEqual(options.map((o) => o.altKey));
  });

  it("renders current value", () => {
    const wrapper = mount(Select, {
      propsData: {
        options,
        optionValueKey: "key",
        optionLabelKey: "label",
        value: "key-C",
      },
    });

    expect(wrapper.vm.valueIndex).toBe(2);
  });

  it("emits input when slecting value", async () => {
    const wrapper = mount(Select, {
      propsData: {
        options,
        optionValueKey: "key",
        optionLabelKey: "label",
        value: "key-C",
      },
    });
    expect(Object.keys(wrapper.emitted()).length).toBe(0);

    wrapper.findAll("option").at(1).trigger("click");
    await wrapper.vm.$nextTick();

    expect(Object.keys(wrapper.emitted()).length).toBe(1);
    expect(wrapper.emitted().input[0][0]).toBe("key-B");
  });
});
