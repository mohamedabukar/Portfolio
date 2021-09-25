import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import BioPage from "./BioPage";
import Apps from "./Apps";
import Contact from "./Contact";
import NavBar from "./Nav";
import Resume from "./Resume";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/Footer';
//import Body from './components/body';

function App() {
  return (
    <>
    <div className="app">
      <NavBar/>
      <div className="sections">

      </div>
    </div>
      
      
    </>
    );
}

export default App;
