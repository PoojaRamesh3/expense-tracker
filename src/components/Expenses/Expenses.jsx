import "./Styles/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setYear(year);
    console.log("Expense" + +year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChangeHandler={yearChangeHandler} />
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
    </Card>
  );
};

export default Expenses;
