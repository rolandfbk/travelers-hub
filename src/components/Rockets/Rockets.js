import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket, reserveRocket, cancelReserve } from '../../Redux/Rocket/Rockets';
import './Rockets.css';

const Rockets = () => {
  const rocketData = useSelector((state) => state.rocketReducer);

  const dispatch = useDispatch();

  const getRockets = () => {
    if (rocketData.length === 0) {
      dispatch(fetchRocket());
    }
  };

  const rocketBooking = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelBooking = (id) => {
    dispatch(cancelReserve(id));
  };

  useEffect(() => {
    getRockets();
  }, []);

  return (
    <div className="rocket">
      <div className="rocket-align">
      {rocketData.map((rockets) => (
        <div key={rockets.rocket_id} className="display">

          <img className="rocket-image" src={rockets.rocket_img} alt={rockets.rocket_name} />

          <div className="info">
            <h1 className="rocket-name">{rockets.rocket_name}</h1>
            <p className="description">
              {rockets.reserved ? (<span className="span">Reserved</span>) : (false)}
              {rockets.rocket_description}
            </p>
            {rockets.reserved ? (
              <button
                onClick={() => cancelBooking(rockets.rocket_id)}
                type="button"
                className="cancel-button"
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                onClick={() => rocketBooking(rockets.rocket_id)}
                type="button"
                className="reserve-button"
              >
                Reserve Rocket
              </button>

            )}
          </div>

        </div>
      ))}
      </div>
    </div>
  );
};

export default Rockets;
