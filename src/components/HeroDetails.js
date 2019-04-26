import React from 'react';
import styled from 'styled-components';

const baseURL = 'https://api.opendota.com';

const Details = styled.div`
  background-color: azure;
  padding: 1rem;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin: 0;
  }
  button {
    align-self: normal;
    margin-left: 1rem;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const StatsTable = styled.table`
  background-color: coral;
  margin-top: 1rem;
  width: 50%;
`;

// Не успел застилизировать :(
const HeroDetails = props => {
  const { details } = props.location.state;
  const { goBack } = props.history;
  return (
    <Details>
      <Heading>
        <h1>Hero Stats</h1>
        <button onClick={goBack}>Back</button>
      </Heading>
      <Main>
        <img src={baseURL + details.img} alt={details.localized_name} />
        <Info>
          <p>Name: {details.localized_name}</p>
          <p>Attack Type: {details.attack_type}</p>
          <p>Roles: {details.roles.join(', ')}</p>
        </Info>
      </Main>
      <StatsTable>
        <thead>
          <tr>
            <th>Stats</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base health:</td>
            <td>{details.base_health}</td>
          </tr>
          <tr>
            <td>Base health regen:</td>
            <td>{details.base_health_regen}</td>
          </tr>
          <tr>
            <td>Base mana regen:</td>
            <td>{details.base_mana_regen}</td>
          </tr>
          <tr>
            <td>Base attack:</td>
            <td>
              {details.base_attack_min} - {details.base_attack_max}
            </td>
          </tr>
          <tr>
            <td>Base str:</td>
            <td>{details.base_str}</td>
          </tr>
          <tr>
            <td>Base int:</td>
            <td>{details.base_int}</td>
          </tr>
          <tr>
            <td>Base agi:</td>
            <td>{details.base_agi}</td>
          </tr>
          <tr>
            <td>Move speed:</td>
            <td>{details.move_speed}</td>
          </tr>
        </tbody>
      </StatsTable>
    </Details>
  );
};

export default HeroDetails;
