import React from 'react';
import PropTypes from 'prop-types';
import SingleMission from './SingleMission';

const MissionList = ({ listing, joinMission }) => (
  <section className='mission-section'>
    <table className='mission-table'>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {listing.map((mission) => (
          <SingleMission
            key={mission.missionId}
            mission={mission}
            joinMission={joinMission}
          />
        ))}
      </tbody>
    </table>
  </section>
);

MissionList.propTypes = {
  listing: PropTypes.isRequired,
  joinMission: PropTypes.isRequired,
};

export default MissionList;
