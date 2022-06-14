import React from 'react';
import PropTypes from 'prop-types';
import SingleMission from './SingleMission';

const MissionList = (props) => {
  let items = [];
  items = [...props.listing];
  const joinFunction = props.joinMission;
  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map((mission) => (
          <SingleMission
            key={mission.missionId}
            mission={mission}
            joinMission={joinFunction}
          />
        ))}
      </tbody>
    </table>
  );
};

MissionList.propTypes = {
  listing: PropTypes.array,
  joinMission: PropTypes.func,
};

export default MissionList;
