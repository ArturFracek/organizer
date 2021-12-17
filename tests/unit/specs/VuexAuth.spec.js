import store from "@/store";
import api from "@/api";

function getMockedDataForPostResponse(url) {
  switch (url) {
    case "/users/login":
      return {
        token: "abc",
        user: { _id: "user-abc" },
        success: true,
      };
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}

describe("Vuex", () => {
  describe("mutations", () => {
    it("log in user successfully", () => {
      expect(store.getters.isLoggedIn).toBe(false);
      store.commit("auth_success", "123", {});
      expect(store.getters.isLoggedIn).toBe(true);
      store.commit("logout");
      expect(store.getters.isLoggedIn).toBe(false);
    });
  });

  describe("actions", () => {
    const temp = {};
    // eslint-disable-next-line no-undef
    beforeAll(() => {
      temp.post = api.post;
      api.post = function post(url, data) {
        return Promise.resolve({
          data: getMockedDataForPostResponse(url),
        });
      };
    });
    // eslint-disable-next-line no-undef
    afterAll(() => {
      api.post = temp.post;
    });

    it("log in user successfully", async () => {
      expect(store.getters.isLoggedIn).toBe(false);
      await store.dispatch("login", { username: "123", password: "abc" });
      expect(store.getters.isLoggedIn).toBe(true);
    });
  });
});
