import React from 'react';
import PropTypes from 'prop-types';

const SingleMission = (props) => {
  const {
    missionId, missionName, description, join, buttonText, buttonColor, memberText, memberColor,
  } = props.mission;

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
        <button style={btnStyle} onClick={() => props.joinMission(missionId, join)}>
          { buttonText }
        </button>
      </td>
    </tr>
  );
};

/* SingleMission.propTypes = {
  mission: PropTypes.object,
  missionId: PropTypes.string,
  missionName: PropTypes.string,
  description: PropTypes.string,
  join: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  memberText: PropTypes.string,
  memberColor: PropTypes.string,
}; */

export default SingleMission;
