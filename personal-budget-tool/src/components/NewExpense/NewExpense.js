import styles from './NewExpense.module.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random() + 'cc94a488-b812-4f7b-b886-b1ebb6ab04cf',
    };

    props.onAddNewExpenseData(expenseData);
  };

  const cancelHandler = () => setIsEditing(false);

  return (
    <div className={styles['new-expense']}>
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>Add New Expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
