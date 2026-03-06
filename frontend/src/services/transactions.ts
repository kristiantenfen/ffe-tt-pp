import api from "../network/api";
import type { Transaction } from "../types";

export class TransactionService {
  async getTransactions(): Promise<Transaction[]> {
    const response = await api.get("/api/transactions");
    if (!response.status) {
      throw new Error("Failed to fetch transactions");
    }
    return await response.data;
  }

  async createTransaction(transactionData: Transaction): Promise<Transaction> {
    const response = await api.post("/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    });
    if (!response.status) {
      throw new Error("Failed to create transaction");
    }
    return await response.data;
  }
}
