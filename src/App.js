import logo from './logo.svg';
import './App.css';
import SymptomInput from './Pages/Symptoms';
import DoctorSignup from './Pages/DoctorSignUp';
import HomePage from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/symptomsInput" element={<SymptomInput />} />
            <Route path="/doctorSignup" element={<DoctorSignup />} />
          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App;
