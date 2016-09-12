import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from "react-google-maps";

import data from '../../data/data.json';
import './style.css';

export default class Map extends Component {
	onClickShops() {
    this.props.getPlaces(this.props.shops);
  }
  onClickPharmacies() {
  	this.props.getPlaces(this.props.pharmacies);
  }
  onClickClubs() {
  	this.props.getPlaces(this.props.clubs);
  }

  handleMarkerClick(ref, marker) {
    console.log(ref)
  }

  renderInfoWindow(ref, marker) {
  	console.log(marker.showInfo)
    return (
      
      <InfoWindow 
        key={`${ref}_info_window`} >
        
        {marker.showInfo === false ? 
        
        <div>
          <svg id="Layer_1"
            width="16" height="16" viewBox="0 0 20 20">
            <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
          </svg>
        </div>  
        
        :
        
        <div>
          <svg id="Layer_1"
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
    const {test, center} = this.props;
    return (
    	<div className="map">
	      <section style={{ height: `400px`}}>

	      <button onClick={this.onClickShops.bind(this)}>Shops</button>
	      <button onClick={this.onClickPharmacies.bind(this)}>Pharmacies</button>
	      <button onClick={this.onClickClubs.bind(this)}>Clubs</button>

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
		            center={center}
		            defaultZoom={4}
		            ref='map'>
		            
		            {test.map((marker, index) => {
		              const ref = `marker_${index}`;
		              
		              return ( 
		                <Marker 
		                  key={index}
		                  ref={ref}
		                  position={ marker.position }
		                  onClick={this.handleMarkerClick.bind(this, marker)} >
		                  {this.renderInfoWindow(ref, marker)}
		                </Marker>
		              );
		                
		            }) 
		            } 
		          </GoogleMap>
		        }
		      />
		      </section>
    	</div>
    )
  }
}
