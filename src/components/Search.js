import React, { useState } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findHero, resetSearch } from '../actions/heroesActions';

const SearchBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr;
  grid-gap: 1rem;
  padding: 0 1rem;
  h2 {
    margin: 0;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Search = ({ findHero, resetSearch }) => {
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
      <button onClick={() => findHero(inputValue)}>Find</button>
      <button
        onClick={() => {
          setInputValue('');
          resetSearch();
        }}
      >
        Reset
      </button>
    </SearchBox>
  );
};

const mapStateToProps = state => ({
  hero: state.heroes.heroId
});

const mapDispatchToProps = dispatch => bindActionCreators({ findHero, resetSearch }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
