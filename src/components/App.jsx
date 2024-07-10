import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Institution from './Intitutions';
import Channel from './Channels';
import ExecutionPlan from './ExecutionPlan';
import CreateInstitution from './CreateInstitution';
import UpdateInstitution from './UpdateInstitution';
import CardProfile from './CardProfile';
import Protocol from './ProtocolDefinition';
import ProtocolFields from './ProtocolFields';
import ExecStrategy from './ExecStrategy';
import Key from './KeyProfile';
import Prof from './Profile';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/profile" element={<Prof />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/execution-plan" element={<ExecutionPlan />} />
        <Route path="/create-institution" element={<CreateInstitution />} />
        <Route path="/update/:id" element={<UpdateInstitution />} />
        <Route path="/card-profile" element={<CardProfile />} />
        <Route path="/protocol-definition" element={<Protocol />} />
        <Route path="/protocol-fields" element={<ProtocolFields />} />
        <Route path="/execution-strategy" element={<ExecStrategy />} />
        <Route path="/key-profile" element={<Key />} />
      </Routes>
    </Router>
  );
};

export default App;
