import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Hosue: React.FC = () => {
  const data = useSelector((state) => state.houses.houses);
  const params = useParams<{ id: string }>();

  const house = data.find((hosueData) => hosueData._id === params.id);

  if (!house) return <div>there is no such a house</div>;

  return <div>{house.createdAt}</div>;
};
