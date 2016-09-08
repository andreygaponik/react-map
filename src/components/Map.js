import React, { Component } from 'react';

import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from "react-google-maps";

import { connect } from 'react-redux';

import data from '../data/data.json';

class Map extends Component  {

	state = {
    center: {
      lat: -25.363882,
      lng: 131.044922,
    },
    
    markers: [
      {
        position: new google.maps.LatLng(-27.363882, 137.044922),
        showInfo: true
      },
      {
        position: new google.maps.LatLng(-23.363882, 129.044922),
        showInfo: true  
      }
    ]
  }
  
  handleMarkerClick(marker) {
    marker.showInfo = true;
    this.setState(this.state);
  }
  
  handleMarkerClose(marker) {
    marker.showInfo = false;
    this.setState(this.state);
  }

  renderInfoWindow(ref, marker) {
    
    return (

      <InfoWindow 
        key={`${ref}_info_window`}
        onCloseclick={this.handleMarkerClose.bind(this, marker)} >
        
        {ref === 'marker_1' ? 
        
        <div>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            width="16" height="16" viewBox="0 0 16 16">
            <path d="M6 14.5c0 .828-.672 1.5-1.5 1.5S3 15.328 3 14.5 3.672
              13 4.5 13s1.5.672 1.5 1.5zM16 14.5c0 .828-.672 1.5-1.5 
              1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM16 
              8V2H4c0-.552-.448-1-1-1H0v1h2l.75 6.438C2.294 8.805 2 9.368
              2 10c0 1.105.895 2 2 2h12v-1H4c-.552 0-1-.448-1-1v-.01L16 8z"/>
          </svg>
        </div>  
        
        :
        
        <div>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            width="16" height="16" viewBox="0 0 16 16">
            <path d="M3.5 0c-1.7 0-3 1.6-3 3.5 0 1.7 1 3 2.3 3.4l-.5 8c0 
              .6.4 1 1 1h.5c.5 0 1-.4 1-1L4 7C5.5 6.4 6.5 5 6.5 
              3.4c0-2-1.3-3.5-3-3.5zm10 0l-.8 5h-.6l-.3-5h-.4L11 
              5H10l-.8-5H9v6.5c0 .3.2.5.5.5h1.3l-.5 8c0 .6.4 1 1 1h.4c.6 0 
              1-.4 1-1l-.5-8h1.3c.3 0 .5-.2.5-.5V0h-.4z"/>
          </svg>
        </div>
        
        }
      
      </InfoWindow>
      
    );
    
  }

  render() {

    const { shops, pharmacies } = this.props.places;
    console.log({ shops });

    return (
      <section style={{ height: `400px`, width: `400px` }}>

    	 <div><pre>{JSON.stringify(data, null) }</pre></div>
       <hr />

      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              height: '100%'
            }} >
          </div>
        }
        googleMapElement={
          <GoogleMap 
            center={this.state.center}
            defaultZoom={4}
            ref='map'>
            
            {shops.position.map((marker, index) => 

              {
              
              const ref = `marker_${index}`;
              console.log(ref)
              
              return ( <Marker 
                key={index}
                ref={ref}
                position={ marker.pos }
                onClick={this.handleMarkerClick.bind(this, marker)} >
                
                {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
                
              </Marker>
              );
                
              }) 
            } 
          
          </GoogleMap>
        }
      
      />
      </section>
        
    );
  }
}

function mapStateToProps (state) {
  return {
    places: state
  }
}

export default connect(mapStateToProps)(Map)