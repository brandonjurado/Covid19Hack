/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import messages from './messages';
import Map from '../Map/Map.jsx';
import Toolbox from '../Toolbox/Toolbox.jsx';
import Login from '../Login/Login.jsx'

// const endpoint_link = "https://09d27ogng5.execute-api.us-east-1.amazonaws.com/dev/"
const endpoint_link =
  'https://09d27ogng5.execute-api.us-east-1.amazonaws.com/dev/users/armsor';

class HomePage extends React.Component {
  constructor(props) {
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
      { "userId": "new_york_ny", "name": "deaths: 2000, case: 50000, recovered: 200"},
      { "userId": "dallas_tx_supply_1", "name": "Toilet_Paper James_Corden 50 https://i.ibb.co/dLtJb3g/tp.jpg 3000_Mountain_Creek_Pkwy_Dallas_TX_75211" },
      { "userId": "dallas_tx_supply_2", "name": "Canned_Soup Kathy_Mulligan 10 https://i.ibb.co/J7y5rpv/canned-soup.png 8575_S_Central_Expy_Dallas_TX_75241" },
      { "userId": "dallas_tx_supply_3", "name": "Orange_Juice OJ_Simpson 9 https://i.ibb.co/BBcVhTM/orange-juice.jpg 1800_Bonnie_View_Rd_Dallas_TX_75216" },
      { "userId": "dallas_tx_supply_4", "name": "Hand_Sanitizer Mike_Myers 16 https://i.ibb.co/RpJhRD8/hand-sanitizer.jpg 5520_Lyndon_B_Johnson_Fwy__Dallas_TX_75240" },
      { "userId": "dallas_tx_supply_5", "name": "Water Kathy_Bates 24 https://i.ibb.co/b3wd7nN/water.jpg 8687_N_Central_Expy_Dallas_TX_75225" },
      { "userId": "dallas_tx_supply_6", "name": "Bleach Obe_Vious 420 https://i.ibb.co/cNLqvsJ/bleach.jpg 1717_Main_St_Dallas_TX_75201" }
    ]

    for ( let d of data )
    {
      console.log( "Populating db with d", d )

      axios( {
        method: 'post',
        url: `https://09d27ogng5.execute-api.us-east-1.amazonaws.com/dev/users`,
        data: d
      } ).then( ( response ) => {
        console.log( "Got EP", response )
      }, (error) => { console.log( "Got EP ", error ); }
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Login end_point={endpoint_link}/>
        <Map ref={ (child) => { this.mapInstance = child } } />
        <Toolbox
            end_point={endpoint_link}  
            ref={ (child) => { this.toolboxInstance = child } }/>
      </div>
    );
  }
}

export default HomePage;
