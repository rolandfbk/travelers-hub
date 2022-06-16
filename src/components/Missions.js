import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getMissionFromApi, memberLeave, memberJoin } from '../Redux/mission/mission';
import MissionList from './MissionList';

const Missions = () => {
  const listing = useSelector((state) => state.missionReducer, shallowEqual);

  const dispatch = useDispatch();

  const joinMission = (id, join) => {
    if (join) {
      dispatch(memberLeave(id));
    } else {
      dispatch(memberJoin(id));
    }
  };

  useEffect(() => {
    if (listing.length === 0) {
      getMissionFromApi(dispatch);
    }
  }, [dispatch]);

  return (
    <MissionList listing={listing} joinMission={joinMission} />
  );
};

export default Missions;
