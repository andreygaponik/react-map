import React from "react";
import {
  GoogleMapLoader,
  GoogleMap,
  InfoWindow,
  Marker
} from "react-google-maps";

const SimpleMap = props => (
  <section style={{ height: `400px`, width: `400px` }}>
    <GoogleMapLoader
      containerElement={
        <div
          {...props.containerElementProps}
          style={{
            height: `400px`,
            width: `400px`
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={3}
          defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
          onClick={props.onMapClick}
        >
          {props.markers.map((marker, index) => (
            <Marker
              {...marker}
              onRightclick={() => props.onMarkerRightclick(index)}
            />
          ))}
        </GoogleMap>
      }
    />
  </section>
);

export default SimpleMap;