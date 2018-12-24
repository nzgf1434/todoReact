import React from 'react';
import './item-add-form.css';
export default class ItemAddForm extends React.Component{
    
    render(){
        let {onAdded} = this.props;
        return (
            <div className="item-add-form">
                <button className="btn btn-outline-secondary"
                onClick={() => onAdded("new task")}
                >
                    Add Item
                </button>
            </div>
        )
    }
}