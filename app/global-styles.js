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

  * {color: white !important; }

  #state-farm-icon{
      width:350px;
      height:1.2em;
  }

  #appbar {
      background: linear-gradient(20deg, rgba(255,0,44,1) 4%, rgba(255,79,79,1) 53%, rgba(255,0,69,1) 100%);;
  }

  #neighborhood-searchbar {
    background: red;
  }

  #add-supply-button {
      position: absolute;
      bottom: 20px;
      right: 4px;
      background: rgba(255,0,44,1);
  }

  .MuiExpansionPanelSummary-root.Mui-expanded {
      min-height: 44px;
  }
  .MuiExpansionPanelSummary-content.Mui-expanded {
      margin: 0px 0;
  }

  #searchbox {
      width: 360px;
  }

  .MuiPaper-root {
      padding: 2px;
      background: #818182
  }

  .MuiPaper-rounded {
      border-radius: 2px;
  }

  #form-neighborhood {
      #expansion-panel {
          background: #414447;
          color: white;
          border-radius: 0;
      }
  }

  .tab-list {
      border-bottom: 1px solid #ccc;
      padding-left: 0;
  }

  .tab-list-item {
      display: inline-block;
      list-style: none;
      margin-bottom: -1px;
      padding: 0.5rem 0.75rem;
  }

  .tab-list-active {
      background-color: white;
      border: solid #ccc;
      border-width: 1px 1px 0 1px;
  }
}

#map {
  z-index: 0;
}

`;

export default GlobalStyle;
