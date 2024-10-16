import logo from './logo.svg';
import './App.css';
import SymptomInput from './Symptoms';
import DoctorSignup from './DoctorSignUp';
import HomePage from './Home';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'

import Navbar from './Navbar';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    // <SymptomInput/>
    // <DoctorSignup/>
    <>
      {/* <BrowserRouter>
        <Navbar />
        <HomePage />
      </BrowserRouter>, */}
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
