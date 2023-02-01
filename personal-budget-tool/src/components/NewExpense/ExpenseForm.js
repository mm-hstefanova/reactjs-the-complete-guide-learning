import styles from './ExpenseForm.module.css';
import { useState } from 'react';

function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    // send the data from the child to the parent
    props.onSaveExpenseDate(expenseDate);

    setAmount('');
    setTitle('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-expense__controls']}>
        <div className={styles['new-expense__control']}>
          <label>Title: {title}</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>

        <div className={styles['new-expense__control']}>
          <label>Amount {amount}</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className={styles['new-expense__control']}>
          <label>Date {date}</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles['new-expense__actions']}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>

        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
