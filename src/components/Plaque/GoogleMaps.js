import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{ lat: this.props.position.lat, lng: this.props.position.lng }} style={{ width: '450px', height: '250px' }} disableDefaultUI >
        <Marker
          name={'Mariefred'}
          position={{ lat: this.props.position.lat, lng: this.props.position.lng }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD5b4aUMtoIteCwK7lCXLD5N7yO0EPf-98'),
})(MapContainer);
