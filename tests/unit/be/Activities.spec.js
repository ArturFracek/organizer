import request from "supertest";
import server from "@root/routes/server";
import { setupDb, createUserAndLogin } from "../setupDb";
import { response } from "express";

function createActvitiy(token, activity) {
  return request(server)
    .post("/api/activities")
    .set("Authorization", token)
    .send(activity)
    .expect(201);
}

function updateActivity(token, _id, activity) {
  return request(server)
    .put(`/api/activities/${_id}`)
    .set("Authorization", token)
    .send(activity)
    .expect(200);
}


setupDb();
describe("/api/activities", () => {
  describe("POST AND GET", () => {
    it("should return 401 for non-auth user", async () => {
      await request(server).get("/api/activities").expect(401);
    });

    it("should return 401 for wrong token", async () => {
      await request(server)
        .get("/api/activities")
        .set("Authorization", "abc")
        .expect(401);
    });

    it("returns empty array for empty db", async () => {
      const token = await createUserAndLogin();
      const { body } = await request(server)
        .get("/api/activities")
        .set("Authorization", token)
        .expect(200);
      expect(body).toEqual([]);
    });

    it("returns activities", async () => {
      const token = await createUserAndLogin();
      await createActvitiy(token, { title: "A" });
      await createActvitiy(token, { title: "B" });
      const { body } = await request(server)
        .get("/api/activities")
        .set("Authorization", token)
        .expect(200);
      expect(response.status).toBeTruthy();

      expect(typeof body).toBe("object");
      expect(body).toEqual([
        expect.objectContaining({
          _id: expect.any(String),
          title: "A",
        }),
        expect.objectContaining({
          _id: expect.any(String),
          title: "B",
        }),
      ]);
    });
  });

  describe("POST AND PUT", () => {
    it("updates activity", async () => {
      const token = await createUserAndLogin();
      const activity1 = await createActvitiy(token, { title: "Activity1" });
      const activity2 = await createActvitiy(token, { title: "Activity2" });
      const { body } = await request(server)
        .get("/api/activities")
        .set("Authorization", token)
        .expect(200);
      expect(response.status).toBeTruthy();

      const id = body[0]._id;
      await updateActivity(token, id, { title: "Activity123", bla: "bla" });
      const { body: bodyAfterUpdate } = await request(server)
        .get("/api/activities")
        .set("Authorization", token)
        .expect(200);
      expect(typeof bodyAfterUpdate).toBe("object");
      expect(bodyAfterUpdate[0]._id).toEqual(id);
      expect(bodyAfterUpdate[0].title).toEqual("Activity123");
      expect(bodyAfterUpdate[0]).not.toHaveProperty("bla");
      expect(bodyAfterUpdate[1]).toEqual(body[1]);
    });
  });
});
