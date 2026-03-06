import { Router } from "express";

const transactionRouter = Router();

type Transaction = {
  ammount: number;
  description: string;
};

const transactions: Transaction[] = [];

transactionRouter.get("/", (req, res) => {
  res.status(200).send(transactions);
});

transactionRouter.post("/", async (req, res) => {
  const { body } = await req.body;
  const transaction = JSON.parse(body) as Transaction;

  if (!transaction.ammount) res.status(400).send("Ammount is riquired");
  if (!transaction.description) res.status(400).send("Ammount is riquired");
  try {
    transactions.push(transaction);
  } catch (err) {
    const status =
      err instanceof Error && "status" in err ? (err as any).status : 500;
    const message = err instanceof Error ? err.message : "Something went wrong";
    res.status(status).send(message);
  }
  res.status(201).send(transaction);
});

export default transactionRouter;
