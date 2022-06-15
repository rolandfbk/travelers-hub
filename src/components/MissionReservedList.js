import React from 'react';
import { useSelector } from 'react-redux';

const MissionReservedList = () => {
  const listing = useSelector((state) => state.missionReducer);

  const joinedMission = listing.filter((mission) => mission.join);

  if (joinedMission.length === 0) {
    return (
      <div className="my-profile-item">
        <h2>My Missions</h2>
        <p>Be the first to join...</p>
      </div>
    );
  }
  return (
    <div className="my-profile-item">
      <h2>My Missions</h2>
      <table className="my-profile-mission-table">
        <tbody>
          {joinedMission.map((mission, index) => {
            const count = index;
            return (
              <tr key={count}>
                <td className="my-profil-mission">{mission.missionName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MissionReservedList;
