import React from 'react';
import './App.css';
import HoverExample from './HoverExample';
import MinimalExample from './MinimalExample';

function App() {
    return (
        <div className="App">
            <h1>Minimal Example</h1>
            <MinimalExample />

            <h1>Hover Example</h1>
            <HoverExample />
        </div>
    );
}

export default App;
