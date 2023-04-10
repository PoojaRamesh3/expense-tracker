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

  return (
    <Card className="expenses">
      <ExpensesFilter
        initialVal={year}
        onYearChangeHandler={yearChangeHandler}
      />
      {props.data.map((item, index) => (
        <ExpenseItem
          key={index}
          expenseTitle={item.title}
          expenseAmount={item.amount}
          expenseDate={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
