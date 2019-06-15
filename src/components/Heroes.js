import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import { HeroesContainer } from '../styles/HeroesContainer';

const Heroes = ({ heroes }) => {
  const items = heroes.map(hero => <Hero key={hero.id} hero={hero} />);
  return <HeroesContainer>{items}</HeroesContainer>;
};

Heroes.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object)
};

export default Heroes;
