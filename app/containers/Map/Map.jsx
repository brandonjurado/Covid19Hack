import React from 'react';
import MapStyle from './MapStyle.jsx';
import axios from 'axios';

class Map extends React.Component {
    constructor(props){
        super(props);
        this.map = null;
        this.locationMarker = null;
        this.currentLatLng = {lat: 32.8205865,lng:-96.8716252 };

        this.state = {}
    }

    updateLocationMarker( query ) {
        console.log( "New location marker for", query )
        
        axios( {
            method: 'post',
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${query.locationString}&key=AIzaSyC1HZdapvzc-wfRPZYZa31LkwcGmklBEow`
        } ).then( ( response ) => {
            this.locationMarker.setMap( null )

            console.log( response )

            const lat = response.data.results[0]["geometry"]["location"]["lat"];
            const lng = response.data.results[0]["geometry"]["location"]["lng"];

            console.log( "Panning to ", response.data.results[0]["geometry"]["location"] )

            this.currentLatLng = new google.maps.LatLng( lat, lng )

            this.map.panTo( this.currentLatLng );

            this.locationMarker = new google.maps.Marker( { 
                position: this.currentLatLng,
                dragable: false,
                animation: google.maps.Animation.DROP,
                map: this.map
            });
        }, ( error ) => {
            console.log( "Google maps returned ", error )
        })
    }

    getCountyAndState( query )
    {
        return axios( {
            method: 'post',
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyC1HZdapvzc-wfRPZYZa31LkwcGmklBEow`
        } );
    }

    addLocationMarker( query ) {
        console.log( "Add location marker for", query )

        axios( {
            method: 'post',
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyC1HZdapvzc-wfRPZYZa31LkwcGmklBEow`
        } ).then( ( response ) => {
            console.log( response )

            const lat = response.data.results[0]["geometry"]["location"]["lat"];
            const lng = response.data.results[0]["geometry"]["location"]["lng"];

            console.log( "Panning to ", response.data.results[0]["geometry"]["location"] )

            this.currentLatLng = new google.maps.LatLng( lat, lng )

            this.map.panTo( this.currentLatLng );

            let marker = new google.maps.Marker( { 
                position: this.currentLatLng,
                dragable: false,
                animation: google.maps.Animation.DROP,
                map: this.map
            })
            marker.addListener('click',() => {
                  new google.maps.InfoWindow({
                      content: `${query}`
                  }).open( this.map, marker);
            });;
        }, ( error ) => {
            console.log( "Google maps returned ", error )
        })
    }

   componentDidMount() {
        console.log( "Map Component mounted" )

        this.map = new google.maps.Map( document.getElementById('map'), {
            center: this.currentLatLng ,
            zoom: 11,
            disableDefaultUI: true,
            styles: MapStyle
        });

        this.locationMarker = new google.maps.Marker( { 
            position: this.currentLatLng,
            dragable: false,
            animation: google.maps.Animation.DROP,
            map: this.map
        });
    }

    render() {
        return(
            <div id="map"></div>
        )
    }
}

export default Map;