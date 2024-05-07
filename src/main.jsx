import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "./responsive.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Assuming you no longer need this, but if you do, import using ES module syntax
// import withMT from "@material-tailwind/react/utils/withMT";

// Any other necessary imports or code here
