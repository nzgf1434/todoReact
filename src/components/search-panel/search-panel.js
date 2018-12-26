import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component{

  state = {
    text: ""
  };

  setSearchText = (e) => {
    const {onSearchChange} = this.props;
    // let searchString = e.target.value;
    // this.setState({text: searchString});
    onSearchChange(e.target.value);
  };


  render(){
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                // value={this.state.text}
                onChange={this.setSearchText} />
    );
  };
  
};
