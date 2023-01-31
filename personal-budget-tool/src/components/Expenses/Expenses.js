import { useState, useEffect } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
