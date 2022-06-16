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
    cursor: 'pointer',
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
      <td className="mission-td-top"><b>{ missionName }</b></td>
      <td className="mission-td-top">{ description }</td>
      <td className="mission-td"><div style={memberStyle}>{ memberText }</div></td>
      <td className="mission-td">
        <button type="button" style={btnStyle} onClick={() => joinMission(missionId, join)}>
          { buttonText }
        </button>
      </td>
    </tr>
  );
};

SingleMission.propTypes = {
  joinMission: PropTypes.func.isRequired,
  mission: PropTypes.instanceOf(Object),
  missionId: PropTypes.string,
  missionName: PropTypes.string,
  description: PropTypes.string,
  join: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  memberText: PropTypes.string,
  memberColor: PropTypes.string,
};

SingleMission.defaultProps = {
  mission: {},
  missionId: '',
  missionName: '',
  description: '',
  join: false,
  buttonText: '',
  buttonColor: '',
  memberText: '',
  memberColor: '',
};

export default SingleMission;
