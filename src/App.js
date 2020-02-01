import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import SubmitPrediction from './components/SubmitPrediction'
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          
          <h1>Register Form</h1>
          <Register />
          <hr></hr>
          <h1>Login Form</h1>
          <Login />
          <hr></hr>
          <h1>Submit Prediction Form</h1>
          <SubmitPrediction />
          <hr></hr>
      </header>
    </div>
  );
}

export default App;
 