import React from "react";
import Simple from "./components/sample/sample";
import State from "./context/state";
import Header from './components/header';
import Card from './components/card';
import './App.scss';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <State>
        {/* <Simple /> */}
        <Card />
      </State>
      {/* </header> */}
    </div>
  );
}

export default App;
