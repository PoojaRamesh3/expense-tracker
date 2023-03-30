import "./ExpenseForm.css";
import React, { useState } from "react";

export default function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      title: event.target.value,
    });
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      amount: event.target.value,
    });
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      date: event.target.value,
    });
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1998-08-29"
            step="2025-08-29"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
