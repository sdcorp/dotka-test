import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadIndicator = ({ size, color }) => {
  return (
    <Loader>
      <Spinner size={size} color={color} />
    </Loader>
  );
};

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div.attrs(({ size, color }) => ({
  width: size || '45px',
  height: size || '45px',
  color: color || 'white'
}))`
  display: inline-block;
  :after {
    content: ' ';
    display: block;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${props => props.color};
    border-color: ${props => props.color} transparent ${props => props.color} transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

export default LoadIndicator;
