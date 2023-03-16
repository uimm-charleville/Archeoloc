import React from 'react'
import { IconLocation } from './IconLocation'

import { Marker } from 'react-leaflet';
import MarkerPopup from './MarkerPopup';

const Markers = (props) => {
  const { places } = props

  if (!places || places.length === 0) {
    return null;
  }

  const markers = places.map((place) => (
    <Marker 
    key={place.id_gisement}
    position={[
      place.latitude,
      place.longitude
    ]} 
    icon={IconLocation}
    >
      <MarkerPopup data={place}/>
    </Marker>
  ))

  return (
    <div>
      {markers}
    </div>
  )
}

export default Markers
