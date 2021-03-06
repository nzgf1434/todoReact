import React from 'react';
import './item-add-form.css';
export default class ItemAddForm extends React.Component{

    state = {
        label: ""
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({label: ""})
    };

    onLabelChange = (e) => {
        this.setState({label: e.target.value});
    };


    render(){
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}
            >
                <input type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="Enter new task's name" 
                    value={this.state.label}               
                />
                <button className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        )
    }
}