import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
import { PrimeReactProvider } from 'primereact/api';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

// Initialize Keycloak instance
const keycloak = new Keycloak({
  url: 'http://localhost:8080', // Ensure the correct Keycloak server URL
  realm: 'wallet-realm',             // Keycloak realm
  clientId: 'react-login-client'          // Keycloak client ID
});

const keycloakProviderInitConfig = {
  onLoad: 'login-required',
  checkLoginIframe: false,
  pkceMethod: 'S256'
};

ReactDOM.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <ReactKeycloakProvider authClient={keycloak} >
        <App />
      </ReactKeycloakProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);