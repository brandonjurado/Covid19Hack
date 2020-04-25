import React from 'react';
import MapStyle from './MapStyle.jsx';

class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
            map: null
        }
    }

   componentDidMount() {
        console.log( "Component mounted" )
        
        this.state.map = new google.maps.Map( document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8,
          disableDefaultUI: true,
          styles: MapStyle
        });
    }

    render() {
        return(
            <div id="map"></div>
        )
    }
}

export default Map;