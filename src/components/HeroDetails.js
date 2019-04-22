import React from 'react';
import styled from 'styled-components';

const Details = styled.div`
  background-color: azure;
`;

// Не успел застилизировать :(
const HeroDetails = props => {
  const { details } = props.location.state;
  const { goBack } = props.history;
  return (
    <Details>
      <h1>Hero Stats</h1>
      <button onClick={goBack}>Back</button>
      <p>Name: {details.localized_name}</p>
      <p>Attack Type: {details.attack_type}</p>
      <p>Roles: {details.roles.join(', ')}</p>
      <table>
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
      </table>
    </Details>
  );
};

export default HeroDetails;
