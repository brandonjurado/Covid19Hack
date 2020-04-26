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

const endpoint_link = "https://09d27ogng5.execute-api.us-east-1.amazonaws.com/dev/"

export default function HomePage() {
  return (
    <div className="App">
      <Login end_point={endpoint_link} />
      <Map />
      <Toolbox end_point={endpoint_link} />
    </div>
  );
}
