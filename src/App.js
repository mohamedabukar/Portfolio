import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Body from './components/body';

export default function App() {
  return (
    <div>
      <Body />
      <Footer />
    </div>
      
    );
}

