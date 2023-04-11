import "./Styles/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  const filterredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        initialVal={year}
        onYearChangeHandler={yearChangeHandler}
      />
      {filterredExpenses.length === 0 ? (
        <p>No Expense Found!</p>
      ) : (
        filterredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            expenseTitle={item.title}
            expenseAmount={item.amount}
            expenseDate={item.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
