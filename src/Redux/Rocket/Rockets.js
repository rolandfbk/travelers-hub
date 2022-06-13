const initialState = [];

const ADD_ROCKET = 'travelers-hub/Redux/Rocket/ADD_ROCKET';
const RESERVE_ROCKET = 'travelers-hub/Redux/Rocket/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'travelers-hub/Redux/Rocket/CANCEL_RESERVATION';
const rocketApi = 'https://api.spacexdata.com/v3/rockets';

export const addRocket = (rockets) => ({
  type: ADD_ROCKET,
  rockets,
});

export const reserveRocket = (rocketId) => ({
  type: RESERVE_ROCKET,
  rocketId,
});

export const cancelReserve = (rocketId) => ({
  type: CANCEL_RESERVATION,
  rocketId,
});

export const fetchRocket = () => (async (dispatch) => {
  const response = await fetch(rocketApi);
  const data = await response.json();
  const rocketArray = [];
  data.forEach((el) => {
    const rocket = {
      rocket_id: el.id,
      rocket_name: el.rocket_name,
      rocket_description: el.description,
      rocket_img: el.flickr_images[0],
      reserved: false,
    };
    rocketArray.push(rocket);
  });
  dispatch(addRocket(rocketArray));
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return action.rockets;
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.rocketId !== action.rocketId) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.rocket_id !== action.rocketId) {
          return rocket;
        }

        return { ...rocket, reserved: false };
      });

      return newState;
    }

    default:
      return state;
  }
};

export default rocketReducer;
