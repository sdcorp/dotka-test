import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import { HeroesContainer } from '../styles/HeroesContainer';

const Heroes = ({ heroes, searchedHeroId }) => {
  const items = heroes.map(hero => <Hero key={hero.id} hero={hero} isSearched={searchedHeroId === hero.id} />);
  return <HeroesContainer>{items}</HeroesContainer>;
};

Heroes.propTypes = {
  heroes: PropTypes.array
};

export default Heroes;
