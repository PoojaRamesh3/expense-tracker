import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const onSaveExpenseData = (userEnteredData) => {
    const userData = {
      ...userEnteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(userData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
}
