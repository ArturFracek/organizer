import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Goals from "@/components/Goals";
import { jest } from "@jest/globals";

const localVue = createLocalVue();
const vuetify = new Vuetify();
let wrapper;
// const error = {
//   response: {
//     data: {
//       errors: {
//         message: {
//           msg: "Message error",
//         },
//       },
//     },
//   },
// };
// const response = {
//   data: {
//     data: "testMessageData",
//     success: true,
//   },
// };

beforeEach(() => {
  wrapper = mount(Goals, {
    localVue,
    mocks: {
      $store: {
        getters: {
          goals: "goals/goals",
        },
      },
    },
    vuetify,
    data() {
      return {
        title: "",
        error: "Something went wrong, try again",
      };
    },
  });
});

afterEach(() => {
  jest.resetAllMocks();
  wrapper.destroy();
});

jest.mock("axios");
