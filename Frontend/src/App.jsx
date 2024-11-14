import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddEmployee from './AddEmployee';

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addemployee" element={<AddEmployee />} />
        </Routes>
    </Router>
  );
};

export default App;
