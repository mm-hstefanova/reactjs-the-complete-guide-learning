import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random() + 'cc94a488-b812-4f7b-b886-b1ebb6ab04cf',
    };

    props.onAddNewExpenseData(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
