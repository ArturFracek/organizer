import { mount } from "@vue/test-utils";
import Slider from "@/components/Slider.vue";

describe("Slider", () => {
  it("see if default value renders", () => {
    const value = 5;

    let wrapper = mount(Slider, {
      propsData: {
        value,
      },
    });
    const givenValue = wrapper.vm.value;
    expect(givenValue).toEqual(5);
  });
  it("see if classes are added dynamically(different class for value < 6)", () => {
    let value = 5;

    let wrapper = mount(Slider, {
      propsData: {
        value,
      },
    });

    const sliderContainerClasses = wrapper
      .get("[data-test='sliderPriorityDiv']")
      .classes();

    expect(sliderContainerClasses).toContain("slider__priority--LowPriority");
  });
  it("see if other class is loaded as we set high value ( value > 5", () => {
    let value = 6;

    let wrapper = mount(Slider, {
      propsData: {
        value,
      },
    });

    const sliderContainerClasses = wrapper
      .get("[data-test='sliderPriorityDiv']")
      .classes();

    expect(sliderContainerClasses).toContain("slider__priority--HighPriority");
  });
  it("emits input when slecting value", () => {
    let value;

    let wrapper = mount(Slider, {
      propsData: {
        value,
      },
    });
    expect(Object.keys(wrapper.emitted()).length).toBe(0);

    const sliderInput = wrapper.get("[data-test='sliderPrioritySlider']");

    sliderInput.setValue(9)

    expect(Object.keys(wrapper.emitted()).length).toBe(1);
  });
});
it("doesnt change the value if it's bigger then range value", () => {
  let value = 11;

  let wrapper = mount(Slider, {
    propsData: {
      value,
    },
  });

  const sliderInput = wrapper.get("[data-test='sliderPrioritySlider']");

  sliderInput.setValue(9)

  expect(Object.keys(wrapper.emitted()).length).toBe(1);
});
