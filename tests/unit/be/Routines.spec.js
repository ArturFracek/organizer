import request from "supertest";
import server from "@root/routes/server";
import { setupDb, createUserAndLogin } from "../setupDb";
import { response } from "express";

function createRoutine(token, routine) {
  return request(server)
    .post("/api/routines")
    .set("Authorization", token)
    .send(routine)
    .expect(201);
}

function updateRoutine(token, _id, routine) {
  return request(server)
    .put(`/api/routines/${_id}`)
    .set("Authorization", token)
    .send(routine)
    .expect(200);
}

function deleteRoutine(token, _id, routine) {
  return request(server)
    .delete(`/api/routines/${_id}`)
    .set("Authorization", token)
    .send(routine)
    .expect(200);
}
setupDb();
describe("/api/routines", () => {
  describe("POST AND GET", () => {
    it("should return 401 for non-auth user", async () => {
      await request(server).get("/api/routines").expect(401);
    });

    it("should return 401 for wrong token", async () => {
      await request(server)
        .get("/api/routines")
        .set("Authorization", "abc")
        .expect(401);
    });

    it("returns empty array for empty db", async () => {
      const token = await createUserAndLogin();
      const { body } = await request(server)
        .get("/api/routines")
        .set("Authorization", token)
        .expect(200);
      expect(body).toEqual([]);
    });

    it("returns routines", async () => {
      const token = await createUserAndLogin();
      await createRoutine(token, { title: "A" });
      await createRoutine(token, { title: "B" });
      const { body } = await request(server)
        .get("/api/routines")
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
    it("updates routine", async () => {
      const token = await createUserAndLogin();
      const routine1 = await createRoutine(token, { title: "routine1" });
      const routine2 = await createRoutine(token, { title: "routine2" });
      const { body } = await request(server)
        .get("/api/routines")
        .set("Authorization", token)
        .expect(200);
      expect(response.status).toBeTruthy();

      const id = body[0]._id;
      await updateRoutine(token, id, { title: "routine123", bla: "bla" });
      const { body: bodyAfterUpdate } = await request(server)
        .get("/api/routines")
        .set("Authorization", token)
        .expect(200);
      expect(typeof bodyAfterUpdate).toBe("object");
      expect(bodyAfterUpdate[0]._id).toEqual(id);
      expect(bodyAfterUpdate[0].title).toEqual("routine123");
      expect(bodyAfterUpdate[0]).not.toHaveProperty("bla");
      expect(bodyAfterUpdate[1]).toEqual(body[1]);
    });
  });
  describe("POST AND DELETE", () => {
    it("deletes routine", async () => {
      const token = await createUserAndLogin();
      const routine1 = await createRoutine(token, { title: "routine1" });
      const routine2 = await createRoutine(token, { title: "routine2" });
      const { body } = await request(server)
        .get("/api/routines")
        .set("Authorization", token)
        .expect(200);
      expect(response.status).toBeTruthy();

      const id = body[0]._id;
      await deleteRoutine(token, id, { title: "routine1" });
      const { body: bodyAfterUpdate } = await request(server)
        .get("/api/routines")
        .set("Authorization", token)
        .expect(200);
      expect(typeof bodyAfterUpdate).toBe("object");
      expect(bodyAfterUpdate).toHaveLength(1);
      expect(bodyAfterUpdate[0].title).toEqual("routine2");
      expect(bodyAfterUpdate[0]).not.toHaveProperty("bla");
      expect(bodyAfterUpdate[0]).toEqual(body[1]);
    });
  });
});
