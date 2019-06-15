import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { resetSearch } from '../actions/heroesActions';
import { bindActionCreators } from 'redux';

const baseURL = 'https://api.opendota.com';

const SearchResult = ({ findedHero, resetSearch }) => {
  // disable body scroll
  useEffect(() => {
    if (findedHero) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [findedHero]);
  return (
    findedHero && (
      <Overlay onClick={resetSearch}>
        <Wrapper>
          {<Closer>✕</Closer>}
          <Name>{findedHero.localized_name}</Name>
          <StyledLink
            to={{
              pathname: `/${findedHero.localized_name.replace(/\s/g, '-')}`,
              state: { details: { ...findedHero } }
            }}
          >
            <Image src={baseURL + findedHero.img} alt={findedHero.localized_name} />
            <p>Click here for more details ➝</p>
          </StyledLink>
        </Wrapper>
      </Overlay>
    )
  );
};

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`;

const Closer = styled.div`
  color: white;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  z-index: 3;
  font-size: 2rem;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  display: block;
  color: ghostwhite;
  text-decoration: none;
  position: relative;
  p:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Name = styled.span`
  color: #fff;
  font-size: 2rem;
`;

const Wrapper = styled.div`
  position: relative;
  top: 20%;
  left: 0;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
`;

SearchResult.defaultProps = {
  findedHero: null
};

SearchResult.propTypes = {
  findedHero: PropTypes.object,
  resetSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ findedHero: state.heroes.findedHero });

const mapDispatchToProps = dispatch => bindActionCreators({ resetSearch }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);
