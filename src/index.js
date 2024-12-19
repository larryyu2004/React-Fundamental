// Two core packages of React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the root component of project
import App from './App';

// Render the root component to the dom node with the id root
// In public/index.html, we can find <div id="root"></div>, that is the destination
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
