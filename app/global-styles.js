import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, #app, .App, #map, .root{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}

#toolbox {
  position: fixed;
  z-index: 1;
  min-height: 50em;
  background: #2b2a2a;
  top: 0em;
  left:0em;
  box-shadow: 0px 0px 20px rgba(10,10,10,0.2 );

  #state-farm-icon{
      width:350px;
      height:1.2em;
  }

  #appbar {
      background: linear-gradient(20deg, rgba(255,0,44,1) 4%, rgba(255,79,79,1) 53%, rgba(255,0,69,1) 100%);;
  }
}

#map {
  z-index: 0;
}

`;

export default GlobalStyle;
