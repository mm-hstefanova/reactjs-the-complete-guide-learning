import './Card.css';

/**
 * Wrapper component
 * Reusable styles for a container
 * Expenses / ExpenseItem components - both use the Card component as a wrapper to add rounded corners and shadows
 * */

function Card(props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
