import store from "@/store";
import api from "@/api";
import goals from "@/store/modules/goals";

function getMockedDataForGetResponse(url) {
  switch (url) {
    case "/goals/":
      return [
        {
          id: "1",
          title: "goal1",
          createdAt: new Date(),
          description: "123",
        },
        {
          id: "2",
          title: "goal2",
          createdAt: new Date(),
          description: "456",
        },
      ];
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}

function getMockedDataForPostResponse(url) {
  switch (url) {
    case "/goals/":
      return {};
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}
function getMockedDataForDeleteResponse(url) {
  switch (url) {
    case "/goals/3":
      return {};
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}
function getMockedDataForPutResponse(url) {
  switch (url) {
    case "/goals/4":
      return {};
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}

describe("goals Store Vuex", () => {
  const temp = {};
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    temp.get = api.get;
    temp.post = api.post;
    temp.delete = api.delete;
    temp.put = api.put;

    // eslint-disable-next-line no-undef
    api.post = jest.fn(function post(url, data) {
      return Promise.resolve({
        data: getMockedDataForPostResponse(url),
      });
    });
    // eslint-disable-next-line no-undef
    api.get = jest.fn(function get(url) {
      return Promise.resolve({
        data: getMockedDataForGetResponse(url),
      });
    });
    // eslint-disable-next-line no-undef
    api.delete = jest.fn(function deletes(url, id) {
      return Promise.resolve({
        data: getMockedDataForDeleteResponse(url),
      });
    });
    // eslint-disable-next-line no-undef
    api.put = jest.fn(function put(url, data) {
      return Promise.resolve({
        data: getMockedDataForPutResponse(url),
      });
    });
  });
  // eslint-disable-next-line no-undef
  afterAll(() => {
    api.post = temp.post;
    api.get = temp.get;
    api.delete = temp.delete;
    api.put = temp.put;
  });

  it("adds goal", async () => {
    expect(api.post).not.toHaveBeenCalled();
    await store.dispatch("goals/createGoal", {
      id: "3",
      title: "goal3",
      description: "test",
    });

    expect(api.post).toHaveBeenLastCalledWith("/goals/", {
      id: "3",
      title: "goal3",
      description: "test",
    });
  });
  it("deletes goal", async () => {
    expect(api.delete).not.toHaveBeenCalled();
    await store.dispatch("goals/deleteGoal", {
      id: "3",
    });
    expect(api.delete).toHaveBeenLastCalledWith("/goals/3");
  });
  it("updates goal", async () => {
    expect(api.put).not.toHaveBeenCalled();
    await store.dispatch("goals/updateGoal", {
      _id: "4",
      title: "goal4",
      description: "test2",
    });
    expect(api.put).toHaveBeenLastCalledWith("/goals/4", {
      _id: "4",
      title: "goal4",
      description: "test2",
    });
  });
});
