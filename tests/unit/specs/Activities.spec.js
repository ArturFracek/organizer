import { mount, createLocalVue } from "@vue/test-utils"; //test-utils
import Vuex from "vuex";
import Activities from "@/components/Activities.vue";
import axios from "axios";
import {jest} from '@jest/globals'

const localVue = createLocalVue();
const url = "http://localhost:3000/api/activities";
let wrapper;
const error = {
  response: {
    data: {
      error: "Try again",
    },
  },
};
const mockRouter = {
  push: jest.fn(),
};
const mockStore = {
  dispatch: jest.fn(),
  getters: {
    activities: {
      title: "Activity1",
      priority: 5,
      createdAt: new Date(),
      duration: 0,
      createdBy: "testid123",
    },
  },
};

document.body.setAttribute("data-app", true);
jest.mock("axios");
jest.spyOn(Object.getPrototypeOf(window.localStorage), "clear");

beforeEach(() => {
  wrapper = mount(Activities, {
    localVue,
    mocks: {
      $router: mockRouter,
      $store: mockStore,
    },
    data() {
      return {
        deleteError: "",
        deleteUserModal: false,
      };
    },
  });
});

afterEach(() => {
  jest.resetAllMocks();
  wrapper.destroy();
});

describe("test", () => {
  it("test", () => {

    wrapper
      .get('[data-test="activityInputAdd"]')
      .setValue("Activity1")
      .trigger("submit");

    expect(wrapper.findAll("[data-test=activityShowModal]")).toHaveLength(1);
  });
});
