import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Vuetify from "vuetify";
import Goals from "../../../client/src/components/Goals.vue";
import { jest } from "@jest/globals";
import { cloneDeep } from "lodash";
import Vue from "vue";

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.store(cloneDeep({}));

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
describe("test if goals are adding and displaying properly", () => {
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
    test("setup correctly", () => {
      expect(true).toBe(true);
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
    wrapper.destroy();
  });

  jest.mock("axios");
});
