import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const baseURL = 'https://api.opendota.com';

const StyledLink = styled(Link)`
  :hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: ${props => (props.isSearched ? '0px 0px 4px 4px rgba(255, 255, 255, 0.75)' : 'none')};
  :hover {
    transform: scale(1.1);
  }
`;

const Hero = ({ hero, isSearched }) => {
  const { img, localized_name: heroName } = hero;
  return img ? (
    <StyledLink
      to={{
        pathname: `/${heroName.replace(/\s/g, '-')}`,
        state: { details: { ...hero } }
      }}
    >
      <Image isSearched={isSearched} src={baseURL + img} alt={heroName} />
    </StyledLink>
  ) : null;
};

Hero.propTypes = {
  hero: PropTypes.object,
  isSearched: PropTypes.bool
};

export default Hero;
