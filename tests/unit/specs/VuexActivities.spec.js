import store from "@/store";
import api from "@/api";

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
  beforeAll(() => {
    temp.get = api.get;
    temp.post = api.post;
    api.post = function post(url, data) {
      return Promise.resolve({
        data: getMockedDataForPostResponse(url),
      });
    };
    api.get = function get(url) {
      return Promise.resolve({
        data: getMockedDataForGetResponse(url),
      });
    };
  });
  // eslint-disable-next-line no-undef
  afterAll(() => {
    api.post = temp.post;
    api.get = temp.get;
  });

  it("adds activity", async () => {
    expect(store.getters["activities/activities"].length).toBe(0);
    await store.dispatch("activities/createActivity", {
      id: "3",
      title: "activity3",
      createdAt: new Date(),
      description: "test",
    });
    console.log(state.activities);
    expect(store.getters["activities/activities"].length).toBe(3);
    expect(store.state);
  });
});
