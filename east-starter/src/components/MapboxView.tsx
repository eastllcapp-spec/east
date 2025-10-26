import React from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';

export default function MapboxView(){
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';
  return (
    <Map
      initialViewState={{ longitude: -76.4, latitude: 17.9, zoom: 11 }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={token}
    >
      <Marker longitude={-76.4} latitude={17.9} anchor="bottom">🚗</Marker>
      <NavigationControl position="bottom-right" />
    </Map>
  )
}
