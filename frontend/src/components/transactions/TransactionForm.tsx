import { useState } from "react";
import { TransactionService } from "../../services/transactions";
import { TransactionItem } from "./TransactionItem";
import type { Transaction } from "../../types";

export const TransactionForm = () => {
  const [transactionCreated, setTransactionCreated] =
    useState<Transaction | null>(null);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ammount = formData.get("ammount");
    const description = formData.get("description");

    if (!ammount || !description) {
      setError("Ammount and description are required");
      return;
    }
    try {
      setError(null);
      const service = new TransactionService();
      const response = await service.createTransaction({
        ammount: parseInt(ammount as string),
        description: description as string,
      });
      setTransactionCreated(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h3>Create new Transaction</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={handleSubmit}
      >
        <input type="number" name="ammount" placeholder="Ammount" />
        <textarea rows={4} name="description" placeholder="Description" />
        <button type="submit">Submit</button>
      </form>
      {transactionCreated && (
        <>
          <p style={{ color: "green" }}>Transaction created successfully!</p>
          <TransactionItem transaction={transactionCreated} />
        </>
      )}
    </div>
  );
};
