import React from 'react';
import ErrorTest from './components/error-test';
import ErrorTest2 from './components/error-test2';
import ErrorBoundary from './components/error-boundary';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>I am the home page</h1>
        <ErrorTest />
    </div>
  );
}

export default App;
