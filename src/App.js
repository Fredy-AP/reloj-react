import React, { useState, useEffect } from 'react';
import './App.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="Clock">
      <h1>Reloj Actual</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

export default App;
