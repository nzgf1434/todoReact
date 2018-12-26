import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component{

  render(){
    const {onShowActive, onShowDone, onShowAll, todos} = this.props;
    let classNames = ["btn btn-info", "btn btn-info", "btn btn-info"];
    switch(todos[0]["filter"]){
      case "all": 
        classNames[0] += " active";
        break;
      case "active":
        classNames[1] += " active";
        break;
      case "done":
      classNames[2] += " active";
      break;
      default:
      break;
    };

    return (
      <div>
        <button type="button"
                className={classNames[0]}
                onClick={onShowAll}
                >
                All
        </button>
        <button type="button"
                className={classNames[1]}
                onClick={onShowActive}>
                Active
        </button>
        <button type="button"
                className={classNames[2]}
                onClick={onShowDone}
                >
                Done
       </button>
      </div>
    );
  };
}
  


