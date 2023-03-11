import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        expenseTitle={props.data[0].title}
        expenseAmount={props.data[0].amount}
        expenseDate={props.data[0].date}
      />
      <ExpenseItem
        expenseTitle={props.data[1].title}
        expenseAmount={props.data[1].amount}
        expenseDate={props.data[1].date}
      />
      <ExpenseItem
        expenseTitle={props.data[2].title}
        expenseAmount={props.data[2].amount}
        expenseDate={props.data[2].date}
      />
      <ExpenseItem
        expenseTitle={props.data[3].title}
        expenseAmount={props.data[3].amount}
        expenseDate={props.data[3].date}
      />
    </div>
  );
}

export default Expenses;
