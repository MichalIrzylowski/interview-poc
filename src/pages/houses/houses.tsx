import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@components/button';

import * as actions from '@store/houses/actions';

export const Houses: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(actions.fetchHouses.request());
  }, [dispatch]);

  if (data.error) return <div>{data.error}</div>;
  if (data.loading) return <div>Loading</div>;

  return (
    <ul>
      {data.houses.map((house) => (
        <li>
          {house.label} {house.address}{' '}
          <Button to={`/houses/${house._id}`} key={house._id}>
            Show more
          </Button>
        </li>
      ))}
    </ul>
  );
};
