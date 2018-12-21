import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component{

  state = {
    done: false, 
    important: false
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  };

  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      }
    })
  };
  
  render(){
    const {label} = this.props;
    const {done, important} = this.state;
    let classNames = "todo-list-item";

    if (done){
      classNames += " done";
    }else{
      if(classNames.indexOf("done") !== -1){
        classNames = classNames.slice(0, classNames.indexOf("done")-1) + classNames.slice(classNames.indexOf("done") + 4)
      }
    };
    
    if (important){
      classNames += " important";
    }
    else{
      if(classNames.indexOf("important") !== -1){
        classNames = classNames.slice(0, classNames.indexOf("important")-1) + classNames.slice(classNames.indexOf("important") + 9)
      }
    };

    return (
      <span className = {classNames}>
        <span
          className="todo-list-item-label"
          onClick ={this.onLabelClick}>
          {label}
        </span>
  
        <button type="button"
                onClick = {this.onMarkImportant}
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}
