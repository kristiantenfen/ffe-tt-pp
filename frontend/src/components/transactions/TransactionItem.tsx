import type { Transaction } from "../../types";

type TransactionItemProps = {
  transaction: Transaction;
};
export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "1rem",
      }}
    >
      <span>
        Ammount: <b>{transaction.ammount}</b>
      </span>
      <span>
        Description: <b>{transaction.description}</b>
      </span>
    </div>
  );
};
