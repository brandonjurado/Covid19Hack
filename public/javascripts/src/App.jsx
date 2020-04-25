import React from 'react';
import ReactDOM from 'react-dom';
// Sass files
import './App.scss';
// JSX components
import Map from './Map.jsx';
import Toolbox from './Toolbox.jsx';

function App() {
  console.log("Adding react component")
  return (
    <div className="App"> 
        //<img src="javascripts/public/logo512.png" />
        <Map />
        <Toolbox />
    </div>
  );
}

export default App;
