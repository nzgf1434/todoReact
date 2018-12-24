import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends React.Component{

  startIndex = 0;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  };
  
  createTodoItem(label){
    return {
      label: label,
      important: false,
      done: false,
      id: this.startIndex++
    }
  };

  deleteItem = (indx) => {
    this.setState(({todoData}) => {
      let todoData1  = todoData.filter((item) => item.id !== indx); // эл-т state-a не должен меняться!!! 
      return {todoData : todoData1}  // Сохраняем неизменность стейта!!!
    })
  };

  addItem = (text) => {
    let {todoData} = this.state;
    this.setState(() => {
      let todoData1 = todoData.slice();
      const newItem = this.createTodoItem(text);
      todoData1.push(newItem);
      return {todoData: todoData1}
    })
  };

  toggleProperty(id, propName){
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);
      const todoData1 = todoData.slice();
      todoData1[indx][propName] = !todoData1[indx][propName];
      return {
        todoData: todoData1
      }
    })
  }

  onToggleImportant = (id ) => {
      this.toggleProperty(id, 'important');
  };

  onToggleDone = (id) => {
    this.toggleProperty(id, 'done');
  };

  render(){

    const {todoData} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData}
          onDeleted = {this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
        />

        <ItemAddForm 
          onAdded={this.addItem}
        />
      </div>
    );
  }
};
