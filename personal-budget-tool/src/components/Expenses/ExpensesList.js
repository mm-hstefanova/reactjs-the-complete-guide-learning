import styles from './ExpensesList.module.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className={styles['expenses-list__fallback']}>Found no expenses.</h2>
    );
  }

  return (
    <ul className={styles['expenses-list']}>
      {/* Ternary syntax: */}
      {props.items.length === 0 ? (
        <li>There are no data ...</li>
      ) : (
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </ul>
  );
}

export default ExpensesList;
