import "./Styles/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenseTitle);

  const clickHandler = () => {
    var text = setTitle("Updated");
    console.log(text);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">Rs {props.expenseAmount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
