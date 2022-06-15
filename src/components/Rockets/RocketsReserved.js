import React from 'react';
import { useSelector } from 'react-redux';

const RocketsReserved = () => {
  const selectedRockets = useSelector((state) => state.rocketReducer);

  const reservedRockets = selectedRockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h2>My Reserved Rockets</h2>
      <table>
        <tbody>
          {reservedRockets.map((rocket) => (
            <tr key={rocket.rocket_id}>
              <td>{rocket.rocket_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RocketsReserved;
