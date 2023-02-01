//load the css for the component
import styles from './ExpenseItem.module.css';
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => setTitle('Updated title!');
  return (
    <li>
      <Card className={styles['expense-item']}>
        <ExpenseDate date={props.date} />

        <div className={styles['expense-item__description']}>
          <h2>{title}</h2>
          <div className={styles['expense-item__price']}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
