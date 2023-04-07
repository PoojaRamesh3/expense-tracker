import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Paper",
      amount: 94.12,
      date: new Date("1998-08-28"),
    },
    {
      id: "e2",
      title: "New TV SetUp",
      amount: 799.49,
      date: new Date("1998-08-29"),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date("1998-08-30"),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date("1998-08-31"),
    },
  ];

  const addEventListner = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <>
      <NewExpense onAddExpense={addEventListner} />
      <Expenses data={expenses} />
    </>
  );
};

export default App;
