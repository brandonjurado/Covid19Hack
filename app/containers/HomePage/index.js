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

export default function HomePage() {
  return (
    <div className="App">
      {/* <h1>
        <FormattedMessage {...messages.header} />
      </h1> */}
      <Map />
      <Toolbox />
    </div>
  );
}
