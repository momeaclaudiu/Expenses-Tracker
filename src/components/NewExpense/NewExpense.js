import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


const NewExpence = (props) => {
   const [display, setDisplay] = useState(true);

   const toggleFormHandler = () => {
      setDisplay(!display);
   }

   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
      setDisplay(true)
   };

   return (
      <div className="new-expense">
         {display ? <button onClick={toggleFormHandler}>Add New Expense</button> : <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {toggleFormHandler}/> }
      </div>
   );
};

export default NewExpence;
