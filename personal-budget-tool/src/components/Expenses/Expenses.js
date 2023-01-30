import { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props) {
  const [year, setYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      {/* Shorter syntax: && */}

      {/* {filteredExpenses.length === 0 && <p>There are no data ...</p>}

      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* Ternary syntax: */}
      {filteredExpenses.length === 0 ? (
        <p>There are no data ...</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;
