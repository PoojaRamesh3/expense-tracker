import React from "react";

export default function ExpenseDate(props) {
  const month = props.expenseDate.toLocaleString("default", { month: "long" });
  const day = props.expenseDate.getDate();
  const year = props.expenseDate.getFullYear();

  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </div>
  );
}
