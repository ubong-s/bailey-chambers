import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lng: 7.9439141682679875, lat: 5.027933760324891 }}
    />
    // <div>
    //   <Map google={this.props.google} zoom={10}>
    //     <Marker onClick={this.onMarkerClick} name={'Curent location'} />
    //   </Map>
    //   <InfoWindow onClose={this.onInfoWindowClose}>
    //     <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
    //   </InfoWindow>
    //   {/* 5.027933760324891, 7.9439141682679875; */}
    // </div>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
