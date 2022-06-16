const JOIN_MISSION = 'travelers-hub/mission/JOIN_MISSION';
const LEAVE_MISSION = 'travelers-hub/mission/LEAVE_MISSION';
const GET_MISSION_FROM_API = 'travelers-hub/mission/GET_MISSION_FROM_API';

export const getMissionFromApi = async (dispatch) => {
  try {
    const request = new Request('https://api.spacexdata.com/v3/missions');
    const response = await fetch(request);
    const res = await response.json();

    dispatch({
      type: GET_MISSION_FROM_API,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: GET_MISSION_FROM_API,
      payload: [],
    });
  }
};

export const memberJoin = (id) => ({ type: JOIN_MISSION, payload: id });

export const memberLeave = (id) => ({ type: LEAVE_MISSION, payload: id });

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case JOIN_MISSION: {
      const arr = state.map((a) => {
        const newValue = { ...a };

        if (a.missionId === action.payload) {
          newValue.join = true;
          newValue.buttonText = 'Leave Mission';
          newValue.buttonColor = '#dc143c';
          newValue.memberText = 'Active Member';
          newValue.memberColor = '#1e90ff';
        }

        return newValue;
      });
      return arr;
    }
    case LEAVE_MISSION: {
      const arr = state.map((a) => {
        const newValue = { ...a };

        if (a.missionId === action.payload) {
          newValue.join = false;
          newValue.buttonText = 'Join Mission';
          newValue.buttonColor = '#000';
          newValue.memberText = 'NOT A MEMBER';
          newValue.memberColor = '#a9a9a9';
        }

        return newValue;
      });
      return arr;
    }
    case GET_MISSION_FROM_API: {
      const arr = [];
      let obj;
      for (let i = 0; i < action.payload.length; i += 1) {
        obj = {
          missionId: action.payload[i].mission_id,
          missionName: action.payload[i].mission_name,
          description: action.payload[i].description,
          join: false,
          buttonText: 'Join Mission',
          buttonColor: '#000',
          memberText: 'NOT A MEMBER',
          memberColor: '#a9a9a9',
        };
        arr.push(obj);
      }

      return arr;
    }
    default: return state;
  }
};

export default missionReducer;
