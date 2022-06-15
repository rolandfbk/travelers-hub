import React from 'react';
import RocketsReserved from '../Rockets/RocketsReserved';
import MissionReservedList from '../MissionReservedList';

const MyProfile = () => (
  <div className="my-profile">
    <div className="my-profile-align">
      <MissionReservedList />
      <RocketsReserved />
    </div>
  </div>
);

export default MyProfile;
