import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import { DarkModeProvider } from './components/context/DarkModeContext';

const filters = ['all','active','completed'];

function App() {
  const[filter, setFilter] =  useState(filters[0])
  return (
    <DarkModeProvider>
      <Filter
        filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList
        filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
