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
  height: 100%
  min-height: 50em;
  background: #2b2a2a;
  top: 0px;
  left: 0px;
  box-shadow: 0px 0px 20px rgba(10,10,10,0.2 );

#sim-graph {
      width: 100%;
    height: 300px;
    text-align: center;
    background-image: url(https://i.ibb.co/HGYRxBk/two-peaks.png);
    background-size: 668px 328px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

#alert-info {
  background: #7289da;
  width: 100%;
  height: auto;
  max-height: 100px; 
  padding: 0.85em;
}

  div[role="tabpanel"] {
    height:80%;
    overflow-y: auto;
  }

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

.card-root {
  position:relative;
  //   display: flex;

  //   .details {
  //     display: flex;
  //     flexDirection: column;
  //   }

  //   .content {
  //     flex: 1 0 auto;
  //   }

    .cover {
      position: absolute;
      top: -20px;
      left: 50%;
      height: 300px;
      width: 250px;
      background-size: 300px 300px;
    }
}

  //   .controls {
  //     display: flex;
  //     alignItems: center;
  //     paddingLeft: theme.spacing(1);
  //     paddingBottom: theme.spacing(1);
  //   }
  // }

  #add-item-button {
      position: absolute;
      bottom: 20px;
      right: 15px;
      background: rgba(255,0,44,1);
  }

  .MuiExpansionPanelSummary-root.Mui-expanded {
      min-height: 44px;
  }
  .MuiExpansionPanelSummary-content.Mui-expanded {
      margin: 0px 0;
  }

  .MuiCard-root {
    background: #414447 !important;
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
