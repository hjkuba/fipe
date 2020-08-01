import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentVehicle } from '@/redux/selectors';

function VehicleContent() {
  const vehicle = useSelector(selectCurrentVehicle);

  return (
    <>
      <span>{JSON.stringify(vehicle)}</span>
    </>
  );
}

export default VehicleContent;
