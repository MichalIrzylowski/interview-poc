import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '@store/houses/actions';

import { Button } from '@components/button';

export const Hosue: React.FC = () => {
  const data = useSelector((state) => state.houses.houses);
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const house = data.find((hosueData) => hosueData._id === params.id);

  const handleClick = useCallback(
    () => dispatch(actions.deleteHouse.request(params.id)),
    [dispatch, params.id]
  );

  if (!house) return <div>there is no such a house</div>;

  return (
    <div>
      {house.createdAt}{' '}
      <Button to="/houses" onClick={handleClick}>
        Delete
      </Button>
    </div>
  );
};
