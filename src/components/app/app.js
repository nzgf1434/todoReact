import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends React.Component{

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };
  
  deleteItem = (indx) => {
    this.setState(({todoData}) => {
      let todoData1  = todoData.filter((item) => item.id !== indx); // эл-т state-a не должен меняться!!! 
      return {todoData : todoData1}  // Сохраняем неизменность стейта!!!
    })
  };

  render(){
    const {todoData} = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData}
        onDeleted = {this.deleteItem}
        />
      </div>
    );
  }
};
