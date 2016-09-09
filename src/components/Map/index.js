import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

import data from '../../data/data.json';

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

  render() {
    const {test, center} = this.props;
    return (
    	<div>
	      <section style={{ height: `400px`, width: `400px` }}>
	      <div><pre>{JSON.stringify(data, null) }</pre></div>
	      <button onClick={this.onClickShops.bind(this)}>Shops</button>{}
	      <button onClick={this.onClickPharmacies.bind(this)}>Pharmacies</button>{' '}
	      <button onClick={this.onClickClubs.bind(this)}>Clubs</button>{' '}

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
		                  position={ marker.position } >
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
