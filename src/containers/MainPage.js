import React, { Component } from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import { filterByAttr, searchHeroByName } from '../service/utils';
import { getHeroStats } from '../service/api';
import Heroes from '../components/Heroes';
import LoadIndicator from '../components/LoadIndicator';

const ATTRIBUTES = ['strength', 'intelligence', 'agility'];

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
    searchedHeroId: null,
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const heroesData = await getHeroStats();
    this.setState({ heroes: heroesData, loading: false });
  }

  searchHero = term => {
    const { heroes } = this.state;
    const searchedHeroId = searchHeroByName(heroes, term);
    if (!searchedHeroId) this.setState({ searchedHeroId: null });
    this.setState({ searchedHeroId });
  };

  renderHeroes = (heroes, attrs, searchId) => {
    return attrs.map(attr => (
      <HeroesWrapper key={attr}>
        <h3>{attr.toUpperCase()}</h3>
        {this.state.loading ? (
          <LoadIndicator color="aquamarine" />
        ) : (
          <Heroes heroes={filterByAttr(heroes, attr.substring(0, 3))} searchedHeroId={searchId} />
        )}
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