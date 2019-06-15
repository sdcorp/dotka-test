import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr;
  grid-gap: 1rem;
  padding: 0 1rem;
  h2 {
    margin: 0;
  }
`;

// Пришлось делать Lifting State Up. Ну или лепить поиск прямо в Main Page (но мы же за компонентный подход)
// Решил показать что я умею это...
// Редакс бы решил эту проблему. Но его внедрять было слишком долго

const Search = ({ searchHero }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <SearchBox>
      <h2>Search</h2>
      <input
        type="search"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Enter a hero name"
      />
      <button onClick={() => searchHero(inputValue)}>Find</button>
      <button
        onClick={() => {
          searchHero('');
          setInputValue('');
        }}
      >
        Reset
      </button>
    </SearchBox>
  );
};

export default Search;
