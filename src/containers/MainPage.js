import React, { Component } from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import { filterByAttr, searchHeroByName } from '../service/utils';
import { getHeroStats } from '../service/api';
import Heroes from '../components/Heroes';

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

  render() {
    const { heroes, searchedHeroId } = this.state;
    const strengthHeroes = filterByAttr(heroes, 'str');
    const intelligenceHeroes = filterByAttr(heroes, 'int');
    const agilityHeroes = filterByAttr(heroes, 'agi');
    return (
      <Page>
        <Search searchHero={this.searchHero} />
        <Container>
          {/* Ммм... бойлерплейт-код. Можно еще улучшить. HOC например */}
          <HeroesWrapper>
            <h3>STRENGTH</h3>
            <Heroes heroes={strengthHeroes} searchedHeroId={searchedHeroId} />
          </HeroesWrapper>
          <HeroesWrapper>
            <h3>INTELLIGENCE</h3>
            <Heroes heroes={intelligenceHeroes} searchedHeroId={searchedHeroId} />
          </HeroesWrapper>
          <HeroesWrapper>
            <h3>AGILITY</h3>
            <Heroes heroes={agilityHeroes} searchedHeroId={searchedHeroId} />
          </HeroesWrapper>
        </Container>
      </Page>
    );
  }
}

export default MainPage;
