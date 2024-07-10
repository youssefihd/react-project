import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import './Menu.css';

const YourComponent = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  const showToast = (message) => {
    toast.current.show({ severity: 'info', summary: 'Message', detail: message });
  };

  const handleLogInOut = () => {
    if (keycloak.authenticated) {
      keycloak.logout();
    } else {
      keycloak.login();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-left">
          <button className="App-menu" onClick={() => navigate('/institution')}>Institution</button>
          <button className="App-menu" onClick={() => navigate('/card-profile')}>Card Profile</button>
          <button className="App-menu" onClick={() => navigate('/channel')}>Channel</button>
          <button className="App-menu" onClick={() => navigate('/execution-strategy')}>Execution Strategy</button>
          <button className="App-menu" onClick={() => navigate('/execution-plan')}>Execution Plan</button>
          <button className="App-menu" onClick={() => navigate('/key-profile')}>Key Profile</button>
          <button className="App-menu" onClick={() => navigate('/protocol-definition')}>Protocol Definition</button>
          <button className="App-menu" onClick={() => navigate('/protocol-fields')}>Protocol Fields</button>
        </div>
        <div className="App-header-right">
        <button className="App-menu" onClick={() => navigate('/profile')}>Profile</button>
          <button className="App-menu" onClick={handleLogInOut}>{keycloak.authenticated ? 'Logout' : 'Login'}</button>
        </div>
      </header>
      <main className="App-content"></main>
      <Toast ref={toast} />
    </div>
  );
};

export default YourComponent;
