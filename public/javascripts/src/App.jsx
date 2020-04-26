import React from 'react';
import ReactDOM from 'react-dom';
// Sass files
import './App.scss';
// JSX components
import Map from './Map.jsx';
import Toolbox from './Toolbox.jsx';
import Login from'./Login.jsx';

const endpoint_link = "https://09d27ogng5.execute-api.us-east-1.amazonaws.com/dev/"

function App() {
  console.log("Adding react component")
  return (
    <div className="App"> 
        <Login end_point={endpoint_link} />
        <Map />
        <Toolbox end_point={endpoint_link}/>
    </div>
  );
}

export default App;
