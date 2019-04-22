import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './containers/MainPage';
import HeroDetails from './components/HeroDetails';
import logo from './assets/logo.jpeg';

const Logo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  img {
    width: 80px;
  }
  span {
    color: #333;
    font-size: 2rem;
  }
`;

const App = () => (
  <Router>
    <Logo>
      <Link to="/">
        <img src={logo} alt="Dota" />
      </Link>
      <span>Drink Vodka, Play Dotka!</span>
    </Logo>
    <Route path="/" exact component={MainPage} />
    <Route path="/:heroname" component={HeroDetails} />
  </Router>
);

export default App;
