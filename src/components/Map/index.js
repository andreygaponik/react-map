import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from "react-google-maps";

import data from '../../data/data.json';
import './style.css';

export default class Map extends Component {
	onClickShops() {
    this.props.getPlaces(this.props.shops);
  }
  onClickPharmacies() {
  	this.props.getPlaces(this.props.hotels);
  }
  onClickClubs() {
  	this.props.getPlaces(this.props.clubs);
  }

  handleMarkerClick(ref, marker) {
    console.log(ref)
  }

  renderInfoWindow(ref, marker) {
  	console.log(marker.info)
    return (

      <InfoWindow 
        key={`${ref}_info_window`} >

       {
				(marker.info === 'shops') ?
				  <div>
			      <svg 
              width="16" height="16" viewBox="0 0 20 20">
              <path d="M6 14.5c0 .828-.672 1.5-1.5 1.5S3 15.328 3 14.5 3.672
                13 4.5 13s1.5.672 1.5 1.5zM16 14.5c0 .828-.672 1.5-1.5 
                1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM16 
                8V2H4c0-.552-.448-1-1-1H0v1h2l.75 6.438C2.294 8.805 2 9.368
                2 10c0 1.105.895 2 2 2h12v-1H4c-.552 0-1-.448-1-1v-.01L16 8z"/>
			      </svg>
			    </div>

			  :

			  (marker.info === 'clubs') ?
			    <div>
			      <svg 
              width="16" height="16" viewBox="0 0 20 20">
			      <path d="M19.325,1.521c0-0.241-0.113-0.468-0.306-0.614c-0.192-0.146-0.444-0.194-0.675-0.125L8.152,3.699
							C8.137,3.703,8.126,3.714,8.111,3.72C8.06,3.738,8.015,3.765,7.969,3.793C7.928,3.819,7.888,3.84,7.854,3.87
							C7.817,3.903,7.79,3.943,7.76,3.984C7.73,4.023,7.7,4.059,7.679,4.104C7.658,4.146,7.647,4.191,7.635,4.238
							c-0.015,0.051-0.029,0.1-0.032,0.155C7.602,4.407,7.595,4.421,7.595,4.438v9.63c-0.727-0.415-1.652-0.67-2.688-0.67
							c-2.373,0-4.231,1.285-4.231,2.926c0,1.64,1.858,2.926,4.231,2.926c2.37,0,4.226-1.285,4.226-2.926c0-0.019-0.008-0.038-0.008-0.057
							c0-0.013,0.008-0.026,0.008-0.039V5.017l8.654-2.477v8.61c-0.728-0.415-1.655-0.67-2.693-0.67c-2.371,0-4.228,1.286-4.228,2.926
							c0,1.642,1.856,2.926,4.228,2.926c2.373,0,4.231-1.284,4.231-2.926c0-0.018-0.007-0.036-0.007-0.057
							c0-0.012,0.007-0.024,0.007-0.039V1.521z M4.906,17.711c-1.541,0-2.693-0.733-2.693-1.388c0-0.655,1.152-1.388,2.693-1.388
							c1.538,0,2.688,0.732,2.688,1.388C7.595,16.978,6.444,17.711,4.906,17.711z M15.094,14.795c-1.539,0-2.69-0.733-2.69-1.388
							c0-0.655,1.151-1.388,2.69-1.388c1.541,0,2.693,0.733,2.693,1.388C17.787,14.062,16.635,14.795,15.094,14.795z"></path>
			      </svg>
			    </div>

			  : 

			  <div>
			    <svg
            width="16" height="16" viewBox="0 0 20 20">
			      <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
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
	      <button onClick={this.onClickPharmacies.bind(this)}>Hotels</button>
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
