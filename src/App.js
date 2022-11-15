import React from 'react';
import './App.css';

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>

        <button type="button" onClick={() => console.log ("Button")}>To the collection</button>
        <button type="button" onClick={() => console.log ("Button")}>Shop all bags</button>
        <button type="button" disabled>Pre-order</button>

      </nav>

      </>
  );
}

export default App;



