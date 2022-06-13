import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket, reserveRocket } from '../../Redux/Rocket/Rockets';

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

  // const cancelBooking = (id) => {
  //   dispatch(cancelReserve(id));
  // };

  useEffect(() => {
    getRockets();
  }, []);

  return (
    <div>
      {rocketData.map((rockets) => (
        <div key={rockets.rocket_id}>
          <div>
            <img src={rockets.rocket_img} alt={rockets.rocket_name} />
          </div>
          <div>
            <h1>{rockets.rocket_name}</h1>
            <p>{rockets.rocket_description}</p>
            <button type="button" onClick={rocketBooking}>Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
