import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './containers/MainPage';
// import HeroDetails from './components/HeroDetails';
import logo from './assets/logo.jpeg';
import LoadIndicator from './components/LoadIndicator';

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

const HeroDetails = lazy(() => import('./components/HeroDetails'));

const App = () => (
  <Router>
    <Logo>
      <Link to="/">
        <img src={logo} alt="Dota" />
      </Link>
      <span>Heroes of Dota2</span>
    </Logo>

    <Suspense fallback={<LoadIndicator size="100px" color="crimson" />}>
      <Route path="/" exact component={MainPage} />
      <Route path="/:heroname" component={HeroDetails} />
    </Suspense>
  </Router>
);

export default App;
