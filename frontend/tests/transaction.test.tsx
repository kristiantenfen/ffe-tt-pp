import { render, screen } from "@testing-library/react";
import { TransactionForm } from "../src/components/transactions/TransactionForm";

test("renders button", () => {
  render(<TransactionForm />);

  expect(screen.getByText("Create new Transaction")).toHaveTextContent(
    "Create new Transaction",
  );
});
