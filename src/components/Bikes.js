import React, { useEffect, useState } from 'react';
import createEnturService from '@entur/sdk';

const service = createEnturService({
  clientName: 'tveit-infoskjermkurs',
});

const _getMyBikeStations = async () => {
  const data = await service.getBikeRentalStationsByPosition({
    latitude: 63.428311,
    longitude: 10.392514
  }, 230);
  return data;
};

const _setMyBikeStations = async (setBikeStations) => {
  const myBikeStations = await _getMyBikeStations();
  setBikeStations(myBikeStations);
};

const Bikes = () => {
  const [bikeStations, setBikeStations] = useState([]);

  useEffect(() => {
    console.log('Rendered Bikes');
    _setMyBikeStations(setBikeStations);
  }, [])

  return (
    <div className="Stations">
      {bikeStations.map(
        (bikeStation) => <Station station={bikeStation}/>
      )}
    </div>
  );
};

const Station = (props) => {
  const { name, bikesAvailable, spacesAvailable } = props.station;

  return (
    <div>
      <p>{name}: {bikesAvailable}/{spacesAvailable+bikesAvailable}</p>
    </div>
  )
}

export default Bikes;