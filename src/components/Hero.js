import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const baseURL = 'https://api.opendota.com';

const Hero = ({ hero }) => {
  useEffect(() => () => (document.body.style.overflow = 'auto'), []);
  const { img, localized_name: heroName } = hero;
  return img ? (
    <StyledLink
      to={{
        pathname: `/${heroName.replace(/\s/g, '-')}`,
        state: { details: { ...hero } }
      }}
    >
      <Image src={baseURL + img} alt={heroName} />
      <Name>{heroName}</Name>
    </StyledLink>
  ) : null;
};

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
  :hover {
    box-shadow: ${props => (props.isSearched ? 'none' : '0px 0px 4px 4px rgba(255, 255, 255, 0.75)')};
    transform: ${props => (props.isSearched ? 'none' : 'scale(1.05)')};
  }
`;

const Name = styled.span`
  position: absolute;
  left: 5px;
`;

Hero.propTypes = {
  hero: PropTypes.object
};

export default Hero;
