import React from 'react';
import PropTypes from 'prop-types';

const SingleMission = ({ mission, joinMission }) => {
  const {
    missionId, missionName, description, join, buttonText, buttonColor, memberText, memberColor,
  } = mission;

  const btnStyle = {
    color: buttonColor,
    border: '1px solid '.concat(buttonColor),
    whiteSpace: 'nowrap',
  };

  const memberStyle = {
    backgroundColor: memberColor,
    color: '#fff',
    padding: '5px',
    whiteSpace: 'nowrap',
  };

  return (
    <tr>
      <td>{ missionName }</td>
      <td>{ description }</td>
      <td><span style={memberStyle}>{ memberText }</span></td>
      <td>
        <button type="button" style={btnStyle} onClick={() => joinMission(missionId, join)}>
          { buttonText }
        </button>
      </td>
    </tr>
  );
};

SingleMission.propTypes = {
  joinMission: PropTypes.isRequired,
  mission: PropTypes.isRequired,
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  join: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  memberText: PropTypes.string.isRequired,
  memberColor: PropTypes.string.isRequired,
};

export default SingleMission;
