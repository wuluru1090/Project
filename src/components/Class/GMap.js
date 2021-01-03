import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../../style/class/gmap.scss'

// 置入pin元素
import { FaBeer } from 'react-icons/fa'

const LocationPin = ({ text }) => (
  <div className="pin">
    <FaBeer className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

// Location：地點/zoomLevel：縮放大小/defaultCenter：預設中心點
const GMap = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC6QUff0ut3Jr7uZCFw-_u5fdcziRnyr2k' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default GMap
