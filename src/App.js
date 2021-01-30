import React from "react";
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="button">
        <Button size="large">BUTTON</Button>
        <Button size="medium">BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
    </div>
  );
}

export default App;
