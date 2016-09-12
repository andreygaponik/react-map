import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from "react-google-maps";
import { connect } from 'react-redux';

import Map from '../components/Map';
import * as MainActions from '../actions/MainActions';

import data from '../data/data.json';

class App extends Component  {
  render() {

    const { center } = this.props;
    const { places } = this.props;

    const { getPlaces } = this.props.MainActions;

    return (
      <div>
        <Map 
          center={center.center}
          shops={places.shops}
          hotels={places.hotels}
          clubs={places.clubs}
          test={places.test}
          getPlaces={getPlaces}
        />
      </div>    
    );
  }
}

function mapStateToProps (state) {
  return {
    center: state.center,
    places: state.places
  }
}

function mapDispatchToProps(dispatch) {
  return {
    MainActions: bindActionCreators(MainActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
