import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchAllHeroes } from '../actions/heroesActions';
import { filterByAttr } from '../service/utils';
import Search from '../components/Search';
import Heroes from '../components/Heroes';
import LoadIndicator from '../components/LoadIndicator';
import SearchResult from '../components/SearchResult';

const ATTRIBUTES = ['strength', 'intelligence', 'agility'];

const MainPage = ({ fetchAllHeroes, heroesData: { loading, heroes } }) => {
  useEffect(() => {
    if (heroes.length === 0) fetchAllHeroes();
  }, []);

  const renderHeroes = attrs =>
    attrs.map(attr => (
      <HeroesWrapper key={attr}>
        <h3>{attr.toUpperCase()}</h3>
        {loading ? (
          <LoadIndicator color="aquamarine" />
        ) : (
          <Heroes heroes={filterByAttr(heroes, attr.substring(0, 3))} />
        )}
      </HeroesWrapper>
    ));

  return (
    <Page>
      <SearchResult />
      <Search />
      <Container>{renderHeroes(ATTRIBUTES)}</Container>
      <ScrollUp onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>UP</ScrollUp>
    </Page>
  );
};

const Page = styled.div`
  margin-top: 1rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 2rem;
  margin-top: 2rem;
`;

const HeroesWrapper = styled.div`
  background-color: crimson;
  padding: 1rem;
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: chartreuse;
  }
`;

const ScrollUp = styled.button`
  font-size: 0.8rem;
  position: fixed;
  right: 1rem;
  bottom: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0px 0px 4px 4px rgba(255, 255, 255, 0.75);
  }
  &:focus {
    outline: none;
  }
`;

const mapStateToProps = state => ({ heroesData: state.heroes });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchAllHeroes }, dispatch);

MainPage.propTypes = {
  heroesData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    searchedHero: PropTypes.object,
    heroes: PropTypes.array.isRequired
  }).isRequired,
  fetchAllHeroes: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
