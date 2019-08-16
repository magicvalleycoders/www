import React from 'react';
import logo from './mvc-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Magic Valley software developers. Technology enthusiasts from Twin Falls, Burley, Rupert, and surrounding Idaho areas. <a href="https://twitter.com/search?q=%23idahocodes">#idahocodes</a>
        </p>
        <div class="links">
          <a href="https://github.com/magicvalleycoders">Github</a>
          <a href="https://actvl.mp/mvc-slack">Slack Channel</a>
          <a href="https://www.meetup.com/Magic-Valley-Coders/">In-person Meetup Group</a>
          <a href="https://twitter.com/magicvalleycode">Twitter</a>
        </div>
      </header>
    </div>
);
}

export default App;
