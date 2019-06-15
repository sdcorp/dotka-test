import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { filterByAttr, searchHeroByName } from '../service/utils';
import Search from '../components/Search';
import Heroes from '../components/Heroes';
import LoadIndicator from '../components/LoadIndicator';
import { fetchAllHeroes } from '../actions/heroesActions';

const ATTRIBUTES = ['strength', 'intelligence', 'agility'];

const Page = styled.div`
  margin-top: 1rem;
`;

const Container = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
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

class MainPage extends Component {
  state = {
    searchedHeroId: null
  };

  componentDidMount() {
    const { fetchAllHeroes, heroesData } = this.props;
    if (heroesData.heroes.length === 0) fetchAllHeroes();
  }

  searchHero = term => {
    const { heroes } = this.props.heroesData;
    const searchedHeroId = searchHeroByName(heroes, term);
    if (!searchedHeroId) this.setState({ searchedHeroId: null });
    this.setState({ searchedHeroId });
  };

  renderHeroes = (heroes, attrs, searchId) => {
    const { loading } = this.props.heroesData;
    return attrs.map(attr => (
      <HeroesWrapper key={attr}>
        <h3>{attr.toUpperCase()}</h3>
        {loading ? (
          <LoadIndicator color="aquamarine" />
        ) : (
          <Heroes heroes={filterByAttr(heroes, attr.substring(0, 3))} searchedHeroId={searchId} />
        )}
      </HeroesWrapper>
    ));
  };

  render() {
    const { heroes } = this.props.heroesData;
    const { searchedHeroId } = this.state;
    return (
      <Page>
        <Search searchHero={this.searchHero} />
        <Container>{this.renderHeroes(heroes, ATTRIBUTES, searchedHeroId)}</Container>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  heroesData: state.heroes
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchAllHeroes }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
