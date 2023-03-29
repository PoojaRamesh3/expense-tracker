import "./Styles/ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let clicked = props.expenseTitle;

  const clickHandler = () => {
    clicked = "changed";
  };

  return (
    <Card className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">
          {props.expenseDate.toLocaleString("default", { month: "long" })}
        </div>
        <div className="expense-date__year">
          {props.expenseDate.getFullYear()}
        </div>
        <div className="expense-date__day">{props.expenseDate.getDate()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{clicked}</h2>
      </div>
      <div className="expense-item__price">Rs {props.expenseAmount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
