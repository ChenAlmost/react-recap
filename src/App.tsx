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
        <Modal>
          <h2>哈哈哈哈</h2>
          <h2>嘻嘻嘻嘻</h2>
        </Modal>
    </div>
  );
}

export default App;
