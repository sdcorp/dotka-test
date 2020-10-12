import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/logo.jpeg';
import MainPage from './containers/MainPage';
import LoadIndicator from './components/LoadIndicator';
import pkg from '../package.json';

const HeroDetails = lazy(() => import('./components/HeroDetails'));

const App = () => (
  <Router>
    <Logo>
      <Link to="/">
        <img src={logo} alt="Dota" />
      </Link>
      <span>Heroes of Dota 2 </span>
      <span>Version: {pkg?.version}</span>
    </Logo>

    <Suspense fallback={<LoadIndicator size="100px" color="crimson" />}>
      <Route path="/" exact component={MainPage} />
      <Route path="/:heroname" component={HeroDetails} />
    </Suspense>
  </Router>
);

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

export default App;
