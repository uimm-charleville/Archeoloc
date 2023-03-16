import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';
import data from '../../assets/data/listes-gisements-api.json';
import IconLocation from '../../assets/images/pointer.svg';

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: {
      lat: 48.8099651,
      lng: 1.3576768
    },
    zoom: 13,
    data,
    userLocation: null,
    userLocationError: null
  });

  useEffect(() => {
    // Demande d'autorisation pour la position de l'utilisateur
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setState(prevState => ({
          ...prevState,
          currentLocation: { lat: latitude, lng: longitude },
          userLocation: { lat: latitude, lng: longitude },
          zoom: 13
        }));
      },
      (error) => {
        setState(prevState => ({
          ...prevState,
          userLocation: prevState.currentLocation
        }));
      }
    );
  }, []);

  const { userLocation, userLocationError } = state;

  // Afficher une carte centrée sur la position actuelle de l'utilisateur et des marqueurs pour les lieux dans les données
  return (
    <div>
      {userLocationError && <p>{userLocationError}</p>}
      {userLocation && (
        <MapContainer center={userLocation} zoom={state.zoom} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={userLocation} icon={L.icon({iconUrl: IconLocation, iconSize: [32, 32]})}>
            <Popup>Votre position</Popup>
          </Marker>
          {/* <Circle center={userLocation} radius={10000} /> */}
          <Markers places={state.data}/>
        </MapContainer>
      )}
    </div>
  );
};

export default MapView;
