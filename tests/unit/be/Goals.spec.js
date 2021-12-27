import request from "supertest";
import server from "@root/routes/server";
import { setupDb, createUserAndLogin } from "../setupDb";
import { response } from "express";

function createGoal(token, goal) {
  return request(server)
    .post("/api/goals")
    .set("Authorization", token)
    .send(goal)
    .expect(201);
}

function updateGoal(token, _id, goal) {
  return request(server)
    .put(`/api/goals/${_id}`)
    .set("Authorization", token)
    .send(goal)
    .expect(200);
}

function deleteGoal(token, _id, goal) {
  return request(server)
    .delete(`/api/goals/${_id}`)
    .set("Authorization", token)
    .send(goal)
    .expect(200);
}
setupDb();
describe("/api/goals", () => {
  describe("POST AND GET", () => {
    it("should return 401 for non-auth user", async () => {
      await request(server).get("/api/goals").expect(401);
    });

    it("should return 401 for wrong token", async () => {
      await request(server)
        .get("/api/goals")
        .set("Authorization", "abc")
        .expect(401);
    });

    it("returns empty array for empty db", async () => {
      const token = await createUserAndLogin();
      const { body } = await request(server)
        .get("/api/goals")
        .set("Authorization", token)
        .expect(200);
      expect(body).toEqual([]);
    });

    it("returns goals", async () => {
      const token = await createUserAndLogin();
      await createGoal(token, { title: "A" });
      await createGoal(token, { title: "B" });
      const { body } = await request(server)
        .get("/api/goals")
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
    it("updates goal", async () => {
      const token = await createUserAndLogin();
      const goal1 = await createGoal(token, { title: "goal1", priority: 5 });
      const goal2 = await createGoal(token, { title: "goal2", priority: 2 });
      const { body } = await request(server)
        .get("/api/goals")
        .set("Authorization", token)
        .expect(200);
      expect(response.status).toBeTruthy();

      const id = body[0]._id;
      await updateGoal(token, id, { priority: 7, bla: "bla" });
      const { body: bodyAfterUpdate } = await request(server)
        .get("/api/goals")
        .set("Authorization", token)
        .expect(200);
      expect(typeof bodyAfterUpdate).toBe("object");
      expect(bodyAfterUpdate[0]._id).toEqual(id);
      expect(bodyAfterUpdate[0].priority).toEqual(7);
      expect(bodyAfterUpdate[0]).not.toHaveProperty("bla");
      expect(bodyAfterUpdate[1]).toEqual(body[1]);
    });
  });
  describe("POST AND DELETE", () => {
    it("deletes goal", async () => {
      const token = await createUserAndLogin();
      const goal1 = await createGoal(token, { title: "goal1" });
      const goal2 = await createGoal(token, { title: "goal2" });
      const { body } = await request(server)
        .get("/api/goals")
        .set("Authorization", token)
        .expect(200);
      expect(response.status).toBeTruthy();

      const id = body[0]._id;
      await deleteGoal(token, id, { title: "goal1" });
      const { body: bodyAfterUpdate } = await request(server)
        .get("/api/goals")
        .set("Authorization", token)
        .expect(200);
      expect(typeof bodyAfterUpdate).toBe("object");
      expect(bodyAfterUpdate).toHaveLength(1);
      expect(bodyAfterUpdate[0].title).toEqual("goal2");
      expect(bodyAfterUpdate[0]).not.toHaveProperty("bla");
      expect(bodyAfterUpdate[0]).toEqual(body[1]);
    });
  });
});
