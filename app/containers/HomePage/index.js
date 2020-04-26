/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Map from '../Map/Map.jsx';
import Toolbox from '../Toolbox/Toolbox.jsx';
import Login from '../Login/Login.jsx'
import axios from 'axios';

// const endpoint_link = "https://09d27ogng5.execute-api.us-east-1.amazonaws.com/dev/"
const endpoint_link = "https://09d27ogng5.execute-api.us-east-1.amazonaws.com/dev/users/armsor"

class HomePage extends React.Component {

    constructor( props )
    {
        super(props);
        this.state = {
            map_ref: null
        }
        this.toolboxInstance = null;
        this.mapInstance = null;
    }

    componentDidMount() {
        // pass map to tool box
        console.log("Toolbox instance ", this.toolboxInstance);
        this.toolboxInstance.setMapInstance( this.mapInstance );

        const data = [
            { "userId": "dallas_tx", "name": "deaths: 600, cases: 4020, recovered: 1" },
            { "userId": "san_francisco_ca", "name": "deaths: 20, case: 150, recovered: 0"},
            { "userId": "new_york_ny", "name": "deaths: 2000, case: 50000, recovered: 200"}
        ]

        for ( var d of data )
        {
            console.log( "Populating db with d", d )
            
            axios( {
                method: 'post',
                url: `https://09d27ogng5.execute-api.us-east-1.amazonaws.com/dev/users`,
                data: d
            } ).then( ( response ) => {
                console.log( "Got EP", response )
            }, (error) => console.log( "Got EP ", error ));
        }
    }

    render() {
        return (
            <div className="App">
              <Login end_point={endpoint_link}/>
              <Map ref={ (child) => { this.mapInstance = child } } />
              <Toolbox end_point={endpoint_link}  
                        ref={ (child) => { this.toolboxInstance = child } }/>
            </div>
        );
    }
}

export default HomePage;
