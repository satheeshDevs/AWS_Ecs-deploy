const request = require("supertest");
const app = require("../server");

describe("API Tests", () => {
  test("GET /health should return 200", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });

  test("GET /api/hello should return message", async () => {
    const response = await request(app).get("/api/hello");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Hello from ECS!");
  });

  test("GET /api/users should return users", async () => {
    const response = await request(app).get("/api/users");

    expect(response.statusCode).toBe(200);
    expect(response.body.users).toHaveLength(2);
  });
});