/// <reference types="styled-jsx" />

import React from 'react';
import ErrorTest from './components/error-test';
import Modal from './components/modal';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>I am the home page</h1>
        <ErrorTest />
        <Modal />
    </div>
  );
}

export default App;
