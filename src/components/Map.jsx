import React from 'react'
import { MapContainer ,TileLayer,Marker,Popup} from 'react-leaflet';
import '../App.css';
import 'leaflet/dist/leaflet.css'
const Map = ({ipinformation}) => {


    const position = ipinformation && ipinformation.location ? [ipinformation.location.lat, ipinformation.location.lng] : [0, 0];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        IP location,{position[0]}
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map