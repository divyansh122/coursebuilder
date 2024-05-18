import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nothing from './components/Nothing';
import CreateModule from './components/Create_Module';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/" element={<Nothing />} />
          <Route path="/create-module" element={<Nothing />} />
        </Routes>
        <CreateModule />
      </div>
    </Router>
  );
}

export default App;
