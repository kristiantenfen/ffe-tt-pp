import request from "supertest";
import app from "../src/app";

describe("Transaction Test", () => {
  const transaction = {
    ammount: 200,
    description: "Transanction TT",
  };

  it("Add transactions", async () => {
    await request(app)
      .post("/transactions")
      .send(transaction)
      .expect(201, transaction);
  });
});
