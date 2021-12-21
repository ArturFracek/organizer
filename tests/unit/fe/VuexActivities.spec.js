import store from "@/store";
import api from "@/api";
import activities from "@/store/modules/activities";

function getMockedDataForGetResponse(url) {
  switch (url) {
    case "/activities/":
      return [
        {
          id: "1",
          title: "activity1",
          createdAt: new Date(),
          description: "123",
        },
        {
          id: "2",
          title: "activity2",
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
    case "/activities/":
      return {};
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}
function getMockedDataForDeleteResponse(url) {
  switch (url) {
    case "/activities/3":
      return {};
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}
function getMockedDataForPutResponse(url) {
  switch (url) {
    case "/activities/4":
      return {};
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}

describe("Activities Store Vuex", () => {
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

  it("adds activity", async () => {
    expect(api.post).not.toHaveBeenCalled();
    await store.dispatch("activities/createActivity", {
      id: "3",
      title: "activity3",
      description: "test",
    });

    expect(api.post).toHaveBeenLastCalledWith("/activities/", {
      id: "3",
      title: "activity3",
      description: "test",
    });
  });
  it("deletes activity", async () => {
    expect(api.delete).not.toHaveBeenCalled();
    await store.dispatch("activities/deleteActivity", {
      id: "3",
    });
    expect(api.delete).toHaveBeenLastCalledWith("/activities/3");
  });
  it("updates activity", async () => {
    expect(api.put).not.toHaveBeenCalled();
    await store.dispatch("activities/updateActivity", {
      _id: "4",
      title: "activity4",
      description: "test2",
    });
    expect(api.put).toHaveBeenLastCalledWith("/activities/4", {
      _id: "4",
      title: "activity4",
      description: "test2",
    });
  });
});
