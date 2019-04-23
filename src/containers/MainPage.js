import React, { Component } from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import { filterByAttr, searchHeroByName } from '../service/utils';
import { getHeroStats } from '../service/api';
import Heroes from '../components/Heroes';

const ATTRIBUTES = {
  strength: 'str',
  intelligence: 'int',
  agility: 'agi'
};

const Page = styled.div`
  margin-top: 1rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
  padding: 0 2rem;
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

class MainPage extends Component {
  state = {
    heroes: [],
    searchedHeroId: null
  };

  async componentDidMount() {
    const heroesData = await getHeroStats();
    this.setState({ heroes: heroesData });
  }

  searchHero = term => {
    const { heroes } = this.state;
    const searchedHeroId = searchHeroByName(heroes, term);
    if (!searchedHeroId) this.setState({ searchedHeroId: null });
    this.setState({ searchedHeroId });
  };

  renderHeroes = (heroes, attrs, searchId) => {
    const skills = Object.keys(attrs);
    return skills.map(skill => (
      <HeroesWrapper key={skill}>
        <h3>{skill.toUpperCase()}</h3>
        <Heroes heroes={filterByAttr(heroes, attrs[skill])} searchedHeroId={searchId} />
      </HeroesWrapper>
    ));
  };

  render() {
    const { heroes, searchedHeroId } = this.state;
    return (
      <Page>
        <Search searchHero={this.searchHero} />
        <Container>{this.renderHeroes(heroes, ATTRIBUTES, searchedHeroId)}</Container>
      </Page>
    );
  }
}

export default MainPage;
