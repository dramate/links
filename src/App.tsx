import React from 'react';
import './App.css';
import Logo from './components/logo';
import LinksContainer from './components/linkStack';
import Copyright from './components/copyright';

function App() {
  return (
    <div className="App">
      <a href="https://www.dramate.co.uk/">
        <Logo />
      </a>
      <LinksContainer />
      <Copyright />
    </div>
  );
}

export default App;
