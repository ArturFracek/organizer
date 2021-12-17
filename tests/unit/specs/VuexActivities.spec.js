import store from "@/store";
import api from "@/api";
import activities from "../../../client/src/store/modules/activities";

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

describe("Activities", () => {
  const temp = {};
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    temp.get = api.get;
    temp.post = api.post;
    api.post = jest.fn(function post(url, data) {
      return Promise.resolve({
        data: getMockedDataForPostResponse(url),
      });
    });
    api.get = jest.fn(function get(url) {
      return Promise.resolve({
        data: getMockedDataForGetResponse(url),
      });
    });
  });
  // eslint-disable-next-line no-undef
  afterAll(() => {
    api.post = temp.post;
    api.get = temp.get;
  });

  it("adds activity", async () => {
    expect(api.post).not.toHaveBeenCalled();
    await store.dispatch("activities/createActivity", {
      id: "3",
      title: "activity3",
      description: "test",
    });
    console.log(api.post)
  
    expect(api.post).toHaveBeenLastCalledWith("/activities/", {
      id: "3",
      title: "activity3",
      description: "test",
    });
  });
});
