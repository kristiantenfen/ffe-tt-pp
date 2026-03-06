import transactionRouter from "./routes/transactions";
import cors from "cors";

import express, { Response } from "express";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res: Response) => {
  res.send("TT/PP application");
});

app.use("/transactions", transactionRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
