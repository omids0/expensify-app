import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummery from './ExpensesSummery'

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummery />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
