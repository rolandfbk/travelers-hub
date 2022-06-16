import React from 'react';
import { useSelector } from 'react-redux';

const RocketsReserved = () => {
  const selectedRockets = useSelector((state) => state.rocketReducer);

  const reservedRockets = selectedRockets.filter((rocket) => rocket.reserved);

  if (reservedRockets.length === 0) {
    return (
      <div className="my-profile-item">
        <h2>My Rockets</h2>
        <p>Be the first to reserve...</p>
      </div>
    );
  }
  return (
    <div className="my-profile-item">
      <h2>My Rockets</h2>
      <table className="my-profile-mission-table">
        <tbody>
          {reservedRockets.map((rocket) => (
            <tr key={rocket.rocket_id}>
              <td className="my-profil-mission">{rocket.rocket_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RocketsReserved;
