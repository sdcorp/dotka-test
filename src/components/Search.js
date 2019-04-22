import React, { Component } from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    margin: 0;
  }
  input {
    margin: 0 1rem;
  }
  button {
    margin-right: 1rem;
  }
`;

// Пришлось делать Lifting State Up. Ну или лепить поиск прямо в Main Page (но мы же за компонентный подход)
// Решил показать что я умею это...
// Редакс бы решил эту проблему. Но его внедрять было слишком долго
class Search extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = e => this.setState({ inputValue: e.target.value });

  render() {
    const { searchHero } = this.props;
    const { inputValue } = this.state;
    return (
      <SearchBox>
        <h2>Search</h2>
        <input type="text" onChange={this.handleInputChange} value={inputValue} placeholder="Enter a hero name" />
        <button onClick={() => searchHero(inputValue)}>Find</button>
        <button
          onClick={() => {
            searchHero('');
            this.setState({ inputValue: '' });
          }}
        >
          Reset
        </button>
      </SearchBox>
    );
  }
}

export default Search;
