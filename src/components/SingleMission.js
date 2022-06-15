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
    padding: '5px',
    width: '100px',
  };

  const memberStyle = {
    backgroundColor: memberColor,
    color: '#fff',
    padding: '3px',
    whiteSpace: 'nowrap',
    width: '120px',
  };

  return (
    <tr>
      <td><b>{ missionName }</b></td>
      <td>{ description }</td>
      <td className='mission-td'><div style={memberStyle}>{ memberText }</div></td>
      <td className='mission-td'>
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
