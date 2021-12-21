import store from "@/store";
import api from "@/api";
import routines from "@/store/modules/activities";

function getMockedDataForGetResponse(url) {
  switch (url) {
    case "/routines/":
      return [
        {
          id: "1",
          title: "routine1",
          createdAt: new Date(),
          description: "123",
        },
        {
          id: "2",
          title: "routine2",
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
    case "/routines/":
      return {};
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}
function getMockedDataForDeleteResponse(url) {
  switch (url) {
    case "/routines/3":
      return {};
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}
function getMockedDataForPutResponse(url) {
  switch (url) {
    case "/routines/4":
      return {};
    default:
      throw new Error(`This test doest cover ${url} response`);
  }
}

describe("Routines Store Vuex", () => {
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

  it("adds routine", async () => {
    expect(api.post).not.toHaveBeenCalled();
    await store.dispatch("routines/createRoutine", {
      id: "3",
      title: "routine3",
      description: "test",
    });

    expect(api.post).toHaveBeenLastCalledWith("/routines/", {
      id: "3",
      title: "routine3",
      description: "test",
    });
  });
  it("deletes rutine", async () => {
    expect(api.delete).not.toHaveBeenCalled();
    await store.dispatch("routines/deleteRoutine", {
      id: "3",
    });
    expect(api.delete).toHaveBeenLastCalledWith("/routines/3");
  });
  it("updates routine", async () => {
    expect(api.put).not.toHaveBeenCalled();
    await store.dispatch("routines/updateRoutine", {
      _id: "4",
      title: "routine4",
      description: "test2",
    });
    expect(api.put).toHaveBeenLastCalledWith("/routines/4", {
      _id: "4",
      title: "routine4",
      description: "test2",
    });
  });
});
