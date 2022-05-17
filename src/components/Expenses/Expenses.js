import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expenseItem) => (
          <ExpenseItem 
          title={expenseItem.title} 
          amount={expenseItem.amount} 
          date={expenseItem.date}  
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
