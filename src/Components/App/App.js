import React from 'react';

import './App.css'

import Header from './../Header/Header'
import Router from './../../Router/Router'

const App = () => {
  return (
    <div className="containerApp">
      <Header />
      <Router />
    </div>
  )
}

export default App;
