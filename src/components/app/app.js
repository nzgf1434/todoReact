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
    ],
    search: ""
  };

  searchFilter(arr, text){
    if (text.length === 0){
      return arr;
    };
    return arr.filter((item) => {
      return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
  };

  onSearchChange = (text) => {
    this.setState({search: text});
  };

  onShowActive = () => {
    this.setState(({todoData}) => {
      const todoActive = todoData.slice();
      todoActive.forEach((item) => item["filter"] = "active");
      return {todoData: todoActive};
      }
    )
  };

  onShowDone = () => {
    this.setState(({todoData}) => {
      const todoActive = todoData.slice();
      todoActive.forEach((item) => item["filter"] = "done");
      return {todoData: todoActive};
      }
    )
  };



  onShowAll = () => {
    this.setState(({todoData}) => {
      const todoActive = todoData.slice();
      todoActive.forEach((item) => item["filter"] = "all");
      return {todoData: todoActive};
      }
    )
  };


  
  createTodoItem(label){
    return {
      label: label,
      important: false,
      done: false,
      id: this.startIndex++,
      filter: "all"
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

  onToggleImportant = (id) => {
      this.toggleProperty(id, 'important');
  };

  onToggleDone = (id) => {
    this.toggleProperty(id, 'done');
  };

  render(){

    let {todoData, search} = this.state;
    console.log(search);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    if(search.length > 0){
      todoData = this.searchFilter(todoData, search);
    };

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
          onSearchChange = {this.onSearchChange}/>
          <ItemStatusFilter 
          todos={todoData}
          onShowDone = {this.onShowDone}
          onShowActive = {this.onShowActive}
          onShowAll = {this.onShowAll}/>
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
