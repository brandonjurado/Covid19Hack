import App from "./App.jsx";
import ReactDOM from 'react-dom'
import React from 'react'

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;